import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],
  components: {
    dirs: ['~/components'],
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Docuflow', // default fallback title
      meta: [
        { name: 'description', content: 'A documentation platform to write down useful knowledge for later.' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  css: ['@/assets/css/main.css'],
  content: {
    build: {
      markdown: {
        highlight: {
          // Theme used in all color schemes.
          theme: 'github-dark',
        },
      },
    },
  },
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
