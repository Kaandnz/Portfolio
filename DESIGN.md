---
name: Kağan Deniz Portfolio
description: A bilingual one-page portfolio set as a dark engineering console of glass panels, mono readouts and a single sky-blue signal.
colors:
  console-black: "#08080a"
  console-floor: "#070709"
  panel-graphite: "#121216"
  readout-white: "#f5f5f7"
  dimmed-readout: "#86868b"
  hairline: "rgba(255, 255, 255, 0.08)"
  hairline-lit: "rgba(255, 255, 255, 0.18)"
  signal-sky: "#38bdf8"
  signal-sky-pale: "#7dd3fc"
  signal-sky-deep: "#0ea5e9"
  indigo-trail: "#818cf8"
  live-emerald: "#34d399"
  alert-rose: "#fb7185"
  archive-violet: "#c084fc"
typography:
  display:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', sans-serif"
    fontSize: "5.5rem"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', sans-serif"
    fontSize: "2.6rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Helvetica Neue', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "'Geist Mono', ui-monospace, 'SF Mono', Menlo, Monaco, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.1em"
  readout:
    fontFamily: "'Geist Mono', ui-monospace, 'SF Mono', Menlo, Monaco, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  gutter-mobile: "24px"
  gutter-tablet: "48px"
  gutter-desktop: "80px"
  section-mobile: "96px"
  section-desktop: "144px"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.readout-white}"
    textColor: "{colors.console-black}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.signal-sky}"
    textColor: "{colors.console-black}"
  button-glass:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.readout-white}"
    rounded: "{rounded.full}"
    padding: "14px 24px"
  button-glass-hover:
    backgroundColor: "rgba(255, 255, 255, 0.10)"
  button-text:
    textColor: "{colors.dimmed-readout}"
    rounded: "{rounded.full}"
    padding: "14px 20px"
  button-submit:
    backgroundColor: "{colors.signal-sky-deep}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.md}"
    padding: "16px 24px"
  button-submit-hover:
    backgroundColor: "{colors.signal-sky}"
  chip-tech:
    backgroundColor: "rgba(255, 255, 255, 0.03)"
    textColor: "{colors.dimmed-readout}"
    typography: "{typography.readout}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  input-field:
    backgroundColor: "rgba(255, 255, 255, 0.03)"
    textColor: "{colors.readout-white}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  card-glass:
    backgroundColor: "rgba(18, 18, 22, 0.65)"
    rounded: "{rounded.xl}"
    padding: "40px"
  nav-pill:
    backgroundColor: "rgba(25, 25, 30, 0.7)"
    textColor: "{colors.readout-white}"
    rounded: "{rounded.full}"
    padding: "10px 24px"
---

# Design System: Kağan Deniz Portfolio

## Overview

**Creative North Star: "The Night Console"**

The site is an engineer's control room after dark. A near-black field (Console Black) holds frosted glass instrument panels, a faint 64px engineering grid, and slow aurora light behind the hero. Information is read like telemetry: section badges are numbered mono readouts (`02 // Selected Works`), the hero carries a live Istanbul clock in TRT, and availability is a pulsing emerald status light. One signal color, Signal Sky, marks what is live, interactive or focused.

Density is generous at the section level (96–144px of vertical air between sections) and tight inside panels, where small mono labels, chips and dividers sit close together like a dashboard. Typography carries the weight: very large, tightly tracked Geist headlines against quiet body copy dimmed to 50–70% white. Glass and specular rim highlights give surfaces an Apple-grade finish; the grid and mono labels keep it an engineering instrument rather than a lifestyle page.

Motion is a calm power-on sequence: lines of type slide up out of clipped masks, panels fade and rise, and buttons lean magnetically toward the pointer. Nothing bounces or loops for attention except ambient background light and status pulses.

**Key Characteristics:**
- Dark-only: one near-black theme, `color-scheme: dark`, no light mode.
- One signal color (Signal Sky) against white-alpha neutrals; other hues are status signals with fixed meanings.
- Frosted glass panels with a 1px light-catching top rim over a faint engineering grid.
- Geist Sans for everything spoken, Geist Mono for everything read as data (labels, years, chips, clock).
- Two-line section headlines: the first line in full white, the second dimmed to 40%.
- Pills everywhere for actions and chips; large 24px corners for panels and project frames.
- Expo-out reveal motion (`cubic-bezier(0.16, 1, 0.3, 1)`), fully neutralised under reduced motion.

## Colors

A monochrome console of near-black and white-alpha readouts, lit by one sky-blue signal and a small set of status lights.

### Primary
- **Signal Sky** (`signal-sky`): the only interface accent. Section badge readouts and their trailing hairline, icon tints, focus rings (2px outline, 3px offset), hover state of the primary button, active skill-tile glow, project role line, the selection highlight (at 28% alpha) and the middle stop of the headline gradient.
- **Signal Sky Pale** (`signal-sky-pale`): hover color for project and experience titles, and the light stops of the headline gradient.
- **Signal Sky Deep** (`signal-sky-deep`): the contact form's submit button only.

### Secondary
- **Indigo Trail** (`indigo-trail`): the tail of the headline gradient, the middle of the scroll-progress bar, and (as `#6366f1` at 26% alpha) one aurora blob. Never a standalone UI color.

### Tertiary (status signals, fixed meanings)
- **Live Emerald** (`live-emerald`): availability ("Available for Hire" pill and pulsing dot), copied/sent confirmations, the case-study "solution" label, and the end of the scroll-progress bar.
- **Alert Rose** (`alert-rose`): the case-study "challenge" label only.
- **Archive Violet** (`archive-violet`): the education marker in Experience only.
- **Project accents**: each project carries its own `accentColor` in content data. It may tint that project's halo, image glow, category dot and index badge, and nothing outside its own card or modal.

### Neutral
- **Console Black** (`console-black`): page background, theme color, scrollbar track, and the fade that hero art dissolves into.
- **Console Floor** (`console-floor`): the footer, one step below the page.
- **Panel Graphite** (`panel-graphite`): the solid base of glass panels (used at 65% alpha with blur).
- **Readout White** (`readout-white`): primary text and the primary button fill. Body copy steps down in white alpha: 90% for emphasis, 70% for taglines, 60% for subtitles, 50% for descriptions, 40% for meta and dimmed headline lines, 20–30% for separators.
- **Dimmed Readout** (`dimmed-readout`): the muted-text token.
- **Hairline** (`hairline`) and **Hairline Lit** (`hairline-lit`): default borders and their hover state. Section dividers use an even lighter 6% white.

### Named Rules
**The One Signal Rule.** Signal Sky is the only accent an interface element may use for emphasis, hover or focus. A new hue enters only as a status signal with a single fixed meaning, recorded here.

**The Own-Card Rule.** A project's accent color never leaves its own card or case-study modal.

**The White-Alpha Rule.** Neutral text and borders are white at an alpha step, not new grays. Pick the nearest existing step (90/70/60/50/40) before inventing one.

## Typography

**Display Font:** Geist (with -apple-system, SF Pro Display, Segoe UI, Helvetica Neue)
**Body Font:** Geist (same stack)
**Label/Mono Font:** Geist Mono (with ui-monospace, SF Mono, Menlo, Monaco)

**Character:** A neutral, engineered grotesk pushed to tight negative tracking at large sizes, paired with its own mono for anything that reads as data. Both load with `latin-ext` so Turkish glyphs (ğ, ş, ı, İ) render natively.

### Hierarchy
- **Display** (700, 3rem → 5.5rem across breakpoints, line-height 1.02, -0.04em): the hero headline only. Its second line drops to 2.25rem → 4.25rem and takes the accent gradient.
- **Headline** (700, 1.875rem → 3.75rem, line-height 1.05, -0.028em): section `h2`s, always two lines, second line at 40% white. Contact uses a 3.75rem variant with the gradient on line two.
- **Title** (700, 1.875rem → 2.6rem, line-height 1.08, -0.03em): project titles, balanced wrapping. Smaller titles (1.25–1.5rem) for experience roles and modal headers.
- **Body** (400, 0.875rem → 1.125rem, line-height 1.625): subtitles and descriptions at 50–70% white. Hero subtitle capped at 48rem; split-layout section subtitles at 28rem.
- **Label** (Geist Mono, 0.75rem, uppercase, 0.1em tracking): section badge readouts, form labels, modal sub-headings.
- **Readout** (Geist Mono, 11px): chips, years, the live clock, footer meta, scroll hint. Uses `tabular-nums` where numbers change.

### Named Rules
**The Readout Rule.** If it's data (a year, index number, tech name, time, location, status), it's set in Geist Mono. If it's a sentence, it's Geist Sans.

**The Two-Line Headline Rule.** Section headlines are two short lines: the claim in white, its qualifier at 40% white. Gradient text is reserved for one line in the hero and one in Contact.

**The Clipped Descender Rule.** Every line that reveals from an `overflow-hidden` mask carries matching bottom padding and negative margin (`0.12–0.16em`) so Turkish cedillas and descenders are never cut.

## Layout

A single scrolling page of full-width sections, each centered in a 1280px container. Section side gutters step 24px → 48px → 80px at the `md` and `lg` breakpoints; vertical section padding is 96px on mobile and 144px from `md` up. Sections after the hero are separated by a 1px top border at 6% white. Anchored sections clear the floating navbar with a small scroll margin.

The main structural grid is 12 columns from `lg` (1024px): projects alternate a 7-column image with a 5-column narrative, swapping sides on every other row; Contact splits 7/5 copy-to-form. Section headers sit in a split layout on desktop (heading left, subtitle bottom-right) and stack on mobile. Skills tiles run 1 → 2 → 3 columns. Below `lg` everything collapses to one column with the image first.

The hero fills the viewport (`100dvh`) in three bands: a top meta bar (name, title, location, live clock), the headline block vertically centered, and a bottom bar of tech chips with a scroll hint. The navbar is a floating pill centered over the page, not a full-width bar.

## Elevation & Depth

Depth is layered glass over a lit void. The page is flat Console Black; ambient light (aurora blobs blurred 110px, a sky glow at the top of the viewport, per-project accent halos blurred 3xl) sits behind content. Surfaces above it are translucent Panel Graphite with backdrop blur and saturation, finished with a 1px gradient rim that is brighter at the top (the specular border). Shadows are dark, long and soft, used to lift glass off the glow behind it. A fixed film-grain noise layer at 3.5% opacity sits over everything.

### Shadow Vocabulary
- **Glass panel** (`0 16px 36px -10px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.04)`): About and Contact panels, mobile menu.
- **Glass pill** (`0 8px 24px -6px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)`): scrolled navbar, floating category pills on images.
- **Project frame** (`0 20px 50px rgba(0,0,0,0.6)`): project screenshots; the frame also rises 6px on hover.
- **Portrait card** (`0 30px 60px -15px rgba(0,0,0,0.8)`): the About portrait card, the deepest lift on the page.
- **Primary glow** (`0 12px 30px rgba(255,255,255,0.15)`): the white primary button's soft halo.
- **Signal glow** (`0 0 10px rgba(56,189,248,0.9)`): the dot on a hovered skill tile.

### Named Rules
**The Lit-Void Rule.** Color light lives behind surfaces, never on them. Glows are blurred fields under glass; panels themselves stay neutral.

**The Specular Rim Rule.** A glass panel gets the 1px top-bright rim. A flat chip or input does not.

## Shapes

Two shape families. Interactive and small things are full pills (9999px): buttons, chips, the navbar, the language toggle, status lights, the nav active indicator. Containers use generous soft corners: 24px for panels, project frames and the portrait card; 16px for skill tiles and modal sub-cards; 12px for inputs, the submit button and contact link tiles; 6px for project index badges. Accent halos bleed out with 48px corners before blurring. Avatar monograms are circles (navbar) or 16px squircles (portrait card). Lines are 1px hairlines; the only thick line is the 2px scroll-progress bar.

## Components

### Buttons
Confident white pills that turn to signal on hover, with a magnetic lean toward the pointer.
- **Shape:** full pill (9999px); contact form submit is the exception at 12px.
- **Primary:** Readout White fill, Console Black text, 14px × 28px, medium weight, soft white glow. Hover fills Signal Sky over 300ms. Press scales to 0.97.
- **Glass (secondary):** 5% white fill, 12% white hairline, 90% white text; hover lifts to 10% fill.
- **Text (tertiary):** no fill, 60% white text rising to white on hover, trailing icon.
- **Submit:** Signal Sky Deep fill, Console Black semibold text, full width, 12px corners; hover to Signal Sky.
- **Magnetic behavior:** wrapped buttons follow the pointer at 35% of its offset on a spring (stiffness 350, damping 22, mass 0.5) and snap back on leave.
- **Copy confirmation:** the label swaps to a check and "Copied!" in Live Emerald for ~2.5s.

### Chips
- **Tech chip:** 3% white fill, 6–7% white hairline, Geist Mono 11–12px at 50–60% white, full pill. Overflow collapses into a "+N more" chip without a border.
- **Status chip:** Live Emerald text on 8% emerald fill with a 20% emerald border and a pulsing 6px dot.
- **Tagline chip:** subtle glass with specular rim and a Signal Sky icon (hero only).

### Cards / Containers
- **Corner Style:** 24px for glass panels and project frames, 16px for tiles.
- **Background:** glass (Panel Graphite at 65% with 24px blur, 190% saturation) or subtle glass (3% white with 16px blur).
- **Shadow Strategy:** see Elevation; glass panel shadow plus specular rim.
- **Border:** 1px white at 6–12%.
- **Internal Padding:** 32–40px for panels, 20–24px for tiles.

### Inputs / Fields
- **Style:** 3% white fill, 8% white hairline, 12px corners, 12px × 16px padding, white 14px text, placeholder at 20% white. Labels above in the mono Label style at 60% white.
- **Focus:** border shifts to Signal Sky at 60% and fill lifts to 6% white.
- **Error / Disabled:** no error state is designed yet; the submit button dims to 50% while sending.

### Navigation
- **Style:** a floating centered pill. At the top of the page it is 40% black with medium blur and a hairline; after 40px of scroll it becomes the glass pill with a deeper shadow.
- **Contents:** KD monogram circle + name, section links (12px, 70% white), a TR/EN segmented toggle (Geist Mono 11px; the active side is a white pill with black bold text), the emerald availability chip (from `lg`), and GitHub/LinkedIn icon buttons.
- **Active state:** a shared 10% white pill with a 14% hairline glides between links on a spring (stiffness 380, damping 32) as sections cross the viewport middle.
- **Mobile:** links collapse behind a menu button into a glass drawer (24px corners) that drops in on a spring, with large 18px links and trailing arrows.

### Section Header (signature)
A mono badge readout (`0N // Title`) in Signal Sky with its icon and a 40px fading hairline, then the two-line headline revealing line by line from clipped masks (0.85s, staggered 90ms), then the subtitle fading up. Split layout on desktop, stacked on mobile. Every section after the hero opens with one.

### Project Showcase Row (signature)
A 16:10 screenshot frame in subtle glass with a specular rim, a floating glass category pill top-left, a project-accent halo bleeding out behind it, and a white "case study" pill that rises in on hover. Beside it: mono meta line (accent-tinted index badge, year, Signal Sky role), Title, tagline at 70%, description at 50%, up to five tech chips, then live/source/case-study buttons. Rows alternate sides and are separated by 6% hairlines. Clicking the frame or title opens the case-study modal.

### Ambient Hero Field (signature)
Three blurred aurora blobs (sky, indigo, emerald) drifting on 22–32s alternating loops, the 64px engineering grid masked to a central ellipse, a canvas particle layer, and a bottom fade to Console Black. It sits behind the hero only.

## Do's and Don'ts

### Do:
- **Do** use Signal Sky for every interactive emphasis: hover, focus, active indicators, badge readouts.
- **Do** set years, indices, tech names, times, locations and labels in Geist Mono; sentences in Geist Sans.
- **Do** open every new section with the Section Header: `0N // Title` badge, two-line headline (white, then 40% white), optional subtitle.
- **Do** keep sections inside the 1280px container with 24/48/80px gutters and 96/144px vertical padding.
- **Do** use the expo-out curve `cubic-bezier(0.16, 1, 0.3, 1)` at 0.6–0.9s for reveals, and keep the global reduced-motion override intact.
- **Do** add matching padding and negative margin to any masked text reveal so Turkish descenders and cedillas aren't clipped.
- **Do** keep every visible string available in both Turkish and English.

### Don't:
- **Don't** introduce a new accent hue; a new color must be a status signal with one fixed meaning, recorded in Colors.
- **Don't** let a project's accent color tint anything outside that project's card or modal.
- **Don't** put color fills on glass panels; light belongs behind surfaces as blurred glow.
- **Don't** use gradient text beyond the hero's second line and the Contact headline's second line.
- **Don't** add a light theme or light sections; the console is dark-only.
- **Don't** use square corners on buttons or chips; actions are pills.
- **Don't** invent new gray values; step down white alpha instead.
