# FlowPilot AI Landing Page Design

## Purpose

Build a standalone portfolio case study for FlowPilot AI, a fictional automation SaaS. The page must demonstrate polished visual design, conversion-focused content, responsive engineering, accessible interactions, and controlled GSAP motion.

## Visual Direction

The page uses a dark AI operations command-center aesthetic: near-black and navy surfaces, violet/cyan/electric-blue accents, restrained glass panels, large editorial typography, and luminous workflow lines. The product dashboard is built from semantic HTML and CSS so it remains crisp, responsive, and interactive.

## Page Structure

1. A simple fixed navigation and asymmetric hero with headline, CTAs, product dashboard, and floating automation cards.
2. A problem/solution comparison showing fragmented manual work becoming one connected FlowPilot workflow.
3. Six feature cards with staggered scroll reveals.
4. A sticky four-step timeline that updates the visual workflow as the user scrolls.
5. Three pricing tiers and a lead-volume calculator.
6. An accessible FAQ accordion.
7. A lead form with Zod validation, React Hook Form state, and an inline success state.

## Motion

GSAP and `@gsap/react` control the hero entrance, subtle floating dashboard elements, feature reveals, and timeline progression. `useGSAP` scopes animations and handles cleanup. ScrollTrigger drives viewport-based sequences. Reduced-motion users receive stable final states with no continuous motion.

## Responsive Behavior

Desktop uses asymmetric compositions and a sticky timeline. Tablet and mobile collapse into linear reading order, preserve comfortable type sizes, avoid horizontal overflow, and disable motion patterns that depend on large viewports.

## Accessibility

The page uses semantic landmarks, visible keyboard focus, accessible accordion controls, labelled form fields, inline validation messages, sufficient contrast, and reduced-motion handling.

## Verification

Run lint, unit tests for deterministic pricing/validation logic, and `npm run build`. Only after build succeeds, start the development server and inspect desktop and mobile layouts with CloakBrowser. Fix visible layout, readability, interaction, and responsive defects without redesigning the approved direction.
