// Crops the framed project screenshots (fake window chrome, phone bezels and a
// dark backdrop baked into 1600x1000 composites) down to the bare app UI.
//
// Usage: node scripts/crop-shots.mjs
//
// Re-runnable and idempotent: every source is read from git at SOURCE_REF (the
// commit that still holds the framed originals), never from the cropped files
// in public/, so a second run writes byte-identical WebP output. Provenance is
// embedded with the impeccable CLI (a JSON sidecar next to each WebP) only when
// it is missing or its text changed, so reruns leave the sidecars alone too.
//
// After a run, copy the printed width/height into src/data/projectImages.ts.

import { execFileSync, execSync } from "node:child_process";
import { existsSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_REF = "82af27d";
const DIR = "public/images/projects";
const MAX_BYTES = 180 * 1024;
const WEBP = { quality: 82, effort: 6 };

// Source rectangles in the 1600x1000 originals, measured from pixel probes:
// window content starts one row below the 1px title-bar border, side borders
// sit at x111 and x1488, and the two windows that end on screen are cut above
// the row where their rounded bottom corners begin. Phone crops sit inside the
// left phone's screen (x390-757, y130-955), below the status bar and clear of
// the rounded screen corners, keeping a few pixels of the app's own margin.
const SHOTS = [
  { id: "duzey-sfa-b2b", file: "duzey-market.webp", app: "Düzey Market (duzeymarket.com)", rect: [112, 162, 1376, 704] },
  { id: "duzey-route-opt", file: "route-opt.webp", app: "the Düzey route optimization planner", rect: [112, 163, 1376, 704] },
  { id: "squadvoice", file: "squadvoice.webp", app: "SquadVoice", rect: [112, 166, 1376, 834] },
  { id: "sql-game", file: "sql-game.webp", app: "SQL Quest", rect: [112, 166, 1376, 834] },
  { id: "dailyrota", file: "dailyrota.webp", app: "Rota · DailyTracker", rect: [112, 166, 1376, 834] },
  { id: "elementa", file: "elementa.webp", app: "Elementa", rect: [113, 167, 1374, 828] },
  { id: "sql-formatter", file: "sql-formatter.webp", app: "SQL List Formatter", rect: [112, 163, 1376, 837] },
  { id: "koi-theme", file: "koi-theme.webp", app: "Koi Theme", rect: [0, 0, 1600, 1000], whole: true },
  { id: "nodoomscroll", file: "nodoomscroll.webp", app: "NoDoomScroll", rect: [398, 180, 352, 754] },
  { id: "dnz-market", file: "dnz-market.webp", app: "DNZ Market", rect: [398, 180, 352, 739] },
];

const impeccable = path.join(
  ROOT,
  ".claude/skills/impeccable/scripts",
  process.platform === "win32" ? "impeccable.cmd" : "impeccable",
);

function readOriginal(file) {
  return execFileSync("git", ["show", `${SOURCE_REF}:${DIR}/${file}`], {
    cwd: ROOT,
    maxBuffer: 64 * 1024 * 1024,
  });
}

function provenance(shot) {
  const rect = shot.rect.join(",");
  const step = shot.whole
    ? `a full-desktop capture kept whole and only re-encoded by scripts/crop-shots.mjs, rect ${rect} of the 1600x1000 original`
    : `cropped to the bare UI by scripts/crop-shots.mjs, rect ${rect} of the 1600x1000 framed original`;
  return `origin: real screenshot of ${shot.app} by Kağan Deniz (pre-existing repo asset at commit ${SOURCE_REF}); ${step}; no generated content`;
}

function embeddedPrompt(outPath) {
  const sidecar = `${outPath}.json`;
  if (!existsSync(sidecar)) return null;
  try {
    return JSON.parse(readFileSync(sidecar, "utf8")).prompt ?? null;
  } catch {
    return null;
  }
}

function embed(outPath, prompt) {
  if (embeddedPrompt(outPath) === prompt) return "kept";
  // The prompt goes through a file so no shell ever parses its text; the
  // launcher is a .cmd on Windows, which only runs through a shell.
  const promptFile = path.join(tmpdir(), `crop-shots-${process.pid}.txt`);
  writeFileSync(promptFile, prompt, "utf8");
  try {
    execSync(`"${impeccable}" embed-prompt "${outPath}" --prompt-file "${promptFile}"`, { cwd: ROOT, stdio: "pipe" });
  } finally {
    rmSync(promptFile, { force: true });
  }
  if (embeddedPrompt(outPath) !== prompt) throw new Error(`${outPath}: provenance did not land`);
  return "written";
}

const rows = [];
let failed = false;

for (const shot of SHOTS) {
  const [left, top, width, height] = shot.rect;
  const original = readOriginal(shot.file);
  const meta = await sharp(original).metadata();
  if (left + width > meta.width || top + height > meta.height) {
    throw new Error(`${shot.file}: rect ${shot.rect} exceeds ${meta.width}x${meta.height}`);
  }

  const output = await sharp(original).extract({ left, top, width, height }).webp(WEBP).toBuffer();
  const outPath = path.join(ROOT, DIR, shot.file);
  writeFileSync(outPath, output);

  const written = await sharp(outPath).metadata();
  const bytes = statSync(outPath).size;
  const provenanceState = embed(outPath, provenance(shot));
  const tooBig = bytes > MAX_BYTES;
  if (tooBig) failed = true;

  rows.push({
    id: shot.id,
    file: shot.file,
    size: `${written.width}x${written.height}`,
    shape: written.width >= written.height ? "landscape" : "portrait",
    kb: (bytes / 1024).toFixed(1) + (tooBig ? " (over 180)" : ""),
    provenance: provenanceState,
  });
}

console.table(rows);
if (failed) {
  console.error(`One or more files exceed ${MAX_BYTES / 1024} KB.`);
  process.exit(1);
}
