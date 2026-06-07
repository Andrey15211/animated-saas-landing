# FlowPilot AI Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-quality animated SaaS landing page for FlowPilot AI.

**Architecture:** Use Next.js App Router with focused section components, reusable UI primitives, static typed data, and small pure helpers for pricing and validation. Client components own only interactive behavior and GSAP animation scopes.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, GSAP, @gsap/react, React Hook Form, Zod, Vitest

---

### Task 1: Project Foundation

**Files:** `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `app/layout.tsx`, `app/globals.css`

- [ ] Configure Next.js, TypeScript, Tailwind, scripts, metadata, fonts, and global design tokens.
- [ ] Add responsive container, typography, focus, glass, glow, and reduced-motion styles.

### Task 2: Data and Pure Logic

**Files:** `data/features.ts`, `data/pricing.ts`, `lib/pricing.ts`, `lib/validation.ts`, `tests/pricing.test.ts`, `tests/validation.test.ts`

- [ ] Write failing tests for pricing estimates and lead-form validation.
- [ ] Run `npm test` and verify failures are caused by missing implementations.
- [ ] Implement pricing and validation helpers, then rerun tests.

### Task 3: Shared UI

**Files:** `components/ui/Button.tsx`, `components/ui/SectionHeading.tsx`, `components/ui/GlowCard.tsx`, `components/ui/Logo.tsx`, `components/ui/Icons.tsx`

- [ ] Build typed, accessible primitives with consistent variants and focus states.

### Task 4: Marketing Sections

**Files:** `components/sections/Navbar.tsx`, `Hero.tsx`, `ProblemSolution.tsx`, `Features.tsx`, `HowItWorks.tsx`, `Pricing.tsx`, `FAQ.tsx`, `Contact.tsx`, `Footer.tsx`

- [ ] Implement all required content and responsive layouts.
- [ ] Add calculator state, accessible accordion behavior, and validated form success state.

### Task 5: GSAP Motion

**Files:** `hooks/useReducedMotion.ts`, `lib/animations.ts`, relevant section components

- [ ] Register plugins client-side and scope animations through `useGSAP`.
- [ ] Add hero entrance, floating panels, feature reveal, and sticky timeline motion.
- [ ] Ensure reduced-motion users see stable content without continuous animations.

### Task 6: Page Composition and Documentation

**Files:** `app/page.tsx`, `README.md`, `.gitignore`, `.env.example`

- [ ] Compose sections in required order and document setup, deployment, GSAP usage, and demonstrated skills.

### Task 7: Automated and Visual Verification

- [ ] Run `npm install`, `npm test`, `npm run lint`, and `npm run build`.
- [ ] Start the local development server after build passes.
- [ ] Use CloakBrowser screenshots for desktop and mobile review.
- [ ] Fix visible UI, spacing, readability, responsive, form, and consistency issues.
- [ ] Rerun tests and build after fixes.
