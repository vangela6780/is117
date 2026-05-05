# Mini Spec (Sprint 1 Deliverable)

## Project Goal
Build a small scrollytelling prototype (not a full portfolio) that demonstrates structured storytelling and spec-driven development.

## Topic
Why scrollytelling is more effective than static web presentation for communication.

## Story Flow (Homepage)
1. Hero: hook the user and state the value of guided scrolling.
2. Problem/Context: explain limits of static pages.
3. Solution: explain spec-driven scrollytelling approach.
4. Key Features: list implementation features.
5. Call to Action: guide user to content page and next steps.

## Required Pages
- Homepage: section-based, full-screen narrative with transitions.
- Content page: less animated reading layout with links back to homepage.

## Navigation Rules
- Homepage section anchors (`#slide-1` ... `#slide-5`).
- Homepage -> content page link includes a `returnTo` query parameter.
- Content page return links honor `returnTo` when provided.

## Design System Rules
- Shared colors, typography, and spacing across pages.
- Reuse same CSS file and button/navigation styles.
- Keep mobile support for nav and section layouts.

## Technical Constraints
- Stack: HTML, CSS, vanilla JavaScript.
- Use Intersection Observer for reveal animations.
- Avoid heavy frameworks/libraries.

## Definition of Done
- [x] Homepage has 5 scrollytelling sections.
- [x] Content page exists and is linked.
- [x] Navigation works across anchors and pages.
- [x] Scroll-triggered reveal animations are implemented.
- [x] Shared design system is applied.
- [x] Repo is on GitHub and deployed with GitHub Pages.
