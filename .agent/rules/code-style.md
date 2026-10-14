# Rule: Code Style, TypeScript & Conventions

## Context & Goal
This rule defines the project's code discipline. The goal is to maintain a clean, predictable repository with strict TypeScript typing and without superfluous comments or technical debt introduced by artificial intelligence.

---

## MUST

1. **Strict TypeScript (Strict Mode)**:
   - All typing for props, functions, and returns must be explicit or strongly inferred.
   - Use `import type` to import only type definitions:
     ```ts
     import type { ComponentPropsWithoutRef, ReactNode } from 'react'
     ```
2. **Canonical Import Order**:
   Organize imports in blocks separated by a blank line:
   1. External dependencies (React, Astro, npm libraries).
   2. Primitives and Design System (`@core/ds`, `@core/ui`).
   3. Components and Layouts (`@components/*`, `@layouts/*`).
   4. Local styles (`import * as styles from './<Name>.css'`).
3. **Naming Conventions**:
   - **PascalCase**: React components, component folders, types, and interfaces (`AudiencePaths`, `HeadingProps`).
   - **camelCase**: Vanilla Extract style instances, functions, variables, and properties (`heroInner`, `brandRow`, `statValue`).
   - **UPPER_SNAKE_CASE**: Pure and immutable static constants outside the function scope.
4. **Exclusive Named Exports**:
   Export functions and components explicitly by name (`export function Hero()`) and aggregate them in `index.ts`.

---

## MUST NOT

1. **DO NOT use `any`**: The use of `any` is strictly prohibited. Use literal types, unions, `unknown`, or generics with constraints.
2. **DO NOT leave dead commented-out code**: Remove unused code. The git history preserves old implementations.
3. **DO NOT add obvious comments (AI slop)**: Avoid redundant comments like `// import React`, `// render component`, or `// returns a div`. Write self-explanatory code.
4. **DO NOT mix type and value imports in the same statement without an explicit `type`**: Prefer a separate `import type` to optimize type stripping in the bundler.

---

## Anti-pattern → Correct

### 1. Import and Typing

❌ **Anti-pattern**: Use of `any`, messy imports, and redundant comments.
```tsx
// Importing styles
import * as styles from './Card.css'
// Importing react
import React from 'react'

// Component function
export default function Card(props: any) {
  return <div className={styles.card}>{props.title}</div>
}
```

✅ **Correct**: Named export, strict typing, `import type`, and clean ordering.
```tsx
import type { ReactNode } from 'react'

import { Container } from '@core/ui'

import * as styles from './Card.css'

export interface CardProps {
  title: string
  children?: ReactNode
  className?: string
}

export function Card({ className, children, title }: CardProps) {
  return (
    <div className={`${styles.card} ${className || ''}`.trim()}>
      <h3 className={styles.cardTitle}>{title}</h3>
      {children}
    </div>
  )
}
```
