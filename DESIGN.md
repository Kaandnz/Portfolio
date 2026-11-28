---
name: Kağan Deniz Portfolio
description: A bilingual one-page portfolio set as a carbonless delivery-note form: coloured paper copies on a grey-green desk, printed in form-green ink and filled in with violet carbon.
colors:
  carbon: "#2a2878"
  carbon-tint: "#e3e2ff"
  ink: "#16624f"
  ink-soft: "#335a4f"
  hairline: "rgb(22 98 79 / 0.42)"
  desk: "#c9cdc6"
  ply-white: "#fbfbf8"
  ply-canary: "#f4e58a"
  ply-pink: "#f2c3cf"
  type: "#151515"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(42px, 4.8vw, 70px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.2vw, 40px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.55
  form-title:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 800
    lineHeight: 1.35
    letterSpacing: "0.16em"
    fontVariation: "'wdth' 125"
  label:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 75"
  action:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.05em"
    fontVariation: "'wdth' 75"
  typed:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.35
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
spacing:
  gutter-mobile: "12px"
  cell: "16px"
  gutter: "24px"
  ply-x: "28px"
  ply-gap: "46px"
  container: "1340px"
components:
  ply-white:
    backgroundColor: "{colors.ply-white}"
    textColor: "{colors.type}"
    rounded: "{rounded.none}"
    padding: "22px 28px 30px"
  ply-canary:
    backgroundColor: "{colors.ply-canary}"
    textColor: "{colors.type}"
    rounded: "{rounded.none}"
    padding: "22px 28px 30px"
  ply-pink:
    backgroundColor: "{colors.ply-pink}"
    textColor: "{colors.type}"
    rounded: "{rounded.none}"
    padding: "22px 28px 30px"
  channel-primary:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.ply-white}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    height: "56px"
  channel-row:
    backgroundColor: "{colors.ply-white}"
    textColor: "{colors.type}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
    height: "48px"
  channel-row-hover:
    backgroundColor: "rgb(42 40 120 / 0.07)"
  case-study-opener:
    textColor: "{colors.carbon}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 8px"
    height: "44px"
  case-study-opener-hover:
    backgroundColor: "rgb(42 40 120 / 0.08)"
  case-study-opener-active:
    backgroundColor: "rgb(42 40 120 / 0.15)"
  external-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 8px"
    height: "44px"
  form-field:
    textColor: "{colors.carbon}"
    typography: "{typography.typed}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  section-index-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0 10px"
    height: "36px"
  case-study-sheet:
    backgroundColor: "{colors.ply-white}"
    textColor: "{colors.type}"
    rounded: "{rounded.none}"
    width: "880px"
---

# Design System: Kağan Deniz Portfolio

## Overview

**Creative North Star: "The Delivery Note"**

The page is a carbonless form set (a Turkish *sevk irsaliyesi*) lying on a grey-green office desk. Each kind of work is printed on its own copy: the white top copy holds the identity header and the Düzey line items, the canary copy holds own products, the pink copy holds experience and education, and further white sheets hold skills and contact. The lower copies show their coloured edges under the top sheet; a dashed perforation runs along its foot. Everything the form *says* is printed in form-green ink as condensed caps and 1.5px rules; everything that was *filled in* (dates, stacks, handles, metrics) is a violet carbon impression in a typewriter face.

Density is that of a working document: ruled cells, tight label rows, real screenshots in ruled frames, no decorative white space and no illustration. The light is office daylight: light mode only, flat paper, soft paper shadows, no glow. Motion is near-static; the one authored moment is a case study lifting out of the set as its own sheet.

The confirmed anti-reference is the dark developer-portfolio hero (glow, gradient, mono kickers, job title as the H1, work three screens down), which this system replaced. The name is the H1 and the delivered items are the page.

**Key Characteristics:**
- Coloured paper plies on a desk; the colour of a sheet names what it carries.
- Two inks: form-green prints the form, violet carbon fills it in and marks what can be done.
- Square corners and 1.5px ink rules on every cell; hairlines only inside a field.
- Archivo (variable width) for everything printed or written; Courier Prime only for filled-in data.
- One authored motion: the case-study lift. Every other state is one committed mark.

## Colors

A pastel paper set under two working inks: muted form-green and dense carbon violet on white, canary and pink stock.

### Primary
- **Carbon Violet** (carbon): the carbon impression. Typed values (dates, stack lines, handles, metrics, years), the filled email row that is the page's primary action, the case-study opener, the copy and close controls, the focus ring, and the faint wash behind hovered and pressed controls (7-8% hover, 15% pressed).
- **Carbon Tint** (carbon-tint): secondary text and dividers on a carbon fill only (the email address inside the primary row, the rule beside its copy button).

### Secondary
- **Form Green** (ink): the printed form. Field labels, section-index links, 1.5px rules around every cell, square list markers, external links, the scrollbar thumb.
- **Faded Form Green** (ink-soft): secondary printed text such as locations, company names, ledes on coloured copies, the availability line and the footer.
- **Field Hairline** (hairline): the thin divider between rows inside one ruled field. Decorative only.

### Neutral
- **Office Desk** (desk): the page background and browser theme colour; the navigation index and footer are printed directly on it.
- **Top Copy White** (ply-white): the top sheet and the default sheet (work, skills, contact, the case-study sheet for Düzey items), and the fill of non-primary contact cells.
- **Canary Copy** (ply-canary): the second copy; own products, their case-study sheet, the selection highlight.
- **Pink Copy** (ply-pink): the third copy; experience and education.
- **Typewriter Black** (type): display, headings and body text.

### Named Rules
**The Two Inks Rule.** Form-green prints what the form says (labels, rules, links); carbon violet is what was filled in or what you can do. A label is never violet; a typed value is never green.

**The Copy Names Its Contents Rule.** White, canary and pink are the whole paper stock. A sheet's colour tells the reader what kind of entry it holds; a new section takes an existing copy, never a fourth paper colour.

**The Single Fill Rule.** Exactly one solid carbon fill per channel list: the email row. Every other control is ink on paper.

## Typography

**Display Font:** Archivo, variable with the width axis (fallback Arial Narrow, system-ui)
**Body Font:** Archivo (same family)
**Label/Mono Font:** Courier Prime (fallback Courier New) for typed data only

**Character:** One grotesque stretched across its width axis does all the printed work: widened (112-125%) for the name, headings and form title, condensed (75%) for caps labels. Courier Prime is the typewriter that filled the form in.

### Hierarchy
- **Display** (800, clamp(42px, 4.8vw, 70px), line-height 1, width 112): the name, once, in the header band.
- **Headline** (800, clamp(28px, 3.2vw, 40px), line-height 1.02, width 112): sheet headings (Experience, Skills, Contact). The canary sheet's heading is a step smaller (clamp(24px, 3vw, 30px)); the case-study title is clamp(26px, 4.2vw, 36px).
- **Title** (700, 21px, tight): line-item titles; 20px for experience entries; 16px inside the four-column product grid.
- **Body** (400, 15-16.5px, line-height 1.45-1.55): ledes at 16.5px, entries at 15.5px, line-item taglines at 15px; prose capped at 60-70ch.
- **Form title** (800, 13px, 0.16em tracking, width 125, uppercase): the form's printed title in the header strip; narrows to 100% width and 0.1em tracking below 900px.
- **Label** (700, 12px, 0.06em, width 75, uppercase, form-green): every field label, item number and copy mark. A 500-weight faded variant marks secondary label text.
- **Action** (700, 13px, 0.05em, width 75, uppercase, carbon): the case-study opener, over a 1.5px carbon underline.
- **Typed** (Courier Prime 400, 14.5px, line-height 1.35, tabular figures, carbon): filled-in values; 13-13.5px in tight cells.

### Named Rules
**The Typed-Is-Data Rule.** Courier Prime sets only what a clerk would type into a field: dates, years, stack lists, handles, addresses, grades, metrics. Prose and plain-language prompts stay in Archivo even inside a field.

**The Twelve Pixel Floor Rule.** No label is set below 12px, however condensed.

## Layout

A single centred form set (max 1340px) on the desk with a 24px gutter (12px below 900px). Sheets stack vertically 46px apart; the top sheet carries the lower copies' offset edges under it. Inside a sheet, content is ruled cells, not floating cards: grids draw their outer frame with the cells' own right and bottom rules so no line doubles.

The first viewport is the header band: a three-cell ruled row at 1200px and up (identity | typed fields | contact), two cells with contact spanning beneath at 900-1199px, and a single column below 900px reordered to identity, contact, then fields. The Düzey line items sit side by side from 900px. Own products run four across from 1100px, two from 600px. Experience rows are period | entry | stack at 1280px, period | entry below with stack beneath, and stacked on phones. Sheet padding is 22px 28px 30px on desktop and 14px 12px 20px below 900px.

Screenshots sit in fixed-ratio ruled frames whose ratio is the average of the group's landscape images, so neighbouring cells line up; portrait phone screens are centred whole in that frame on the sheet's own paper. Hit areas are at least 44px tall (40px for fine pointers inside the contact cell).

## Elevation & Depth

Depth is paper on a desk, nothing else: each sheet casts one soft drop shadow, the lower copies are flat coloured sheets offset 5px and 10px down-right under the top sheet, and an opened case study is a sheet lifted off the set with a closer, stronger paper shadow while the set dims under a desk-ink tint (no blur).

### Shadow Vocabulary
- **Sheet on desk** (`box-shadow: 0 18px 30px -20px rgb(30 40 30 / 0.4)`): every sheet at rest.
- **Lifted sheet** (`box-shadow: 0 2px 3px rgb(20 32 26 / 0.18), 0 30px 50px -22px rgb(20 32 26 / 0.55)`): the open case study.
- **Lower copies** (flat canary and pink sheets offset 5px and 10px): only under the top sheet.

### Named Rules
**The Paper Shadow Rule.** A shadow only ever describes paper resting on or lifted off the desk: neutral green-black, soft, below the sheet. No glows, no coloured shadows, no shadows on controls.

## Shapes

Square everything (0px): sheets, cells, buttons, frames, the dialog, the checkbox marks. Boundaries are printed 1.5px form-green rules; inside a ruled field, rows divide on a 1px hairline. The perforation is a 2px dashed green line running bleed-to-bleed across the foot of the top sheet. List bullets are small ink squares. The language switch is a pair of printed checkboxes (a 14px ink square, filled with an 8px carbon square when ticked).

**The Ruled Not Rounded Rule.** If a thing has an edge, the edge is a 1.5px ink rule or a paper edge. Never a radius, never a pill, and a hairline is never the only boundary of a control.

## Components

### Buttons
- **Shape:** square (0px), at least 44px tall.
- **Primary (email):** a full-width carbon-filled row in the channel list, bold 15.5-16.5px label in top-copy white, the address typed in carbon tint beside it; hover underlines the label.
- **Case-study opener:** condensed caps in carbon over a 1.5px carbon underline, padded into a 44px hit area; hover lays an 8% carbon wash, pressed a 15% wash.
- **Utility (copy, close):** condensed caps label in carbon with a 14-16px line icon; same wash states.
- **Focus:** 2px carbon outline, 2px offset, with a 2px top-copy white gap ring, on every control and on every paper.

### Links
- **External:** 15px medium form-green, underlined (1.5px, 0.2em offset), trailed by a 15px arrow-up-right line icon; opens in a new tab and says so to screen readers.
- **Section index:** 13px condensed caps on the desk; underline on hover.

### Cards / Containers
- **Sheets:** square, white, canary or pink paper, 22px 28px 30px padding, sheet-on-desk shadow, a copy mark ("Kopya 2", "Kopya 3") printed small in the bottom-right corner of the lower copies.
- **Line items and product cells:** not cards; ruled cells in a grid. Order is field row (item number, year), framed screenshot, title, one line, typed stack, actions pushed to the cell foot.

### Inputs / Fields
There are no text inputs. **Form fields** are label-value pairs: a printed label on the left (or above on phones) and a typed carbon value, rows divided by hairlines inside a 1.5px ruled frame.

### Navigation
A slim, non-sticky section index printed on the desk above the set, with the availability status at the right on desktop; on phones it scrolls horizontally without a scrollbar. A skip link appears as a ruled white chip on focus. The language switch lives in the header band as printed checkboxes, current language ticked.

### Channel List (signature)
A ruled frame titled by a form label: the carbon email row first, then WhatsApp, LinkedIn and GitHub as white rows on ink rules, each a full-row link with its name in bold sans and its handle typed. In the header band the same list runs as a 2x2 grid on phones, four cells at 640-1199px and a stacked column at 1200px and up. Copying the email reports exactly what happened; on failure the address is shown selectable.

### Case-Study Sheet (signature)
A native modal dialog styled as one copy lifted out of the set: 880px wide square sheet in the item's own paper (white for Düzey, canary for own products), a sticky ruled header strip with the item number and close control, the headline-sized title, a typed category and year, the framed screenshot, then ruled label | content rows. It lifts 10px into place in 240ms on an exponential ease-out from 92% opacity while the set behind dims; reduced motion shows it in place. Full-screen and unruled at the edge below 600px.

## Do's and Don'ts

### Do:
- **Do** put every new kind of content on one of the three existing copies (white, canary, pink) and let its colour carry the meaning.
- **Do** frame every cell, screenshot and field group with a 1.5px form-green rule, and divide rows inside a field with the hairline.
- **Do** set dates, years, stacks, handles and metrics in Courier Prime carbon, and keep prose in Archivo.
- **Do** keep each state one committed mark: an underline, or a 7-8% carbon wash on hover and 15% when pressed, and the carbon focus ring with its paper gap.
- **Do** give every entry its real date and every screenshot a fixed-ratio ruled frame, with text beside it, never on it.
- **Do** keep motion to the case-study lift (240ms, exponential ease-out, opacity never starting at 0) and short colour changes (90ms or instant).

### Don't:
- **Don't** fake the form's history: no rubber stamps, coffee stains, creases or invented serial numbers. Item numbers and copy marks count real things.
- **Don't** add glows, gradients, blur, or coloured shadows; depth is paper only.
- **Don't** round a corner or draw a pill.
- **Don't** add a dark theme; the set is paper under daylight.
- **Don't** set prose, headings or labels in Courier Prime, or bring in a second display face.
- **Don't** animate hover with movement, scale or glow, or fade anything in from zero opacity.
- **Don't** add a second solid carbon fill beside the email row.
