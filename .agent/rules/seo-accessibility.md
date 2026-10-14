# Rule: SEO & Accessibility Practices (WCAG)

## Context & Goal
The Sigapro landing page must achieve excellence for both traditional search engines (Google, Bing), AI answer engines (Perplexity, ChatGPT Search - GEO), and for users relying on assistive technologies (screen readers, keyboard navigation). Proper use of **Core UI** is key to this guarantee.

---

## 1. Semantic Heading Hierarchy

- **Exactly one `h1` per page**: The main title lives in the `Hero` section (`<Heading as="h1" ...>`).
- **Main sections with `h2`**: Every autonomous section (`PainProof`, `Differentiation`, `AudiencePaths`, `Faq`, `Footer`) MUST contain a `<Heading as="h2" ...>`.
- **Sub-items with `h3`**: Titles for product cards, plans, or comparisons must be marked as `h3`.
- **Never skip levels**: Do not jump from `h1` directly to `h4` just for visual reasons; adjust the visuals with the `size` prop of the `Heading` while maintaining the correct semantics.

---

## 2. Core UI for SEO and Accessibility

1. **`Heading`**: Forces the output of real semantic tags (`<h1>`-`<h6>`) in the DOM instead of styled `<div>`s, allowing crawlers to build the page outline.
2. **Polymorphic `Button`**:
   - For navigation/external links: use `<Button as="a" href="...">`. Google and search engines follow and index real `<a>` links.
   - For on-screen actions (modals, submits): use `<Button as="button">`. Ensures native focus via `Tab` and triggering via `Enter`/`Space`.
3. **`Section` and `Container`**: Structure landmarks that screen readers use for region-based navigation (`landmarks navigation`).

---

## MUST

1. **Semantic Landmarks**: The main page should structure its content inside `<main>`, divided into `<section>`s and ended with `<footer>`.
2. **`alt` Attribute on All Images**: Informative images and logos must contain an accurate text description (e.g., `alt="Sigapro"`).
3. **Keyboard Navigation and `:focus-visible`**: Any interactive element must be navigable via keyboard and display a visible focus outline (`:focus-visible`).
4. **Native Accordions for FAQ**: Use `<details>` and `<summary>` elements. They are natively accessible, do not rely on JavaScript to expose content to crawlers, and have full screen reader support.
5. **Color Contrast (WCAG 2.1 AA)**: Normal text must maintain a minimum contrast ratio of 4.5:1 against its background (e.g., `vars.colors.content` over `vars.colors.surface`).

---

## MUST NOT

1. **DO NOT use `div` with `onClick` for links or buttons**: Always use real interactive tags (`<button>` or `<a>`) through `<Button>`.
2. **DO NOT hide text content in images**: Every value proposition, metric, or data point must be renderable text in HTML.
3. **DO NOT remove `outline` without a substitute**: Never set `outline: none` without specifying a clear style in `:focus-visible`.

---

## Anti-pattern → Correct

### 1. Buttons and Accessibility

❌ **Anti-pattern**: Clickable `div` that is invisible to screen readers and search bots.
```tsx
<div className={styles.cta} onClick={() => window.location.href = '#planos'}>
  Start now
</div>
```

✅ **Correct**: `Button` primitive as a semantic navigable link.
```tsx
import { Button } from '@core/ui'

<Button as="a" href="#planos" variant="primary">
  Start now
</Button>
```

### 2. Interactive FAQ and SEO

❌ **Anti-pattern**: Accordion relying on custom JS with opaque divs for crawlers.
```tsx
<div className={styles.faqItem} onClick={() => toggle(index)}>
  <div className={styles.question}>{q}</div>
  {isOpen && <div className={styles.answer}>{a}</div>}
</div>
```

✅ **Correct**: Native `<details>` and `<summary>` tags that are accessible and indexable.
```tsx
<details className={styles.item} defaultOpen={index === 0}>
  <summary className={styles.question}>
    {item.question}
    <span className={styles.icon}>+</span>
  </summary>
  <p className={styles.answer}>{item.answer}</p>
</details>
```
