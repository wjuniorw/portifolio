# Rule: Design System & Token Object Set

## Context & Goal
The project's Design System is structured as an **agnostic Object Set in TypeScript** (`src/core/ds/`), consumed by typed contracts in **Vanilla Extract** (`tokens.css.ts`). This architecture guarantees compile-time typing, native support for themes (light/dark), and ease of migration if another styling library is adopted in the future.

---

## MUST

1. **Tokens as the Single Source of Truth**:
   - `src/core/ds/themes/shared.ts`: full palette (primary 50-900, secondary 50-900, accent, support, semantic, white, tints), typography (display, headline, body), font size scales, `borderRadius`, `sizes`, and `spacing`.
   - `src/core/ds/themes/light.theme.ts`: mapping of light surfaces (`surface`, `surfaceAlt`, `canvas`, `content`, `contentMuted`, `stroke`).
   - `src/core/ds/themes/dark.theme.ts`: mapping of dark surfaces with the same structural contract.
2. **Always Consume via `vars`**: When styling components with Vanilla Extract (`*.css.ts`), exclusively use the variables exported by `@core/ds/tokens.css`:
   ```ts
   import { vars } from '@core/ds/tokens.css'
   ```
3. **Compatibility Bridge with Legacy CSS**: If a global style in native CSS needs a Design System value, use the corresponding custom property injected by `tokens.css.ts` (e.g., `var(--color-primary-500)`).
4. **Adding New Tokens**: New tokens must first be added in `shared.ts` / `light.theme.ts` / `dark.theme.ts`, reflected in the contract within `tokens.css.ts`, and exported in `designTokens` (`theme.ts`).

---

## MUST NOT

1. **DO NOT use loose hexadecimal values (magic colors)**: Strings like `#00B386` or `rgba(0, 179, 134, 0.15)` in `.css.ts` or `.tsx` files are strictly forbidden. Use `vars.colors.primary500` and `vars.colors.primaryTint`.
2. **DO NOT use arbitrary border radii**: Never write `borderRadius: '7px'` or `15px`. Use `vars.borderRadius.sm`, `md`, `lg`, `xl`, `'2xl'`, or `full`.
3. **DO NOT break symmetry between Light and Dark**: Every key added to the light theme MUST exist with the same type and meaning in the dark theme.

---

## Anti-pattern → Correct

### 1. Colors and Magic Values

❌ **Anti-pattern**: Hardcoding colors and arbitrary measurements.
```ts
// Component.css.ts
import { style } from '@vanilla-extract/css'

export const badge = style({
  backgroundColor: '#D7FFF2',
  color: '#007A5E',
  borderRadius: '20px',
  padding: '5px 11px',
})
```

✅ **Correct**: Typed consumption from the token contract.
```ts
// Component.css.ts
import { style } from '@vanilla-extract/css'
import { vars } from '@core/ds/tokens.css'

export const badge = style({
  backgroundColor: vars.colors.primary100,
  color: vars.colors.primary700,
  borderRadius: vars.borderRadius.full,
  paddingInline: vars.spacing.sm,
  paddingBlock: vars.spacing.xs,
})
```

### 2. Exporting Tokens for External Consumption

❌ **Anti-pattern**: Importing CSS values directly into utility functions or JS scripts.
```ts
const primary = 'var(--color-primary-500)'
```

✅ **Correct**: Consuming the `designTokens` exported in `@core/ds/theme.ts`.
```ts
import { designTokens } from '@core/ds'

const rawPrimary = designTokens.palette.primary[500] // '#00B386'
```
