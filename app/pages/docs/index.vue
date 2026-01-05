<template>
  <main
    class="prose-docs text-white max-w-5xl mx-auto px-4 py-8 md:py-12 lg:py-16"
  >
    <div>
      <h4>Lars' personal documentation</h4>
      <p>Welcome to my personal documentation. Here you will find all the information you need.</p>
    </div>
    <div class="mt-8 grid grid-cols-4 gap-4">
      <Card
        v-for="card in cards"
        :key="card.label"
        :icon="card.icon"
        :label="card.label"
        :description="card.description"
        :to="card.to"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
// Set SEO meta tags for the documentation index page
useSeoMeta({
  title: 'Home | Documentation',
  description: 'Documentation page',
})

definePageMeta({
  layout: 'docs',
})

const cards = [
  {
    icon: 'lucide:copy',
    label: 'Getting started',
    description: 'Learn how to use the Linear API',
    to: '/docs/nuxt',
  },
  {
    icon: 'lucide:book-open',
    label: 'Components',
    description: 'Explore the UI components available',
    to: '/docs/components',
  },
  {
    icon: 'lucide:cog',
    label: 'Configuration',
    description: 'Understand configuration options',
    to: '/docs/configuration',
  },
  {
    icon: 'lucide:shield-check',
    label: 'Security',
    description: 'Learn about security best practices',
    to: '/docs/security',
  },
  {
    icon: 'lucide:performance',
    label: 'Performance',
    description: 'Optimize your application performance',
    to: '/docs/performance',
  },
  {
    icon: 'lucide:plugin',
    label: 'Plugins',
    description: 'Extend functionality with plugins',
    to: '/docs/plugins',
  },
]
</script>
