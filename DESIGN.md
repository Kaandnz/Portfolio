---
name: Kağan Deniz Portfolio
description: A bilingual single-page portfolio set as a double-feature broadside: raven-black and press-charcoal grounds accented with process yellow and graphic vermilion, interrupted by warm newsprint cream inserts.
colors:
  yellow: "#f2c94c"
  yellow-hot: "#ffd84d"
  vermilion: "#f04c3a"
  vermilion-fill: "#c92a1a"
  vermilion-ink: "#b52012"
  raven: "#0a0a0a"
  press: "#141414"
  press-deep: "#0f0f0f"
  stock: "#f2ead8"
  stock-soft: "#e6dcc4"
  ink: "#111111"
  ink-muted: "#46423a"
  paper-muted: "#c2b9a5"
  white: "#ffffff"
  rule-dark: "rgb(242 234 216 / 0.24)"
  rule-light: "rgb(17 17 17 / 0.24)"
  halftone-dot: "rgb(242 201 76 / 0.2)"
typography:
  display:
    fontFamily: "Antonio, system-ui, sans-serif"
    fontSize: "clamp(42px, 6.2vw, 86px)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.015em"
  display-bill:
    fontFamily: "Antonio, system-ui, sans-serif"
    fontSize: "clamp(24px, 2.8vw, 38px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Antonio, system-ui, sans-serif"
    fontSize: "clamp(34px, 4vw, 48px)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline-contact:
    fontFamily: "Antonio, system-ui, sans-serif"
    fontSize: "clamp(36px, 4.2vw, 54px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline-modal:
    fontFamily: "Antonio, system-ui, sans-serif"
    fontSize: "clamp(28px, 4vw, 42px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.06em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13.5px"
    fontWeight: 700
    lineHeight: 1.35
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
spacing:
  gutter-mobile: "12px"
  gutter: "24px"
  card: "20px"
  section: "28px"
  section-gap: "40px"
  container: "1380px"
components:
  navbar-cta:
    backgroundColor: "{colors.vermilion-fill}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "40px"
  navbar-cta-hover:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
  cta-email:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    height: "56px"
  cta-email-hover:
    backgroundColor: "{colors.yellow-hot}"
  cta-email-active:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
  channel-secondary:
    backgroundColor: "{colors.press}"
    textColor: "{colors.stock}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
    height: "48px"
  channel-secondary-hover:
    backgroundColor: "{colors.press-deep}"
    textColor: "{colors.yellow}"
  button-case-dark:
    backgroundColor: "{colors.press-deep}"
    textColor: "{colors.yellow}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "44px"
  button-case-dark-hover:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
  button-case-stock:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.yellow}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 10px"
    height: "44px"
  button-case-stock-hover:
    backgroundColor: "{colors.vermilion-fill}"
    textColor: "{colors.white}"
  ballyhoo-tag:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  ballyhoo-tag-hover:
    backgroundColor: "{colors.yellow}"
  billboard-dark:
    backgroundColor: "{colors.press}"
    textColor: "{colors.stock}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  sheet-cream:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px"
  modal-dark:
    backgroundColor: "{colors.press}"
    textColor: "{colors.stock}"
    rounded: "{rounded.none}"
    width: "880px"
  modal-stock:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    width: "880px"
---

# Design System: Kağan Deniz Portfolio

## Overview

**Creative North Star: "The Double-Feature Broadside"**

The page is built like a classic print double-feature handbill: heavy raven black and press charcoal grounds hold the main identity billboard, the two enterprise flagship systems, the work ledger, and the closing contact block, while warm newsprint cream sheets cut across the page for independent products and grouped technical skills. Process yellow headlines, graphic vermilion dividers, tilted callout tags, and bold two-pixel rules establish immediate visual hierarchy from the very first viewport.

Density stays purposeful and scannable for engineering leads and recruiters: tight ruled grids, zero decorative filler, real software screenshots framed unretouched with zero overlay copy, and instant direct-contact controls at both the top billboard and the bottom channel block. Motion is CSS-only and disciplined—crisp 110ms ink inversions on controls and a 220ms two-ink print-registration settle when opening any case-study dialog.

The system rejects soft dark-mode developer templates—no blurred glass cards, ambient neon glows, gradient headlines, rounded pill buttons, or contact forms without a delivery backend. The candidate's name leads in condensed display type, both halves of the portfolio stand side by side at the fold, and every interaction resolves in hard ink contrast.

**Key Characteristics:**
- Dark raven and charcoal press grounds alternate deliberately with warm newsprint cream paper bands (`#own` and `#skills`).
- Process yellow (`#f2c94c`) and surface-calibrated vermilion (`#f04c3a`, `#c92a1a`, `#b52012`) carry billing hierarchy and dual-track structure.
- Strict zero-radius square geometry (`0px`) framed by 2px structural borders and 1px interior hairlines.
- Three distinct typographic voices: Antonio condensed display caps, Bricolage Grotesque UI copy, and JetBrains Mono exclusively for tabular data.
- CSS-only motion: 110ms color snaps and one authored 220ms dialog print-registration settle, fully bypassed under reduced motion.

## Colors

A high-contrast press palette built on dark ink grounds, warm cream stock, process yellow, and three surface-calibrated vermilion tones.

### Primary
- **Process Yellow** (`#f2c94c`): Primary display ink and conversion fill. Sets the hero `<h1>`, navbar wordmark and bottom border, active language indicator, first Düzey flagship border, section headings (`#experience`, `#contact`), primary email action blocks, dark case-study button borders/text, light case-study button text, focus outlines on dark surfaces, `::selection` highlight, and dark-mode modal labels/metrics.
- **Hot Yellow** (`#ffd84d`): Hover press state for primary process-yellow conversion blocks (`.btn-register:hover`) and the navbar wordmark on hover.

### Secondary
- **Graphic Vermilion** (`#f04c3a`): Bright vermilion ink calibrated for dark press grounds (`#0a0a0a`, `#141414`). Used for the hero double-bill track line, the hero vertical column rule, the second Düzey flagship 2px border, employer/university names in Experience, the clipboard-failure border, and the footer top rule and back-to-top underline.
- **Vermilion Solid Fill** (`#c92a1a`): High-saturation graphic fill paired strictly with pure white (`#ffffff`) ink for the navbar Contact button, the tilted `Artı`/`Plus` divider crest between the two Düzey cards, the hover fill of light-surface case-study and modal close buttons, and the `.btn-register:active` border.
- **Vermilion Stock Ink** (`#b52012`): Deepened vermilion calibrated for AAA/AA contrast on warm cream stock (`#f2ead8`). Used for the `#own` section headline, product-cell mono metadata, `#skills` category labels, light-surface external link underlines/hover states, and light-modal metadata/row labels/list markers.

### Neutral
- **Raven Black** (`#0a0a0a`): Root document canvas (`html`, `body`, `<meta name="theme-color">`), contact channel outer frame background, dark scrollbar track, and the inner 2px gap ring inside dark-surface `:focus-visible` outlines.
- **Press Charcoal** (`#141414`): Elevated dark panel background used for the hero billboard, Düzey `LineItem` cards, the Experience ledger, the Contact block, secondary contact channel rows, dark `<dialog>` case studies, and portrait screenshot mats inside cream product cells.
- **Deep Press** (`#0f0f0f`): Recessed dark well used for the hero secondary social grid tiles, clipboard error alert box, Experience 3-column summary bar, dark `CaseStudyButton` resting fill, `ProjectShot` frame mat, and secondary Contact row hover fills.
- **Newsprint Stock** (`#f2ead8`): Warm cream paper used as default body ink on dark grounds, as the full-width surface background for `#own`, `#skills`, and own-product `<dialog>` modals, for resting `.ballyhoo-tag` fills, for `.btn-register:active` press inversion, and for major dark-ground structural borders (`Hero`, `#own`, `#skills`, `Artı/Plus` crest, `ProjectShot` frames, and Contact channel box; also used at 35%–40% opacity in Experience/Contact grid dividers and 95% opacity for Experience body paragraphs).
- **Soft Stock** (`#e6dcc4`): Warm newsprint scrollbar track inside `.sheet-stock` light sections and cream modals.
- **Press Ink** (`#111111`): Dense charcoal-black ink on cream stock and process-yellow surfaces. Sets headings, body copy, collapsed grid rules (`#own`, `#skills`), `.ballyhoo-tag` text and 1.5px borders, light-modal text/borders, primary email CTA text (plus `90%` opacity on the email address), skip-link text/border, light `CaseStudyButton` resting fill, and `.sheet-stock :focus-visible` outlines.
- **Muted Ink** (`#46423a`): Secondary prose and label ink on `#f2ead8` cream stock (`#own` and `#skills` subtitles, light-modal metric labels).
- **Muted Paper** (`#c2b9a5`): Secondary warm-grey ink on dark press surfaces (navbar location and inactive language code, `/` separator at 60% opacity, hero Düzey role subline, Düzey card taglines, Experience prose/locations/bullet items/labels, Contact subtitle/channel header/handles, dark-modal metadata/metric labels, and footer secondary text).
- **Pure White** (`#ffffff`): Crisp white text used exclusively inside solid `#c92a1a` (`vermilion-fill`) controls (`Navbar` Contact CTA and hovered cream-surface `CaseStudyButton` / close buttons).
- **Dark Rule Hairline** (`rgb(242 234 216 / 0.24)`): Translucent cream hairline dividing interior rows on dark surfaces (`LineItem` action footers, hero secondary social borders, Experience aside bottom divider, Contact channel row dividers and halftone border, dark-modal row and metric rules).
- **Light Rule Hairline** (`rgb(17 17 17 / 0.24)`): Translucent ink hairline dividing interior rows inside cream-stock `<dialog>` case studies.
- **Halftone Dot Tint** (`rgb(242 201 76 / 0.2)`): 20% process-yellow radial dot ink used solely inside Contact's `.halftone-band` accent strip.

### Named Rules
**The Surface-Calibrated Vermilion Rule.** Never place bright vermilion (`#f04c3a`) on cream stock or deep vermilion (`#b52012`) on dark press. Use `#f04c3a` on `#0a0a0a`/`#141414`, `#b52012` on `#f2ead8`, and `#c92a1a` solely for solid fills paired with `#ffffff` ink.

**The Alternating Ink-and-Stock Rule.** Sections never drift into washed mid-grey cards. Every container commits either to dark press (`#141414` / `#0f0f0f` with `#f2ead8` and `#c2b9a5` ink) or to warm cream stock (`#f2ead8` with `#111111` and `#46423a` ink).

**The Single-Register Yellow Action Rule.** Solid process yellow (`#f2c94c`) with `#111111` ink marks the primary email CTA and keyboard skip link; secondary channels stay dark (`#141414` / `#0f0f0f`) until hovered or focused.

## Typography

**Display Font:** `Antonio` (`system-ui, sans-serif` fallback, `latin` and `latin-ext` subsets)
**Body Font:** `Bricolage Grotesque` (`system-ui, sans-serif` fallback, `latin` and `latin-ext` subsets)
**Label/Mono Font:** `JetBrains Mono` (`ui-monospace, monospace` fallback, `latin` and `latin-ext` subsets, tabular numerals enabled via `.data-mono`)

**Character:** Condensed uppercase Antonio acts like woodblock poster type for names, double-bill headings, and section titles. Bricolage Grotesque carries card headings, editorial prose, and structural labels with strong legibility across Turkish and English, while JetBrains Mono locks technical stacks, dates, GPA, and contact handles into crisp tabular alignment.

### Hierarchy
- **Display** (`Antonio` 700, `clamp(42px, 6.2vw, 86px)`, line-height `0.88`, `-0.015em` tracking, uppercase): The candidate name `<h1>` once at the top of the hero billboard.
- **Display Double-Bill** (`Antonio` 700, `18.5px` on small screens, `24px` at `>= 480px`, scaling via `clamp(24px, 2.8vw, 38px)` at `>= 900px`, line-height `1.02` -> `0.98`, `0.01em` tracking, uppercase): Dual-track subhead pairing enterprise systems and own products (with `0.72em` `+` separator). The tilted `Artı`/`Plus` divider crest sits at `26px` (`line-height: 1`, `700`).
- **Headline** (`Antonio` 700, `clamp(34px, 4vw, 48px)`, line-height `0.95`, `-0.01em` tracking, uppercase): Primary section titles for `#own`, `#experience`, and `#skills`. Contact steps up to `clamp(36px, 4.2vw, 54px)` (`line-height: 1.08`), and the case-study `<dialog>` title scales at `clamp(28px, 4vw, 42px)` (`line-height: 1.06`).
- **Title** (`Bricolage Grotesque` 800, `20px`–`24px`, line-height `1.15`, `-0.01em` tracking): Featured Düzey `LineItem` titles scale `20px` -> `22px` (`>= 900px`) -> `24px` (`>= 1200px`). Experience roles and the Education degree sit at `21px` (`800`, tight leading), while `#own` `ProductCell` titles sit at `17.5px` (`800`, snug). The `Navbar` wordmark uses `Antonio` `20px` (`21px` at `>= 900px`, `0.04em` tracking, `line-height: 1`).
- **Body** (`Bricolage Grotesque` 400–800, `14px`–`16.5px`, line-height `1.35`–`1.55`, prose capped at `56ch`–`68ch`): Contact primary email label at `16.5px` (`800`); section descriptions, Contact secondary channel names, Experience companies/schools (`700`), and desktop hero role (`700`) at `16px`; Experience descriptions, Education details, and modal case-study prose (`overview`, `challenge`, `solution`) at `15.5px`; `#own` intro, Skills group items (`500`), Experience achievement bullets, Contact status/WhatsApp prompt (`600`), desktop hero email label (`800`), and Antonio footer billing (`15px`, `0.06em` tracking) at `15px`; mobile hero email label (`800`), desktop hero metadata, desktop `LineItem` taglines, and default `ExternalLink` (`700`) at `14.5px`; mobile `LineItem` taglines and Experience locations at `14px`.
- **Label & Utility Controls** (`Bricolage Grotesque` 700–800, `12px`–`13px`, uppercase, `0.04em`–`0.08em` tracking): `12px` for mobile nav links, mobile Contact CTA, hero copy button, `ProductCell` `CaseStudyButton` override, Experience stat/stack/GPA labels, Contact channels header, and modal row labels (`800`, `0.08em`); `12.5px` for desktop nav links, desktop Contact CTA, default `CaseStudyButton`, modal close and metric `<dt>` labels, Experience Education header (`800`), and Skills category labels (`800`); `13px` for skip-to-content link, desktop secondary Hero social tiles (`12.5px` mobile), footer `Built with` line, and footer `Back to top` anchor (`0.08em`).
- **Mono Data** (`JetBrains Mono` 500–700, `12px`–`16px`, tabular figures): `12px` for `.ballyhoo-tag` badges (`700`, `1.3` line-height), navbar location, mobile hero email address, mobile `LineItem` stack line (`500`), and `ProductCell` stack/year line (`700`); `12.5px` for navbar `TR`/`EN` switcher, desktop hero email address, and desktop `LineItem` stack line (`500`); `13px` for Experience stack lists (`1.5` line-height) and hero clipboard error address; `13.5px` for Experience periods, Contact email address and social handles, `ProductCell` link size override (sans `ExternalLink`), modal subtitle (`500`), modal metric values (`700`), and modal tech stack; `15px` for Education GPA; `16px` for Experience summary stat `<dd>` values.

### Named Rules
**The Three-Voice Division Rule.** Antonio sets display names, double-bill headings, and section titles in uppercase; Bricolage Grotesque sets prose, card titles, and UI labels; JetBrains Mono with tabular numerals sets only technical stacks, dates, handles, GPA, and metrics.

**The Twelve-Pixel Floor Rule.** No label, nav item, ballyhoo tag, or mono caption drops below `12px` at any viewport width.

## Layout

All page bands align inside `.broadside-frame` (`max-width: 1380px`, centered via `margin-inline: auto`) with `24px` inline gutters at `900px` and up, tightening to `12px` gutters below `900px`. `<main>` uses `10px` top / `56px` bottom padding on mobile and `16px` top / `64px` bottom padding on desktop. Vertical spacing locks into clear structural intervals: `12px` (`16px` desktop) from Hero to `#work`, `20px` from `#work` to `#own`, and `40px` between `#own`, `#experience`, `#skills`, and `#contact`, closing with `48px` footer bottom padding.

Responsive breakpoints govern real layout shifts across mobile and desktop:
- **`480px`**: Hero double-bill subtitle steps from `18.5px` to `24px`.
- **`599px` / `600px`**: `ProjectModal` shifts from a `100%` full-screen unbordered mobile sheet (`<= 599px`) to a centered `min(880px, calc(100% - 48px))` sheet (`>= 600px`) with a `155px` left label column (`grid-cols-[155px_minmax(0,1fr)]`), while `#own` shifts from 1 to 2 columns.
- **`639px` / `640px`**: `.ballyhoo-tag` tightens to `2px 8px` padding below `640px`; at `>= 640px`, navbar location appears, Experience stat bar splits into 3 columns, Skills switches to `[10rem_1fr]` label/value rows, Contact heading splits to two lines, and Footer switches to horizontal alignment.
- **`768px`**: Experience `LedgerRow` splits into `[minmax(176px,14rem)_minmax(0,1fr)]` with the period/location column spanning vertically.
- **`899px` / `900px`**: Container gutter increases from `12px` to `24px`, `.ballyhoo-tag` activates alternating `-1.2deg` / `1deg` tilt, Navbar collapses onto a single horizontal row, and card/section paddings and heading sizes step up.
- **`960px`**: Hero splits into `[1.32fr_0.68fr]` across a 2px vertical vermilion divider, and `#work` aligns both Düzey flagships beside the tilted `Artı`/`Plus` crest (`grid-cols-[1fr_auto_1fr]`).
- **`1024px`**: `#skills` shifts to a 2-column matrix and `#contact` aligns its headline beside the `34rem` max channel block (`lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)]`).
- **`1100px`**: `#own` expands from 2 columns to 4 columns (`min-[1100px]:grid-cols-4`).
- **`1200px`**: Düzey `LineItem` titles step from `22px` to `24px`.
- **`1280px`**: Experience `LedgerRow` opens into its full 3-column ledger (`xl:grid-cols-[14.5rem_minmax(0,1fr)_minmax(15rem,19rem)]`).

Screenshots inside `ProjectShot` normalize across each group using `frameRatio` (averaging landscape `width / height`, falling back to `16 / 10`). Landscape captures use `object-cover object-top` to keep application headers intact; portrait mobile captures center cleanly with `object-contain` on `#0f0f0f` (`#141414` on cream cells) without overlays or badges. Primary interactive touch targets meet at least `44px` (`min-h-11`), with `48px` (`min-h-12`) on Contact secondary rows and desktop Hero email bar, and `56px` (`min-h-14`) on Contact's primary email bar (`36px` `min-h-9` on slim top-bar navigation links).

## Elevation & Depth

On the main page, depth is purely planar and chromatic—achieved by stepping between `#0a0a0a` ground, `#141414` press panels, `#0f0f0f` recessed control wells, and `#f2ead8` warm cream sheets bounded by 2px borders rather than drop shadows.

### Shadow Vocabulary
- **Case-Study Modal Lift** (`box-shadow: 0 26px 52px -18px rgb(0 0 0 / 0.72)`): The single drop shadow in the system, separating an open native `<dialog>` sheet from the underlying broadside.
- **Modal Scrim** (`background-color: rgb(10 10 10 / 0.8)`): High-opacity raven-black `::backdrop` overlay without backdrop blur, animating in from `rgb(10 10 10 / 0)` over `220ms` (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Focus Registration Ring** (`outline: 2px solid #f2c94c; outline-offset: 2px; box-shadow: 0 0 0 2px #0a0a0a` on dark; `outline: 2px solid #111111; outline-offset: 2px; box-shadow: 0 0 0 2px #f2c94c` inside `.sheet-stock`): Zero-blur two-ring keyboard focus indicator guaranteeing crisp visibility across dark and cream grounds.

### Named Rules
**The Flat-Press Depth Rule.** Sections, cards, buttons, and callout tags remain completely flat at rest and on hover; `rgb(0 0 0 / 0.72)` elevation and `rgb(10 10 10 / 0.8)` scrim dimming are reserved exclusively for open modal `<dialog>` layers.

## Shapes

Every element—billboards, cards, buttons, screenshot frames, stacked tags, list bullets (`list-[square]`), and modal sheets—enforces a strict `0px` corner radius (`rounded: none`). Boundaries rely on `2px` solid structural borders (`border-2`) for section sheets, media frames, buttons, and outer channel containers; `1.5px` solid `#111111` ink borders on `.ballyhoo-tag` badges; and `1px` translucent hairlines (`rgb(242 234 216 / 0.24)` on dark, `rgb(17 17 17 / 0.24)` on cream) for interior row separators and secondary social tiles.

In `#own` and `#skills`, grids use collapsed-border geometry (`border-t-2 border-l-2` on the grid wrapper paired with `border-r-2 border-b-2` on every cell) so adjacent lines remain uniformly `2px` without doubling. Graphic broadside character comes from three restrained devices kept strictly off reading prose and screenshots: alternating `.ballyhoo-tag` tilts (`-1.2deg` odd, `1deg` even above `900px`, cleared to `none` under reduced motion), the `-3deg` tilted `Artı`/`Plus` divider crest (`>= 960px`), and Contact's bottom `.halftone-band` (`16px` tall radial dot strip of `rgb(242 201 76 / 0.2)` dots at `1.25px` radius on an `8px x 8px` grid).

**The Sharp-Edge Broadside Rule.** Never apply `border-radius` above `0px` or soft pills anywhere in the interface; keep halftone dot textures and subtle angle tilts strictly off prose blocks and software screenshots.

## Components

### Buttons
- **Shape:** Sharp `0px` corners across all controls, `110ms` `ease` color transitions (`--duration-snap`), minimum `44px` hit height (`48px`–`56px` on primary email rows).
- **Primary Email Split CTA (`.btn-register`):** Full-width `2px` `#f2c94c` yellow fill with `#111111` ink, containing a `mailto:` link (`Mail` 15px/17px icon + bold label + `break-all` mono email at `90%` ink) beside a `border-l-2 border-ink` copy button (`Copy` / `Check` 14px icon). Hovers to `#ffd84d`; copy button inverts to `#111111` fill with `#f2c94c` text; `:active` snaps to `#f2ead8` fill with `#c92a1a` border.
- **Navbar Contact CTA:** Solid `#c92a1a` vermilion fill with `#ffffff` `12px`/`12.5px` uppercase text (`min-h-9` / `min-h-10` on desktop), inverting to `#f2c94c` fill with `#111111` ink on hover.
- **Case-Study Openers (`CaseStudyButton`):** Surface-aware (`"dark"` vs `"stock"`). On dark cards: `2px` `#f2c94c` border, `#0f0f0f` fill, `#f2c94c` text, inverting to `#f2c94c` fill with `#111111` ink on hover. On cream cards: `2px` `#111111` border, `#111111` fill, `#f2c94c` text, shifting to `#c92a1a` fill/border with `#ffffff` text on hover.
- **Modal Close Button:** Sticky top-bar trigger with `16px` `X` stroke icon (`min-h-11`): `#f2c94c` text inverting to `#f2c94c`/`#111111` on dark modals; `#111111` fill / `#f2c94c` text shifting to `#c92a1a` / `#ffffff` on cream modals.

### Tags & Links
- **Ballyhoo Stack Tags (`.ballyhoo-tag`):** Cream `#f2ead8` background, `#111111` `12px` bold JetBrains Mono text, `1.5px solid #111111` border, `4px 10px` padding (`2px 8px` below `640px`), tilted `-1.2deg` / `1deg` above `900px`, shifting to `#f2c94c` on hover.
- **External Links (`ExternalLink`):** Bold `14.5px` (`13.5px` inside `#own` `ProductCell`) underlined link (`1.5px` thickness, `0.2em` offset) with a `15px` `ArrowUpRight` icon (`min-h-11`): `#f2ead8` text with `#f2c94c` underline hovering to `#f2c94c` on dark; `#111111` text with `#b52012` underline hovering to `#b52012` on cream.

### Cards / Containers
- **Hero Billboard (`Hero`):** `2px` `#f2ead8` outer border on `#141414`, splitting identity/double-bill/ballyhoo tags (`1.32fr`) from role metadata + `HeroContact` (`0.68fr`) across a `2px` `#f04c3a` divider.
- **Düzey Feature Cards (`LineItem`):** `2px` border (`#f2c94c` on first flagship, `#f04c3a` on second) on `#141414` (`12px` / `20px` padding), holding framed `ProjectShot`, bold title (`20px`–`24px`), tagline, mono stack summary, and `1px` top-bordered (`rule-dark`) footer actions.
- **Own-Product Cells (`ProductCell`):** Collapsed-grid cream cells (`#f2ead8`, `14px` padding, `2px` `#111111` rules) holding `ProjectShot` (`border-ink bg-press`), `17.5px` bold title, `#b52012` mono stack/year line, `CaseStudyButton`, and optional live/GitHub links.
- **Experience Stat Bar & Ledger (`Experience`):** `#141414` outer frame (`border-stock/40`), 3-column `#0f0f0f` summary bar (`dl`), and ordered ledger rows (`ol` with `border-stock/35` 2px grid lines) separating period/location, role/company/achievements, and stack/GPA.
- **Skills Matrix (`Skills`):** Cream `#f2ead8` sheet (`border-2 border-stock`) with a collapsed-border 2-column `dl` grid (`border-ink`), `#b52012` `12.5px` uppercase group names, and `#111111` `15px` medium tech lists.

### Inputs / Fields
There are no form inputs. All structured records (`Contact` channel block, `Experience` stat bar and ledger rows, `Skills` matrix, and `ProjectModal` detail table) use semantic definition lists (`<dl>`) or ruled key-value rows with uppercase structural labels and direct clickable links (`mailto:`, `wa.me`, GitHub, LinkedIn) plus accessible clipboard copy feedback (`role="status"`).

### Navigation
- **Navbar:** Slim non-sticky header inside `.broadside-frame` underlined by `border-b-2 border-yellow`. Holds a focus-only skip link (`#f2c94c` fill, `2px solid #111111` border), Antonio `20px`/`21px` yellow wordmark + mono location, horizontal-scroll-safe uppercase nav links (`[scrollbar-width:none]`), inline mono `TR / EN` `LanguageLink` switcher (active language in `#f2c94c`, inactive `#c2b9a5` hovering to `#f2ead8`), and the solid vermilion Contact CTA.
- **Footer:** Framed with `border-t-2 border-vermilion`, pairing Antonio `15px` billing and `13px` stack credit on `#c2b9a5` with an uppercase `#f2c94c` back-to-top link underlined in `2px` `#f04c3a`.

### Case-Study Dialog (Signature)
A native modal `<dialog>` (`ProjectModal`) constrained to `min(880px, calc(100% - 48px))` (`100%` full-bleed below `600px`) with `overscroll-behavior: contain` and `html:has(.sheet[open])` scroll locking. Automatically switches between dark press (`#141414` fill, `2px` `#f2c94c` border) for Düzey systems and cream stock (`#f2ead8` fill, `2px` `#111111` border, `.sheet-stock`) for independent products. Opens via CSS-only `register-settle` (`220ms` `cubic-bezier(0.16, 1, 0.3, 1)` from `translate(3px, 6px)` and `0.92` opacity) while dimming the backdrop to `rgb(10 10 10 / 0.8)` (`0.01ms` instant under `prefers-reduced-motion: reduce`), and returns focus cleanly to its opener button on close.

## Do's and Don'ts

### Do:
- **Do** keep every dark section on `#0a0a0a` / `#141414` / `#0f0f0f` and every light sheet (`#own`, `#skills`, own-product modals) on `#f2ead8` cream stock with `#111111` and `#b52012` ink.
- **Do** preserve surface-calibrated vermilion pairing: `#f04c3a` on dark grounds, `#b52012` on cream stock, and `#c92a1a` exclusively for solid fills with `#ffffff` text.
- **Do** enforce `0px` border-radius everywhere and separate grids using `2px` solid outer/grid rules and `1px` translucent interior hairlines (`rgb(242 234 216 / 0.24)` or `rgb(17 17 17 / 0.24)`).
- **Do** keep real software screenshots crisp and unretouched inside `border-2` `ProjectShot` frames (`frameRatio`-normalized, `object-cover object-top` for landscape, `object-contain` on dark mats for portrait).
- **Do** restrict fonts strictly to Antonio (display caps), Bricolage Grotesque (UI prose/labels), and JetBrains Mono (tabular technical metadata), keeping all text `>= 12px`.
- **Do** keep interactive feedback CSS-only using `110ms` ink snaps and the `220ms` (`cubic-bezier(0.16, 1, 0.3, 1)`) dialog registration settle, honoring `prefers-reduced-motion: reduce`.

### Don't:
- **Don't** introduce `border-radius`, rounded pills, blurred glassmorphism, gradient backgrounds, or ambient/hover box-shadows on cards or buttons.
- **Don't** place text, tags, gradient scrims, or status badges over `ProjectShot` images.
- **Don't** place bright `#f04c3a` text on `#f2ead8` cream stock or dark `#b52012` text on `#141414` charcoal.
- **Don't** reuse the `.halftone-band` dot texture behind readable prose, navigation links, or screenshot boxes.
- **Don't** ship fake contact forms or unverified claims; keep contact channels direct, functional, and synchronized across Turkish (`/`) and English (`/en/`).
- **Don't** fade modals or sections from `0` opacity or animate controls with scale/bounce transforms.
