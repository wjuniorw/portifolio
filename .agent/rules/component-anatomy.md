# Rule: Standard Component Anatomy

## Context & Goal
Every component in this project, whether a primitive in `src/core/ui/` or a section in `src/components/`, must strictly follow a predictable file anatomy, strict typing, and a barrel export.

---

## MUST

1. **Mandatory File Triad**: Every component MUST reside in its own folder and contain exactly:
   - `<Name>.tsx`: React component with TypeScript typing and semantic JSX.
   - `<Name>.css.ts`: Style definitions generated via Vanilla Extract.
   - `index.ts`: Barrel export that exposes the public component and types (`export * from './<Name>'`).
2. **Prop Typing and Polymorphism**:
   - Primitives representing generic tags (`Button`, `Heading`, `Text`, etc.) MUST support polymorphism via the `as?: C` prop with `ComponentPropsWithoutRef<C>`.
   - Components must always accept `className?: string` and pass it through in the class merging:
     ```ts
     const classes = [baseStyle, variantStyle, className].filter(Boolean).join(' ')
     ```
3. **Consistent Naming**:
   - Folders in PascalCase (e.g., `AudiencePaths/`, `Differentiation/`).
   - Main file and barrel matching the folder name (`AudiencePaths.tsx`, `AudiencePaths.css.ts`, `index.ts`).
   - Named exports instead of default exports (e.g., `export function AudiencePaths()`).

---

## MUST NOT

1. **DO NOT create components in a single file (legacy `.astro` or `.tsx` without style isolation)**: Do not declare inline CSS styles within `.tsx` or embedded `<style>` tags.
2. **DO NOT use Default Exports in components**: Always prefer Named Exports to facilitate automated refactoring and autocomplete imports.
3. **DO NOT mix styles from other components**: Each component manages its own `.css.ts`. Shared primitives should be imported from `@core/ui`.

---

## Anti-pattern → Correct

### 1. Component File Structure

❌ **Anti-pattern**: Loose file with mixed styles and typing without an index.
```
src/components/
  Hero.tsx  (with inline styles or no separate CSS module)
```

✅ **Correct**: Isolated modular structure.
```
src/components/Hero/
  ├── Hero.tsx
  ├── Hero.css.ts
  └── index.ts
```

### 2. React File Anatomy (`.tsx`)

❌ **Anti-pattern**: Component without prop typing, without className passthrough, and with a default export.
```tsx
// Hero.tsx
export default function Hero(props) {
  return <div style={{ padding: 20 }}>{props.children}</div>
}
```

✅ **Correct**: Named export, typed props, style consumption, and attribute passthrough.
```tsx
// Hero.tsx
import type { HTMLAttributes } from 'react'
import { Container } from '@core/ui'
import * as styles from './Hero.css'

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  className?: string
}

export function Hero({ className, ...props }: HeroProps) {
  return (
    <section className={`${styles.hero} ${className || ''}`.trim()} {...props}>
      <Container className={styles.heroInner}>
        {/* Content */}
      </Container>
    </section>
  )
}
```
