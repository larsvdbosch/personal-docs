<template>
  <main
    class="prose-docs text-white max-w-5xl mx-auto px-4 py-8 md:py-12 lg:py-16"
  >
    <div>
      <h4>Docuflow Documentation</h4>
      <p>Welcome to the Docuflow documentation. Here you will find all the information you need to get started and make the most out of Docuflow.</p>
    </div>
  </main>
</template>

<script lang="ts" setup>
// Set SEO meta tags for the documentation index page
useSeoMeta({
  title: 'Home | Documentation',
  description: 'Documentation page',
})

definePageMeta({
  layout: 'docs',
})
</script>
