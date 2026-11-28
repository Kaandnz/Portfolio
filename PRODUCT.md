# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: tech recruiters and hiring managers (in-house recruiters and engineering leads, in Turkey and abroad) deciding whether to interview Kağan Deniz for a full-stack or backend role. They usually arrive from a CV, LinkedIn or a job application link, scan quickly, and need to judge seniority, stack fit and whether the work is real before reaching out.

Freelance or consulting clients are not the primary audience.

## Product Purpose

A personal portfolio site for Kağan Deniz, Full Stack Developer based in Istanbul. It exists to turn a recruiter's first visit into contact: an email, a call/WhatsApp, a LinkedIn message, or an interview invite.

Success means a hiring reader can, in a short visit, confirm the stack (.NET Core / C#, Java Spring Boot, Angular / React, PostgreSQL / SQL Server), see proof of production work, and find a working way to get in touch.

## Positioning

The combination is the claim: real production enterprise work (SAP and Panorama integrations, a nopCommerce B2B and e-commerce platform with payments, and a route optimization / fleet dispatch app at Düzey; data pipelines, CI/CD and ELK at D&R) **plus** a wide range of shipped personal products across very different platforms (WebRTC voice, multi-model AI assistant, PWA, Android, macOS, browser-based SQL game). Neither half should be dropped: the enterprise work proves he can be trusted with business systems, the side products prove range and initiative.

## Operating Context

- Single-page site, top to bottom: a header band (name, role, current employer, stack, direct contact) followed by the two Düzey projects, then own products, Experience (with education and the former About copy and stats), Skills, Contact, Footer. Every project opens a case-study dialog. There is no separate About section.
- Bilingual: Turkish at `/` (`<html lang="tr">`) and English at `/en/` (`<html lang="en">`), both prerendered as static pages; the language switch is a link between them. A choice is remembered in `localStorage` (`preferred_lang`); on `/`, a script that runs before first paint sends visitors who saved English, or first-time visitors whose browser language isn't Turkish, to `/en/` (crawlers are not redirected). All copy lives in `src/data/translations.ts` and `src/data/portfolioData.ts` as `{ tr, en }` pairs; both languages must be kept in step.
- Recruiters read it on desktop between other candidates and on phones from LinkedIn or messaging apps.

## Capabilities and Constraints

- Stack: Next.js 16 (App Router) with `output: "export"` (fully static, routes `/` and `/en/` from `src/app/[[...lang]]`), React 19, TypeScript, Tailwind CSS 4. No animation libraries: motion is CSS only, and the case study is a native `<dialog>`. Hosted on Firebase Hosting (project `kagandenizz`, serves `out/`). No server runtime, so any dynamic feature has to work client-side or through a third-party service.
- The single source of truth for content is `src/data/portfolioData.ts` (projects, experience, education, skills, personal info) plus `src/data/translations.ts` for UI copy.
- Contact runs on direct channels only, with no form: email (mailto plus copy-to-clipboard with a visible fallback), WhatsApp (a `wa.me` link with a localized prefilled greeting; the number is not shown as text), LinkedIn, and GitHub as secondary. The earlier contact form was removed because the static export on Firebase Hosting has no server to send messages, and a fake success broke the "Contact must actually work" principle. Any future form needs a real delivery path (e.g. Formspree, Web3Forms or a Firebase Function) and real error states before it ships.
- The former placeholder data files (`src/data/experience.ts`, `projects.ts`, `skills.ts`, invented content) have been deleted; `portfolioData.ts`, `translations.ts` and `projectImages.ts` (screenshot sizes and alt text) are the only content sources.

## Brand Commitments

- Name: Kağan Deniz (with the Turkish "ğ"). Title: Full Stack Developer / Full Stack Geliştirici.
- Public links: GitHub `Kaandnz`, LinkedIn, email and phone/WhatsApp as listed in `personalInfo`.
- Turkish-first, English-equal: neither language is a second-class translation.

## Evidence on Hand

- Real work history (`experienceData`): Düzey, Software Developer (June 2025 to present); D&R / Turkuvaz Medya, Software Development Intern (Feb to May 2025); Muğla Sıtkı Koçman University, IT Intern (Jul to Aug 2023).
- Education: B.Sc. Information Systems Engineering, Muğla Sıtkı Koçman University, GPA 3.13 / 4.0.
- Real projects with screenshots in `public/images/projects/*.webp`: Düzey B2B & e-commerce (live: duzeymarket.com), Düzey route optimization (duzey.com.tr), Rota · DailyTracker, SquadVoice, SQL Quest, Elementa, DNZ Market, Koi Theme (macOS), NoDoomScroll (Android), SQL List Formatter. Most personal projects have public GitHub repos and several have live Firebase deployments.
- Case-study "metrics" are descriptive labels (architecture, integrations, database), not measured numbers.
- **Absent, must not be fabricated:** testimonials, client logos, quantified performance or business results, awards, years-of-experience beyond what the dates show, team sizes. The About stat "100% Clean Code & Testing" is an unverifiable claim and should not be added to or repeated elsewhere.
- Screenshots are cropped to the bare app UI from the earlier framed exports by `scripts/crop-shots.mjs`; each carries its origin in a `.webp.json` sidecar.

## Product Principles

1. **Proof over adjectives.** Every claim should point at a real project, employer, link or repo; a recruiter trusts what they can click.
2. **Both halves, every time.** Enterprise depth and product range are presented together; neither is a footnote.
3. **Fast to judge.** Role, stack, current employer and a contact route should be clear within the first screen, without needing to open a case study.
4. **Contact must actually work.** Every channel shown has to deliver; a fake success is worse than no form.
5. **Turkish and English are equals.** Any copy change ships in both languages.
