## 🤖 AI Agent & Harness Instructions

**Welcome, AI Assistant!** You are operating within the `landing-template`, a highly optimized boilerplate for building modern, high-converting landing pages and bootstrapping businesses.

### 0. Project Constitution & Rules (CRITICAL)
Before making architectural decisions, modifying the design system, or writing any code, **YOU MUST** read:
- **The Project Constitution:** `.agent/CONSTITUTION.md`
- **Specific Rule Files:** Located in `.agent/rules/` (e.g., `architecture.md`, `code-style.md`, `core-ui.md`, `design-system.md`, `seo-accessibility.md`, `styling.md`).

Always adhere strictly to these guidelines.

### 1. Technology Stack & Rules
- **Framework:** Astro (for zero-JS static structure) + React (for interactive `client:*` Islands).
- **Styling:** Vanilla Extract (`.css.ts` files). **NEVER** use Tailwind, inline styles, or global CSS files for component styling.
- **Animations:** Framer Motion (`framer-motion`).
- **Imports:** Always use the `@/` alias for `src/` and `@core/*` for `src/core/*`.

### 2. The Design System (`@core/ui`)
- **NEVER** reinvent primitive components.
- For layout, ALWAYS use `<Section>` and `<Container>` from `@core/ui`.
- For typography, ALWAYS use `<Heading>` and `<Text>` from `@core/ui`.
- Use `vars` from `@core/ds/tokens.css` for any spacing, color, radius, or shadow.

### 3. Business & Marketing Skills (CRITICAL)
This repository is "AI-Ready". It contains custom skills to help the user build their business.
- Before generating copywriting, marketing strategies, or validating the startup idea, **YOU MUST** read the skills located in `.agents/skills/`.
- Use those skills to craft Hormozi-style offers, high-converting CTAs, and validate the product-market fit.

### 4. Development
When starting the dev server, use background mode if your harness supports it:
```bash
astro dev --background
```
Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

### 5. Astro Documentation
- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React components](https://docs.astro.build/en/guides/framework-components/)
