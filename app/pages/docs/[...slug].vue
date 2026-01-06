<template>
  <main
    class="prose max-w-5xl mx-auto px-4 py-8 md:py-12 lg:py-16"
  >
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </main>
</template>

<script setup lang="ts">
// Get the current route
const route = useRoute()

const slug = route.params.slug

// Construct the path from the slug parameters
const path = Array.isArray(slug) ? slug.join('/') : slug

// Fetch the documentation page data based on the path
const { data: page } = await useAsyncData(`docs-${path}`, () => {
  return queryCollection('docs').path(`/docs/${path}`).first()
})

// Set SEO meta tags for the page
useSeoMeta({
  title: page.value?.title + ' | Documentation',
  description: page.value?.description || 'Documentation page',
})

// Specify the layout for this page (docs.vue)
definePageMeta({
  layout: 'docs',
})
</script>
