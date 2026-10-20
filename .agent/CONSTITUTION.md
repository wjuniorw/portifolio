# CONSTITUTION — Template Landing Page

This document is the master index and the non-negotiable technical constitution for the **Template** landing page.
Each rule lives in isolation under `.agent/rules/` and defines the standards for architecture, code style, design system, component anatomy, styling, SEO, and accessibility.

---

## 1. Fundamental Principles (Inviolable)

1. **Sacred Copywriting**: The landing page copy is a validated business asset. No agent is allowed to change headlines, paragraphs, sales pitches, pricing, or terms without explicit user request.
2. **Absolute Visual Fidelity**: Every improvement or structural refactoring must keep the layout, visual proportions, hierarchy, and responsive behavior 100% identical.
3. **Typing and Design System First**: Styles never use arbitrary values ("magic numbers" or loose hex codes). Every color, spacing, font, or radius must be consumed from `vars` (`@core/ds/tokens.css`).
4. **Native Semantics, SEO, and Accessibility**: The landing page must be search engine friendly (Google, Bing, LLMs/GEO) and accessible (screen readers, keyboard navigation, WCAG 2.1 AA).
5. **Decoupled Componentization**: The Astro page acts only as a shell and hydration orchestrator; visual components are self-contained React islands with isolated styling in Vanilla Extract.

---

## 2. Master Rules Index

| Domain / Rule | File | Main Focus | Applicable Skills |
|---|---|---|---|
| **Architecture** | [`rules/architecture.md`](rules/architecture.md) | Astro Shell + React Islands, hydration (`client:load`, `client:visible`), aliases | `building-components`, `react-best-practices`, `perf-astro` |
| **Design System** | [`rules/design-system.md`](rules/design-system.md) | Token Object Set (`themes/`), theme contract, CSS vars bridge, zero magic strings | `ui-craft`, `impeccable`, `building-components` |
| **Component Anatomy** | [`rules/component-anatomy.md`](rules/component-anatomy.md) | Folder structure (`.tsx`, `.css.ts`, `index.ts`), typed props, polymorphism | `building-components`, `react-best-practices`, `ui-craft` |
| **Core UI & Primitives** | [`rules/core-ui.md`](rules/core-ui.md) | Mandatory reuse of `Container`, `Button`, `Heading`, `Text`, `Section` | `building-components`, `ui-craft`, `web-accessibility` |
| **Styling** | [`rules/styling.md`](rules/styling.md) | Vanilla Extract (`style`, `styleVariants`), selectors, media queries, hover/focus states | `ui-craft`, `impeccable`, `perf-web-optimization` |
| **SEO & Accessibility** | [`rules/seo-accessibility.md`](rules/seo-accessibility.md) | Heading hierarchy, semantic landmarks, skip-links, image alt texts, Core UI for SEO | `seo`, `tlc-generative-engine-optimization`, `web-accessibility` |
| **Code Style & TypeScript** | [`rules/code-style.md`](rules/code-style.md) | Strict typing, import sorting, naming conventions, Clean Code | `react-best-practices`, `deslop`, `the-judge` |

---

## 3. How Agents and Skills Consume These Rules

When an agent or subagent executes a task in this repository, it MUST consult the corresponding rules before making edits:

```markdown
> **Applicable Rules:** Read `.agent/rules/architecture.md` and `.agent/rules/styling.md`.
```

This ensures that each context loads only the necessary constraints with maximum token efficiency, ensuring compliance with the defined architecture.

---

## 4. Standard Structure for Each Rule (`.agent/rules/*.md`)

Each rule file strictly follows this anatomy:
1. **Goal & Context**: Direct explanation of the rule's responsibility.
2. **MUST**: Non-negotiable obligations.
3. **MUST NOT**: Strict prohibitions.
4. **Anti-pattern → Correct**: Practical code examples demonstrating what NOT to do (`❌`) and the right way (`✅`).
