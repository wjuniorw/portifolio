import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginAstro from 'eslint-plugin-astro'
import perfectionist from 'eslint-plugin-perfectionist'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      perfectionist,
    },
    rules: {
      // Avoid semicolons
      'semi': ['error', 'never'],

      // Avoid double quotes (use single)
      'quotes': ['error', 'single', { avoidEscape: true }],

      // Import types explicitly with 'type' keyword
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],

      // Sort imports by line length asc, with types separated
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
          groups: [
            'type',
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
            'unknown',
          ],
          internalPattern: ['^@/.*', '^@core/.*'],
        },
      ],
    },
  },
  {
    // Ignore global dist and node_modules
    ignores: ['dist/', 'node_modules/', '.astro/', '.agents/'],
  }
)