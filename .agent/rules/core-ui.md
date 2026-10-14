# Rule: Core UI & Reusable Primitives

## Context & Goal
The `src/core/ui/` folder contains the fundamental interface blocks of the application. They centralize accessibility rules, visual consistency, and semantic hierarchy. Sections in `src/components/` MUST compose these primitives instead of recreating containers, buttons, and typography from scratch.

---

## Available Primitives Catalog

1. **`Container`** (`@core/ui`):
   - Centers horizontal layout with `maxWidth: 1120px` and responsive inline padding.
   - All main content of a section must be wrapped by a `<Container>`.
2. **`Button`** (`@core/ui`):
   - Polymorphic button (`as="button"` by default, or `as="a"` with `href`).
   - Typed variants: `primary` (teal 500), `outline` (stroke border), `secondary` (white with teal text), `ctaOutline` (translucent border for dark/gradient backgrounds).
   - Includes native hover, active, and focus-visible styles.
3. **`Heading`** (`@core/ui`):
   - Semantic and polymorphic heading (`as="h1"`, `as="h2"`, `as="h3"`, etc.).
   - Font variants: `headline` (Hanken Grotesk / 700 default), `display` (high impact titles).
   - Scale variants: `hero` (`clamp(2.25rem, 5vw, 3.5rem)`), `stat` (`clamp(2rem, 4vw, 2.75rem)`), `anchor`, `'32'`, `'24'`, `'20'`.
4. **`Text`** (`@core/ui`):
   - Paragraphs, captions, and support texts with size variants (`xs`, `sm`, `base`, `md`, `lg`, `xl`) and color (`content`, `muted`, `primary`, `white`).
5. **`Section`** (`@core/ui`):
   - Structural primitive with standardized vertical spacing (`96px`) and background options (`canvas`, `surface`, `none`).

---

## MUST

1. **Use `Button` for Actions**: Whenever rendering a CTA (navigation link or action trigger), use `<Button as="a" href="...">` or `<Button onClick="...">`.
2. **Use `Heading` for Section Titles**: All section headers must use `<Heading as="h2" ...>` to ensure typographic and semantic SEO consistency.
3. **Use `Container` for Alignment**: Never apply `max-width: 1120px` manually in internal component classes; use `<Container>`.

---

## MUST NOT

1. **DO NOT recreate isolated button styles**: Do not define custom CSS classes for buttons that duplicate padding, border-radius, and transitions already standardized in `Button`.
2. **DO NOT use raw `<h1..h6>` tags without the `Heading` component**: The `Heading` component guarantees the correct font-family and letter-spacing from the Design System.
3. **DO NOT couple business logic inside `src/core/ui`**: Primitives are agnostic to the Sigapro content. They only receive presentation props.

---

## Anti-pattern → Correct

### 1. Buttons and CTAs

❌ **Anti-pattern**: Common link with a CSS class duplicating button properties.
```tsx
// Inside Hero.tsx
<a href="#planos" className={styles.customHeroButton}>
  Start now
</a>
```

✅ **Correct**: Polymorphic `Button` primitive.
```tsx
// Inside Hero.tsx
import { Button } from '@core/ui'

<Button as="a" href="#planos" variant="primary">
  Start now
</Button>
```

### 2. Headings and Hierarchy

❌ **Anti-pattern**: Raw title tag without the Design System variables.
```tsx
<h2 className={styles.heading}>Product and Engineering</h2>
```

✅ **Correct**: Typed `Heading` primitive.
```tsx
import { Heading } from '@core/ui'

<Heading as="h2" size="32" className={styles.heading}>
  Product and Engineering
</Heading>
```
