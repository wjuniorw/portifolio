# Rule: Architecture & Island Strategy

## Context & Goal
This rule defines the project's layer division and the governance of the hybrid **Astro Shell + React Islands** architecture. The goal is to guarantee minimal loading time (LCP/TTFB), zero JavaScript by default, and selective hydration on demand.

---

## MUST

1. **Astro as Orchestrator Shell**: Pages (`src/pages/*.astro`) and Layouts (`src/layouts/*.astro`) must be Astro `.astro` components. They do not generate client-side JS runtime unless they use hydration directives.
2. **React Islands for Interactivity and Rich Components**: Any landing page section with state, animation, or future interactivity must reside in `src/components/<ComponentName>/` as a React component (`.tsx`).
3. **Selective Hydration Strategy**:
   - Above-the-fold (e.g., `Hero`): use `client:load` when immediate loading is necessary.
   - Below-the-fold (e.g., `PainProof`, `Faq`, `AudiencePaths`, `Footer`): use `client:visible` to defer loading the JS bundle until the user scrolls near the section.
4. **Respect Path Aliases**:
   - `@core/ds`: Token and theme system.
   - `@core/ui`: Reusable visual primitives.
   - `@components/*`: Landing page business sections.
   - `@layouts/*`: Structural Astro layouts.
5. **Strictly Separate Layers**:
   - `core/ds` NEVER imports `core/ui` or `components`.
   - `core/ui` consumes `core/ds/tokens.css`, but NEVER imports `components`.
   - `components` consumes `core/ui` and `core/ds/tokens.css`.

---

## MUST NOT

1. **DO NOT load unnecessary JS on the client**: Never use `client:load` in below-the-fold components.
2. **DO NOT use deep relative paths**: Avoid `../../../core/ui` when `@core/ui` exists.
3. **DO NOT mix page logic inside section components**: Section components should be independent of specific Astro routes.
4. **DO NOT put unsanitized inline scripts in HTML**: Executable scripts must be bundled or managed via React islands.

---

## Anti-pattern → Correct

### 1. Landing Page Hydration

❌ **Anti-pattern**: Hydrating everything on initial load, blocking the main thread and degrading INP/LCP.
```astro
<!-- src/pages/index.astro -->
<Layout>
  <Hero client:load />
  <Features client:load />
  <Faq client:load />
  <Footer client:load />
</Layout>
```

✅ **Correct**: Wave hydration (`client:load` for the hero, `client:visible` for subsequent sections).
```astro
<!-- src/pages/index.astro -->
<Layout>
  <main>
    <Hero client:load />
    <Features client:visible />
    <Faq client:visible />
    <Footer client:visible />
  </main>
</Layout>
```

### 2. Imports and Layers

❌ **Anti-pattern**: Confusing relative imports that break when moving folders.
```tsx
import { Button } from '../../core/ui/Button/Button'
import { vars } from '../../core/ds/tokens.css'
```

✅ **Correct**: Consistent use of configured path aliases.
```tsx
import { Button } from '@core/ui'
import { vars } from '@core/ds/tokens.css'
```
