<template>
  <main
    class="text-white max-w-5xl mx-auto px-4 py-8 md:py-12 lg:py-16"
  >
    <div>
      <h2 class="text-h4 mb-4">
        Lars' personal documentation
      </h2>
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
    icon: 'lucide:copy',
    label: 'Getting started',
    description: 'Learn how to use the Linear API',
    to: '/docs/nuxt',
    variant: 'dark',
  },
  {
    icon: 'lucide:book-open',
    label: 'Components',
    description: 'Explore the UI components available',
    to: '/docs/components',
    variant: 'dark',
  },
  {
    icon: 'lucide:cog',
    label: 'Configuration',
    description: 'Understand configuration options',
    to: '/docs/configuration',
    variant: 'dark',
  },
  {
    icon: 'lucide:shield-check',
    label: 'Security',
    description: 'Learn about security best practices',
    to: '/docs/security',
    variant: 'dark',
  },
  {
    icon: 'lucide:spotlight',
    label: 'Performance',
    description: 'Optimize your application performance',
    to: '/docs/performance',
    variant: 'dark',
  },
  {
    icon: 'lucide:blocks',
    label: 'Plugins',
    description: 'Extend functionality with plugins',
    to: '/docs/plugins',
    variant: 'dark',
  },
]
</script>
