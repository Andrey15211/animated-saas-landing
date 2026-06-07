# FlowPilot AI

FlowPilot AI is a standalone portfolio case study for a fictional revenue-automation SaaS. It presents a conversion-focused landing page with a code-built product dashboard, controlled motion, interactive pricing, accessible FAQ content, a validated lead form, and complete Russian/English localization.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS plus a custom responsive design system
- GSAP, ScrollTrigger, `@gsap/react`, and `useGSAP`
- React Hook Form and Zod
- next-intl
- Vitest

## GSAP Usage

GSAP powers the hero entrance, floating dashboard status cards, staggered feature reveals, and the scroll-driven workflow timeline. Every animation is scoped through `useGSAP`, which uses GSAP context cleanup when components unmount. Continuous and scroll-driven motion is skipped when `prefers-reduced-motion` is enabled.

## Features

- Responsive dark premium SaaS landing page
- Interactive HTML/CSS product command center
- Problem-to-solution workflow comparison
- Six animated feature cards
- Sticky four-step workflow timeline
- Three pricing tiers and lead-volume calculator
- Accessible FAQ accordion
- Zod-validated contact form with success state
- Russian and English locale routes with a UI language switcher

## RU / EN Localization

Russian is the default locale. Visiting `/` redirects to `/ru`; English is available at `/en`. The header switcher preserves the current localized page, while all navigation, cards, dashboard labels, statuses, calculator copy, FAQ content, form fields, loading states, success states, metadata, and validation errors come from `messages/ru.json` and `messages/en.json`.

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000/ru](http://localhost:3000/ru). The root route redirects to Russian automatically.

Run project checks with:

```bash
npm test
npm run lint
npm run build
```

## Vercel Deployment

Import the repository into Vercel and keep the detected Next.js settings. No environment variables are required for this frontend case study. The contact form currently demonstrates client-side validation and a simulated success response; connect its submit handler to a server action or external CRM endpoint for production lead delivery.

## Environment Variables

No environment variables are currently used. `.env.example` documents this explicitly and contains no secrets.

## Skills Demonstrated

This case demonstrates responsive art direction, advanced CSS composition, component architecture, accessible interactive controls, GSAP sequencing and scroll animation, reduced-motion support, localized App Router architecture, localized schema validation, deterministic business logic testing, and production-oriented Next.js delivery.
