---
name: Kağan Deniz Portfolio
description: A Precision Dark bilingual single-page portfolio set on stepped obsidian surfaces with crisp alabaster type, restrained periwinkle indigo metadata, emerald availability cues, and hairline glass framing.
colors:
  accent: "#7e8ce0"
  emerald: "#34d399"
  hero-glow: "rgb(126 140 224 / 0.14)"
  canvas: "#08090a"
  surface: "#0f1012"
  surface-elevated: "#15171c"
  stage: "#111216"
  ink: "#f4f5f7"
  ink-secondary: "#a1a6b0"
  ink-muted: "#7c828d"
  line: "rgb(255 255 255 / 0.08)"
  line-strong: "rgb(255 255 255 / 0.16)"
  modal-scrim: "rgb(6 7 9 / 0.78)"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.8vw, 58px)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  headline-contact:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.6vw, 42px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(26px, 3.4vw, 38px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline-modal:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(24px, 3.2vw, 34px)"
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: "-0.03em"
  title-feature:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(22px, 2.4vw, 28px)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0em"
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "12.5px"
    fontWeight: 500
    lineHeight: 1.6
    fontFeature: "'tnum' 1"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  card: "14px"
  xl: "16px"
  full: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter: "24px"
  card-sm: "16px"
  card: "20px"
  card-lg: "24px"
  card-xl: "40px"
  section-pt: "56px"
  section-pt-lg: "80px"
  container: "1120px"
components:
  pill-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 14px"
    height: "36px"
  pill-email:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "44px"
  pill-secondary:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "44px"
  button-case-elevated:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0 14px"
    height: "40px"
  tab-active:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
  surface-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px"
  stage-frame:
    backgroundColor: "{colors.stage}"
    rounded: "{rounded.lg}"
    padding: "12px"
  modal-sheet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    width: "860px"
---

# Design System: Kağan Deniz Portfolio

## Overview

**Creative North Star: "The Precision Dark Studio"**

Built around dark-mode developer craft inspired by Apple, Linear, and Stripe, the portfolio rests on a deep obsidian canvas (`#08090a`) layered with closely stepped charcoal surfaces (`#0f1012`, `#111216`, `#15171c`) and crisp `1px` translucent hairlines. An understated studio glow (`rgb(126 140 224 / 0.14)`) illuminates the hero positioning statement and interactive showcase stage at the top of the page, while subtle vertical text gradients, high-contrast alabaster conversion pills, and a single periwinkle indigo metadata accent keep visual weight on real shipped software.

Density is calm, structured, and immediately scannable for engineering leads and recruiters: tight editorial line lengths (`50ch–68ch`), tabular `IBM Plex Mono` dates and technology lines, typographic skill matrices free of pill-tag noise, unretouched application screenshots framed in dark hardware stages, and direct contact routes at both the hero fold and closing band. Interactive transitions pair `160ms` CSS snaps and a `240ms` exponential dialog settle with spring-driven segmented tab indicators (`motion/react`), honoring `prefers-reduced-motion: reduce` globally.

The system rejects heavy neon glows, saturated multi-accent badges, overlaid labels on product screenshots, and client-only contact forms without delivery backing. Both enterprise systems and independent multi-platform products receive full technical context and native `<dialog>` case studies across Turkish (`/`) and English (`/en/`).

**Key Characteristics:**
- Deep obsidian ground (`#08090a`) stepped cleanly through charcoal surface (`#0f1012`), hardware stage (`#111216`), and elevated slate (`#15171c`).
- Restrained dual-signal palette: periwinkle indigo (`#7e8ce0`) for technical metadata and focus rings, plus emerald (`#34d399`) exclusively for live availability and copy feedback.
- Translucent `1px` hairline framing (`rgb(255 255 255 / 0.08)` and `0.16`) paired with soft top specular edge highlights (`rgb(255 255 255 / 0.06)`).
- Bilingual `Inter` UI/display typography paired with tabular `IBM Plex Mono` (`latin` and `latin-ext` subsets) in natural sentence case.
- Concentric graduated radii (`6px` to `16px` plus `9999px` action/tab pills) and crisp unretouched software framing.

## Colors

A disciplined low-glare obsidian palette anchored by stepped dark neutrals, crisp alabaster conversion surfaces, periwinkle indigo metadata, and a narrow emerald signal.

### Primary
- **Periwinkle Indigo** (`#7e8ce0`): Primary technical accent. Colors enterprise row labels (`Düzey · Year`), Experience periods and Education tags, Skills group titles, `ProjectModal` subtitle metadata, the Contact WhatsApp action prompt, `Hero` showcase case-study hover text, `::selection` highlight (`#08090a` text), and global `2px` `:focus-visible` outlines.
- **Studio Radial Tint** (`rgb(126 140 224 / 0.14)`): Soft elliptical overhead gradient (`radial-gradient(70% 55% at 50% 0%, ...)`) behind the Hero headline and showcase switcher, fading transparently into the obsidian canvas.

### Secondary
- **Availability Emerald** (`#34d399`): Affirmative status signal used exclusively for the `6px` status indicator dot in the Hero availability badge and the clipboard-copied confirmation message in Contact.

### Neutral
- **Obsidian Canvas** (`#08090a`): Root document background (`html`, `body`, viewport `themeColor`), scrollbar track, sticky `Navbar` ground (`82%` opacity with `backdrop-blur-xl`), Contact channel wrapper (`70%` opacity), and text ink inside high-contrast `#f4f5f7` primary action pills.
- **Charcoal Surface** (`#0f1012`): Primary card ground used by `.surface-card` (topped with a `3.2%` to `0.8%` vertical white sheen), Hero status pill (`85%` opacity), Hero and Own-Product tab tracks (`90%` / `100%`), Hero copy-error alert pill, and `ProjectModal` `<dialog>` sheets (`90%` opacity on the sticky top bar).
- **Hardware Stage** (`#111216`): Recessed screenshot stage inside the Hero showcase frame and every `ProjectShot` media frame (portrait mobile captures add a radial mat from `#191b22` to `#0c0d10`).
- **Elevated Slate** (`#15171c`): Interactive elevation step used for active `layoutId` tab pills, `CaseStudyButton` surfaces (`70%` / `100%`), Hero secondary explore pill (`90%`), ProjectModal header buttons (`80%`) and metric wells (`60%`), and the keyboard skip-to-content pill.
- **Crisp Alabaster** (`#f4f5f7`): Primary display and body ink, active tab labels, metric figures, and solid background fill for primary conversion controls (`Navbar` Contact pill, `HeroContact` segmented email pill, `Contact` email row). Hero and Contact lead headlines use `.text-gradient` (`#ffffff` to `#b4b9c4`) over the top line.
- **Cool Silver** (`#a1a6b0`): Secondary ink for section subtitles, nav links, hero second headline line, card descriptions, timeline bullets, Skills technology lists, modal narrative prose, footer summary, and external links at rest.
- **Muted Graphite** (`#7c828d`): Tertiary ink for metric `<dt>` labels, card categories, inactive tabs, inline stack lists, locations, footer stack credit, list markers, and directional link icons.
- **Subtle Hairline** (`rgb(255 255 255 / 0.08)`): Default `1px` border dividing sections, cards, `ProjectShot` stages, metric strips, modal rows, tab tracks, and the outer ring shadow around open dialogs.
- **Strong Hairline** (`rgb(255 255 255 / 0.16)`): Emphasized `1px` border on hovered `.surface-card-interactive` cards, active tab indicators, primary segmented email pills, modal `<dialog>` sheets, modal `ProjectShot` frames, and the skip-to-content link.
- **Dialog Scrim** (`rgb(6 7 9 / 0.78)`): High-opacity backdrop veil (`backdrop-filter: blur(8px)`) dimming the page behind open `ProjectModal` sheets.

### Named Rules
**The Stepped Obsidian Rule.** Depth comes from subtle luminance steps between canvas (`#08090a`), surface (`#0f1012`), hardware stage (`#111216`), and elevated slate (`#15171c`) bounded by `1px` hairlines—never washed mid-grey panels or saturated card fills.

**The Sparing Signal Rule.** Reserve Periwinkle Indigo (`#7e8ce0`) strictly for technical metadata, selection, and focus outlines, and reserve Availability Emerald (`#34d399`) for live availability and copy confirmation; never turn accent colors into decorative multi-tag clutter.

## Typography

**Display & Body Font:** `Inter` (`system-ui, sans-serif` fallback, `latin` and `latin-ext` subsets)
**Mono / Metadata Font:** `IBM Plex Mono` (`400` and `500` weights, `ui-monospace, monospace` fallback, `latin` and `latin-ext` subsets, tabular numerals via `.data-mono`)

**Character:** Natural sentence-case `Inter` delivers crisp negative-tracked display authority (`-0.035em`) and effortless bilingual reading across Turkish and English diacritics (`ğ, ş, ı, İ, ö, ü, ç`). Tabular `IBM Plex Mono` anchors project years, metric values, counts, tech lists, and handles into steady technical grids.

### Hierarchy
- **Display** (`Inter` 600, `clamp(34px, 4.8vw, 58px)`, line-height `1.06`, `-0.035em` tracking): Two-line Hero `<h1>` positioning statement (`.text-gradient` on line 1, Cool Silver on line 2).
- **Contact Headline** (`Inter` 600, `clamp(28px, 3.6vw, 42px)`, line-height `1.1`, `-0.03em` tracking): Two-line closing invitation in Contact.
- **Section Headline** (`Inter` 600, `clamp(26px, 3.4vw, 38px)`, line-height `1.12`, `-0.03em` tracking): Primary headings for `#work`, `#own`, `#experience`, and `#skills`.
- **Modal Headline** (`Inter` 600, `clamp(24px, 3.2vw, 34px)`, line-height `1.16`, `-0.03em` tracking): Case-study project title inside `ProjectModal`.
- **Feature Title** (`Inter` 600, `clamp(22px, 2.4vw, 28px)`, line-height `1.2`, `-0.025em` tracking): Alternating Düzey `EnterpriseFeature` titles.
- **Card & Entry Title** (`Inter` 600, `17.5px`–`21px`, line-height `1.3`–`1.375`, `-0.015em` to `-0.02em` tracking): Featured `ProductCell` titles scale `19px` -> `21px` (`>= 640px`), standard `ProductCell` titles sit at `17.5px`, Experience and Education `<h3>` headings sit at `19px`, and the `Navbar` wordmark sits at `15px` (`-0.02em`).
- **Body** (`Inter` 400–500, `13.5px`–`16.5px`, line-height `1.55`–`1.65`, line length capped at `50ch`–`68ch`): Hero subtitle (`15.5px` / `16.5px` at `>= 900px`); section descriptions (`15.5px`); `EnterpriseFeature` summaries, Experience/Education copy, and `ProjectModal` narrative rows (`15px`); Experience company/school sublines (`500`), bullets, Skills lists, and modal key highlights (`14.5px`); `ProductCell` 2-line taglines (`14px`); and Footer identity line (`13.5px`).
- **UI & Micro Labels** (`Inter` 500–600, `11px`–`14.5px`): Contact primary email label (`14.5px` 600) and channel titles (`14px`); desktop nav links and `ExternalLink` (`13.5px`); primary/explore pills, filter tabs, `CaseStudyButton`, Hero secondary links, and Footer back-to-top (`13px`); Hero status pill, stage tabs, Navbar location, mobile nav links, Hero copy button, Contact copy button, `ProductCell` `CaseStudyButton`, and modal close (`12.5px`); `ProductCell` category, Experience stat `<dt>`, Contact channels header, and modal `<Row>` headings (`12px`, `0.02em` tracking); modal metric `<dt>` (`11.5px`); and `EnterpriseFeature` inline metric `<dt>` (`11px`).
- **Mono Data** (`IBM Plex Mono` 400–500, `11.5px`–`20px`, `tabular-nums`): Experience summary stat `<dd>` (`20px`, `font-semibold`, `-0.02em`); modal metric `<dd>` and full tech stack plus Education GPA (`13px`); `EnterpriseFeature` metric `<dd>`, Experience periods and Education heading, Contact email address and social display URLs, and modal subtitle (`12.5px`); Navbar `TR`/`EN`, Hero stage bar title, Hero pill email, `EnterpriseFeature` company/year and stack summary, `ProductCell` year and stack summary, modal counter (`01 / 10`), Experience stack list, and Skills group `<dt>` (`12px`); and `Projects` filter count badge (`11.5px`).

### Named Rules
**The Sentence-Case Precision Rule.** Headings, navigation links, buttons, and metadata labels stay in crisp sentence/title case with tight negative tracking (`-0.015em` to `-0.035em`) rather than heavy all-caps.

**The Tabular Metadata Rule.** All years, counts, durations, GPAs, metric values, and inline technology strings apply `.data-mono` (`IBM Plex Mono`, `tabular-nums`) so rows and switching tabs maintain steady horizontal alignment.

## Layout

All sections share `.page-shell` (`max-width: 1120px`, centered via `margin-inline: auto`), using `16px` horizontal gutters on mobile and `24px` gutters from `640px` upward. Section anchors set `scroll-margin-top: 76px` to clear the sticky `56px` (`h-14`) top bar. Vertical pacing opens cleanly with `Hero` (`pt-8 pb-6`, stepping to `pt-10 pb-10` at `>= 900px`), followed by hairline-separated sections (`pt-14`, `min-[900px]:pt-20`) for `#work`, `#own`, `#experience`, and `#skills`, closing with `#contact` (`pt-8 pb-16`, `min-[900px]:pt-12`) and `Footer` (`py-8`).

Responsive breakpoints govern multi-column adaptation cleanly:
- **`599px` / `600px`**: `ProjectModal` shifts from a full-bleed `100%` unrounded mobile sheet (`<= 599px`) to a centered `min(860px, calc(100% - 32px))` floating sheet (`max-height: calc(100dvh - 40px)`).
- **`640px` (`sm`)**: `.page-shell` gutter widens from `16px` to `24px`; Navbar location appears; Hero/Projects tablists lock into `rounded-full`; Hero showcase stage padding widens (`p-2` -> `p-3`) and window traffic dots appear; `ProductCell` standard grid opens to 2 columns (`sm:grid-cols-2`); `Experience` 4-item stat bar expands from 2x2 to 4 columns (`sm:grid-cols-4`); `ProjectModal` rows split into `[165px_minmax(0,1fr)]` and metrics grid to 2 columns; `Footer` shifts to horizontal alignment.
- **`768px` (`md`)**: `Projects` featured own-product cards split into 2 columns (`md:grid-cols-2`), and `Experience` `TimelineRow` splits into `[220px_minmax(0,1fr)]`.
- **`860px`**: `#own` aligns its section header beside the filter tablist (`min-[860px]:flex-row min-[860px]:items-end`).
- **`900px`**: Navbar collapses its secondary mobile link shelf onto the primary horizontal row; Hero, Work, Own, Experience, Skills, and Contact step up vertical padding, Hero subtitle (`15.5px` -> `16.5px`), and Contact card padding (`p-6` -> `p-10`).
- **`1024px` (`lg`)**: `EnterpriseFeature` splits into a 12-column alternating showcase (`lg:col-span-5` text / `lg:col-span-7` media, reversing on odd items); `ProductCell` standard row expands to 3 columns (`lg:grid-cols-3`); `Skills` becomes a 2-column hairline matrix; `Contact` aligns its headline beside the `30rem` max channel table (`lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)]`).

`ProjectShot` normalizes ratios per project group using `frameRatio` (averaging landscape widths/heights with a `16 / 10` fallback), fixes the Hero stage at `16 / 9` (`max-h-[460px]`), and renders modal images at intrinsic landscape aspect ratios. Landscape captures use `object-cover object-top`; portrait mobile captures center cleanly (`object-contain`) inside a dark radial mat. Touch targets maintain `52px` (`min-h-13`) on Contact's primary email row, `48px` (`min-h-12`) on Contact secondary channels, `44px` (`min-h-11`) on Hero primary/explore pills, `40px` (`min-h-10`) on `CaseStudyButton`, `ExternalLink`, skip link, and Footer trigger, and `36px` (`min-h-9`) on compact header controls and secondary Hero links.

## Elevation & Depth

This system uses a **hybrid tonal-layering and specular-edge** depth model. Surfaces differentiate primarily through stepped obsidian fills (`#08090a` -> `#0f1012` -> `#111216` -> `#15171c`) and `1px` hairline borders, reinforced by subtle top catch-lights on cards, blurred translucency on sticky bars, and deep shadow + blur separation reserved for open native `<dialog>` layers.

### Shadow Vocabulary
- **Surface Card Specular** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.06), 0 1px 2px rgb(0 0 0 / 0.45)`): Top inner catch-light and subtle contact anchor applied to `.surface-card` containers alongside a `3.2%` to `0.8%` vertical sheen gradient.
- **Primary Pill Lift** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): Tailwind `shadow-sm` separating the bright `#f4f5f7` email pill in `HeroContact` from the radial hero glow.
- **Portrait Device Lift** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): Tailwind `shadow-lg` under portrait mobile app captures inside `ProjectShot`.
- **Modal Sheet Elevation** (`box-shadow: 0 32px 90px -16px rgb(0 0 0 / 0.85), 0 0 0 1px rgb(255 255 255 / 0.08)`): Deep floating dialog shadow plus a crisp outer hairline ring on `ProjectModal`.
- **Modal Backdrop Scrim** (`background-color: rgb(6 7 9 / 0.78); backdrop-filter: blur(8px)`): Blurred obsidian veil dimming the page behind open `<dialog>` sheets.
- **Keyboard Focus Ring** (`outline: 2px solid #7e8ce0; outline-offset: 2px`): High-visibility indigo outline applied globally via `:focus-visible`.

### Named Rules
**The Specular Edge Rule.** Cards signal depth through a `1px` top inner rim (`rgb(255 255 255 / 0.06)`) and border brightening (`0.08` -> `0.16` on hover) rather than heavy drop shadows or scale lifts.

**The Motion-Calibrated Entrance Rule.** State color/border snaps complete in `160ms` (`--duration-snap`, `cubic-bezier(0.16, 1, 0.3, 1)`), active tab indicators glide via damped spring physics (`bounce: 0.16`, `0.34s`–`0.36s`), and dialogs enter over `240ms` (`--duration-dialog`, `translateY(10px) scale(0.985)` + `opacity: 0` to rest), collapsing cleanly under `prefers-reduced-motion: reduce` and `MotionConfig reducedMotion="user"`.

## Shapes

The geometry uses graduated, concentric corner radii bounded consistently by `1px` translucent borders (`border-line` and `border-line-strong`) and clean horizontal/vertical hairline rules:
- **Full Pills (`9999px`):** Navbar Contact CTA, keyboard skip link, Hero availability badge, Hero/Own-Product desktop tab tracks and `layoutId` active pills, and Hero primary/explore pills.
- **Container Frames (`16px`):** Hero showcase outer card, `EnterpriseFeature` screenshot wrapper, `Contact` outer card, desktop `ProjectModal` `<dialog>` (`0px` full-screen below `600px`), and narrow-screen wrapping tab tracks.
- **Product Cards (`14px`):** `ProductCell` containers across the independent products grid.
- **Media Stages & Tables (`12px`):** `ProjectShot` containers, `Experience` 4-column stat bar, `Contact` channel table, and `EnterpriseFeature` nested screenshots.
- **Compact Buttons & Metric Wells (`8px`):** `CaseStudyButton`, `ProjectModal` prev/next/close controls, modal metric wells, Hero stage inner shot, and Hero copy-failure alert.
- **Inset Portrait Media (`6px`):** Phone screenshot frames centered inside `ProjectShot`.

### Named Rules
**The Nested Radius Concentricity Rule.** When nesting a media stage inside a card or showcase frame (`16px` outer card -> `8px` or `12px` inner `ProjectShot` with `8px–12px` padding), keep radii stepped downward proportionally so corner curvature stays concentric.

## Components

### Buttons
- **Shape:** Graduated between `9999px` pills for primary navigation/hero actions and `8px` (`rounded-lg`) compact rectangles for case-study and modal controls; `160ms` (`--duration-snap`) color/border transitions.
- **Primary Email Segmented Pill (`HeroContact` & `Contact`):** High-contrast `#f4f5f7` background with `#08090a` ink, splitting a `mailto:` link (`Mail` icon + semibold label + tabular mono email separated by `border-canvas/15`) from a `Copy`/`Check` clipboard button (`bg-black/5` hovering to `bg-black/10`; mail side hovers to `white/90`). Full pill (`rounded-full`, `min-h-11`) in Hero; flush top row (`min-h-13`) inside Contact's channel table.
- **Navbar Contact Pill:** Compact `min-h-9` `#f4f5f7` pill with `#08090a` `13px` medium text (`hover:opacity-90`).
- **Secondary Explore Pill (`HeroContact`):** `min-h-11` `#15171c` (`90%`) pill with `border-line`, `#f4f5f7` text, and `ArrowDown` icon, shifting to `border-line-strong` and solid `#15171c` on hover.
- **Case-Study Trigger (`CaseStudyButton`):** `8px` radius, `min-h-10`, `13px` medium text with trailing `ArrowRight` (`translate-x-0.5` on hover). `"elevated"` uses `border-line-strong bg-surface-elevated` (hovering `white/10`); `"dark"` uses `border-line bg-surface-elevated/70` (hovering `border-line-strong text-white`).
- **External Link (`ExternalLink`):** Text-only `min-h-10` inline action (`13.5px` / `13px` medium `#a1a6b0` hovering to `#f4f5f7`) paired with a `14px` `ArrowUpRight` icon.

### Tabs & Status Pills
- **Availability Status Pill (`Hero`):** `rounded-full`, `border-line`, `bg-surface/85`, `12.5px` Cool Silver text led by a `6px` `#34d399` emerald dot.
- **Showcase & Filter Tablists (`Hero`, `Projects`):** `border-line bg-surface` tracks (`rounded-2xl sm:rounded-full`, `p-1`) where the selected tab mounts a shared `motion.span` (`layoutId`, `rounded-full border-line-strong bg-surface-elevated`) beneath crisp `#f4f5f7` text (`#7c828d` inactive, `#a1a6b0` hover). `Projects` pairs each filter label with an `11.5px` mono item count.

### Cards / Containers
- **Hero Showcase Stage (`Hero`):** `16px` `.surface-card` window with a `bg-surface-elevated/55` title bar (three subtle `white/15` dots, `12px` mono project title/year, and direct case-study button) above a `#111216` stage (`p-2 sm:p-3`) running `AnimatePresence` transitions across `16/9` `ProjectShot` captures.
- **Enterprise Feature Row (`EnterpriseFeature`):** Alternating `lg:grid-cols-12` split (`border-t border-line py-10 lg:py-14`) pairing Düzey architecture narrative (`#7e8ce0` mono label, headline, description, 3-col hairline `<dl>` metrics strip, 5-item mono stack, and actions) with a `16px` `.surface-card` media stage.
- **Own-Product Card (`ProductCell`):** `14px` `.surface-card surface-card-interactive` vertical flex card (`p-4 sm:p-5`) with edge-to-edge `ProjectShot`, category/year row, `17.5px` or `19px`/`21px` title, 2-line clamped tagline, 3-item truncated mono stack, and `border-t border-line` footer actions.
- **Experience Stat Bar & Ledger (`Experience`):** `12px` `.surface-card` 4-column `<dl>` summary bar above an ordered `<ol>` list of `220px` aside + detail rows (`border-t border-line py-8`) covering work history and Education (`GNO` / `GPA`).
- **Skills Matrix (`Skills`):** Open `border-t border-line lg:grid-cols-2` `<dl>` grid divided strictly by `1px` hairlines (`border-b`, `lg:border-l`), pairing `12px` `#7e8ce0` mono category titles with `14.5px` middle-dot-separated skill lists—no badge clutter.

### Inputs / Fields
There are no form inputs. Structured contact, career, skill, and case-study information renders through semantic definition lists (`<dl>`) and bordered channel lists (`<ul>`) with direct clickable links (`mailto:`, `wa.me`, LinkedIn, GitHub) and accessible live clipboard status (`role="status"`).

### Navigation
- **Sticky Translucent Navbar (`Navbar`):** `sticky top-0 z-40 border-b border-line bg-canvas/82 backdrop-blur-xl` containing a `56px` (`h-14`) primary bar (focus-only skip link, `15px` semibold candidate name + subtle location, centered `13.5px` links above `900px`, mono `TR / EN` `LanguageLink` switcher, and white Contact pill) plus a horizontally scrollable `12.5px` link strip below `900px`.
- **Footer (`Footer`):** Minimal `border-t border-line py-8` closing strip aligning candidate attribution (`13.5px`) and stack credit (`12.5px`) beside an inline `Back to top` anchor (`13px` with `ArrowUp`).

### Case-Study Dialog (Signature)
A native `<dialog>` (`ProjectModal`) styled as an `860px` max floating `16px`-radius `.sheet` on `#0f1012` (`100%` full-bleed `0px` radius below `600px`) with `overscroll-behavior: contain` and `html:has(.sheet[open])` scroll locking. Opens via a `240ms` `--ease-expo` entrance (`translateY(10px) scale(0.985)` + `opacity: 0`) over a `rgb(6 7 9 / 0.78)` blurred backdrop. Features a sticky `bg-surface/90 backdrop-blur-md` top bar with previous/next keyboard (`ArrowLeft`/`ArrowRight`) & button stepping (`01 / 10` mono counter) and close control, clean `ProjectShot`, 2-column hairline `<Row>` specification blocks, `surface-elevated/60` 2-column metric wells, and deterministic focus restoration to the opener button.

## Do's and Don'ts

### Do:
- **Do** step surfaces exclusively across `#08090a` (canvas), `#0f1012` (surface), `#111216` (stage), and `#15171c` (elevated) framed by `1px` `rgb(255 255 255 / 0.08)` and `0.16` hairlines.
- **Do** preserve the top `1px` specular sheen (`inset 0 1px 0 rgb(255 255 255 / 0.06)`) and subtle vertical surface gradient on `.surface-card` containers.
- **Do** pair `Inter` (sentence-case headings and `50ch–68ch` prose) with `.data-mono` (`IBM Plex Mono`, `tabular-nums`) for all years, counts, metrics, stacks, and URLs.
- **Do** keep `ProjectShot` captures unretouched inside `#111216` stages (`object-cover object-top` for landscape, `object-contain` on radial dark mat for portrait) with zero overlay badges or text.
- **Do** restrict `#7e8ce0` to technical metadata, selection, and focus outlines, and `#34d399` strictly to availability and copy confirmation.
- **Do** honor `prefers-reduced-motion: reduce` across both CSS transitions/keyframes (`globals.css`, `ProjectModal.module.css`) and `MotionConfig reducedMotion="user"`.

### Don't:
- **Don't** introduce heavy neon glow halos, bright saturated card backgrounds, or gray pill-tag grids inside `#skills` or project descriptions.
- **Don't** place text overlays, corner ribbons, or gradient scrims across application screenshots in `ProjectShot`.
- **Don't** mix sharp `0px` corners onto desktop cards/buttons or use oversized arbitrary radii that break concentric inner-stage nesting (`16px` -> `12px`/`8px`).
- **Don't** add client-only contact forms without a working delivery backend, or ship copy changes in only one language (`/` vs `/en/`).
- **Don't** animate layout properties like width/height or ignore `scroll-margin-top: 76px` under the sticky `56px` navbar.
