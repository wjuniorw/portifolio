# 🚀 AI-Ready Landing Template

> The fastest, most robust way to bootstrap a high-converting landing page and validate your startup idea alongside your AI Assistant.

Built on an ultra-performant architecture using **Astro**, **React**, and **Vanilla Extract**, this template isn't just about code—it's a **Business Bootstrap Engine**. It comes pre-loaded with an intelligent Design System and an `.agents/` folder packed with specialized AI skills (Copywriting, Startup Validation, Offer Creation) so your AI copilot can help you build the product *and* the pitch.

---

## ⚡️ Quick Start

Start a new project using this template instantly:

```bash
pnpm create astro@latest --template wjuniorw/astro-ai-landing-kit my-landing-page
cd my-landing-page
pnpm install
pnpm dev
```

## 🧠 Why is it "AI-Ready"?

Most templates just give you UI components. This template gives your AI (Cursor, Claude, Oh My Pi, etc.) the context and skills it needs to act as your Co-Founder.

Inside the `.agents/` directory, you will find instructions and skills tailored for business creation:
- **Startup Validation**: Ask your AI to run a market analysis on your idea before writing code.
- **Copywriting**: Harness advanced marketing frameworks (like Alex Hormozi's $100M Offers) to generate your Hero titles and CTAs.
- **Design System Enforcement**: The `AGENTS.md` file strictly guides the AI to use the included `@core/ui` tokens, ensuring the AI never hallucinates ugly inline styles.

### 🔌 How to Setup your AI Harness

Because not every AI tool reads hidden folders automatically, you need to point them to the "brain" of this project:

- **Cursor IDE**: Create a `.cursorrules` file at the root of your project and simply add:
  ```markdown
  Always read `AGENTS.md` before writing code. If I ask for copy, marketing, or business advice, search the `.agents/skills/` directory for the right framework.
  ```
- **Claude Projects**: Upload the `AGENTS.md` and the contents of `.agents/skills/` into your Project's Knowledge Base.
- **Oh My Pi**: The harness will automatically detect `AGENTS.md` (symlinked from `CLAUDE.md`) and seamlessly utilize the skills.

## 🎨 The Design System (`@core/ui`)

This template ships with a highly opinionated, zero-runtime CSS-in-TS design system powered by Vanilla Extract. 

### Core Primitives
Never write raw HTML tags or guess spacing again. Combine our primitives like Lego blocks:

```tsx
import { Section, Container, Heading, Text, Button } from '@core/ui'

export function MyAwesomeSection() {
  return (
    <Section>
      <Container>
        <Heading as="h2" size="4xl" color="primary">Stop reinventing the wheel</Heading>
        <Text size="lg" color="text">Use the pre-built typography scale and layout constraints.</Text>
        <Button variant="ghost">Learn More</Button>
      </Container>
    </Section>
  )
}
```

### Dynamic Theming
We use CSS `color-mix()` and native CSS variables tied to `data-theme="dark|light"`. To change the entire look of your brand, simply update the object literals in:
- `src/core/ds/themes/light.theme.ts`
- `src/core/ds/themes/dark.theme.ts`

## 🛠 Tech Stack

- **Astro**: Renders the structural layout as 100% static HTML (Zero-JS by default).
- **React**: Used strictly for interactive `client:*` Islands (like the ThemeSwitcher or Accordions).
- **Vanilla Extract**: Type-safe CSS-in-JS that extracts to static `.css` files at build time.
- **Framer Motion**: Hardware-accelerated, declarative spring animations.

## 📜 Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts local dev server at `localhost:4321` |
| `pnpm build` | Builds your production site to `./dist/` |
| `pnpm preview` | Previews your build locally |
| `pnpm lint` | Runs ultra-fast Oxlint + ESLint Perfectionist |

---
*Happy building! Focus on your product, let the template handle the pixels.*
