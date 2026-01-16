<template>
  <main
    class="text-white max-w-5xl mx-auto px-4 py-8 md:py-12 lg:py-16"
  >
    <div>
      <h1 class="text-h4 mb-4">
        Lars' personal documentation
      </h1>
      <p class="text-paragraph">
        Welcome to my personal documentation. Here you will find all the information you need.
      </p>
    </div>
    <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Card
        v-for="card in cards"
        :key="card.label"
        :icon="card.icon"
        :label="card.label"
        :description="card.description"
        :to="card.to"
        :variant="card.variant"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Card } from '~/components/Card.vue'

useSeoMeta({
  title: 'Home | Documentation',
  description: 'Documentation page',
})

definePageMeta({
  layout: 'docs',
})

const cards: Card[] = [
  {
    icon: 'lucide:code',
    label: 'Nuxt',
    description: 'Get started with Nuxt.js',
    to: '/docs/nuxt',
    variant: 'dark',
  },
  {
    icon: 'lucide:code',
    label: 'ESLint',
    description: 'Learn how to use ESLint',
    to: '/docs/eslint',
    variant: 'dark',
  },
  {
    icon: 'lucide:code',
    label: 'Tailwind',
    description: 'Learn how to use Tailwind CSS',
    to: '/docs/tailwind',
    variant: 'dark',
  },
  {
    icon: 'lucide:code',
    label: 'Github',
    description: 'Manage your code with GitHub',
    to: '/docs/github',
    variant: 'dark',
  },
  {
    icon: 'lucide:code',
    label: 'Netlify',
    description: 'Deploy your site with Netlify',
    to: '/docs/netlify',
    variant: 'dark',
  },
  {
    icon: 'lucide:code',
    label: 'AI Workflow',
    description: 'AI Workflow for front-end development',
    to: '/docs/ai-workflow',
    variant: 'dark',
  },
  {
    icon: 'lucide:school',
    label: 'Assessments',
    description: 'Manage your assessments',
    to: '/docs/assessments',
    variant: 'dark',
  },
  {
    icon: 'lucide:school',
    label: 'Notes',
    description: 'Daily notes',
    to: '/docs/notes',
    variant: 'dark',
  },
  {
    icon: 'lucide:school',
    label: 'Leeruitkomsten',
    description: 'Manage your learning outcomes',
    to: '/docs/leeruitkomsten',
    variant: 'dark',
  },
]
</script>
