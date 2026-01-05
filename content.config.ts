import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: 'docs/**/*.{md,mdc}',
    }),
    components: defineCollection({
      type: 'page',
      source: 'components/content/*.vue',
    }),
  },
})
