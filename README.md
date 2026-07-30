# Twin Peaks Tech Solution — Website

A full React (Vite) marketing site for Twin Peaks Tech Solution, built to match the navy / electric-blue brand reference: mountain-mark logo, dashboard hero mockup, and premium SaaS component styling across all pages.

## Pages

- `/` — Home (hero, services grid, why-choose-us, process, portfolio preview, testimonials, pricing preview, blog preview, FAQ)
- `/services` — Full services listing · `/services/:slug` — Service detail
- `/portfolio` — Filterable project grid · `/portfolio/:slug` — Case study detail
- `/about` — Company story, values, mission/vision, timeline
- `/pricing` — Plans with monthly/yearly toggle + FAQ
- `/blog` — Filterable article grid · `/blog/:slug` — Article detail
- `/contact` — Contact info + working form UI (front-end only, no backend wired yet)

## Stack

React 19 · React Router 7 · Tailwind CSS v4 (CSS-first `@theme` config) · Framer Motion (installed, available for future motion work) · lucide-react icons

## Getting started

\`\`\`bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
\`\`\`

## Design tokens

All brand colors, fonts, radii, and shadows live in \`src/index.css\` under \`@theme\`. Key values:

- \`--color-navy-950 (#020B1C)\` — dark backgrounds
- \`--color-blue-600 (#0B5CFF)\` — primary accent
- \`--color-cyan-400 (#00D4FF)\` — secondary accent / gradient stop
- Display font: Poppins · Body font: Inter

## Content

Services, portfolio projects, blog posts, and pricing plans are all in \`src/data/*.js\` — edit these files to change copy without touching component code.

## Notes / next steps

- The contact form is UI-only right now (shows a success state on submit but doesn't send anywhere). Wire it to an email service (Resend) or a backend endpoint when ready.
- Lucide's brand/logo icons (GitHub, LinkedIn, X) were removed from the package upstream, so the footer uses small inline SVG marks instead — swap in your own if you'd like different styling.
- No CMS/admin, auth, or database yet — this is the Phase 1 (static frontend) layer from your original master prompt. Phases 2-4 (CMS, client portal, AI chat) would sit behind this.
