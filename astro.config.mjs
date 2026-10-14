import react from '@astrojs/react'
// @ts-check
import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [vanillaExtractPlugin()]
  }
})