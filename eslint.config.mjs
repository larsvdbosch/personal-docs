// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/multi-word-component-names': 'off',
    // Stylistic preferences (optioneel):
    // === Stylistic regels ===
    '@stylistic/semi': ['error', 'never'], // Geen semicolons (populair in Vue ecosystem)
    '@stylistic/quotes': ['error', 'single'], // Single quotes
    '@stylistic/indent': ['error', 2], // 2 spaces
    '@stylistic/comma-dangle': ['error', 'always-multiline'], // Trailing comma alleen bij multiline
    '@stylistic/arrow-parens': ['error', 'always'], // Altijd haakjes bij arrow functions: (x) => x
    '@stylistic/brace-style': ['error', '1tbs'], // Opening brace op zelfde regel
    '@stylistic/object-curly-spacing': ['error', 'always'], // Spaties in objects: { key: value }
  },
})
