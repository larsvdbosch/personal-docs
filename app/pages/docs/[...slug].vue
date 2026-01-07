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
const route = useRoute()

const slug = route.params.slug

// Bouw het pad op basis van de slug parameters
const path = Array.isArray(slug) ? slug.join('/') : slug

const { data: page } = await useAsyncData(`docs-${path}`, () => {
  return queryCollection('docs').path(`/docs/${path}`).first()
})

useSeoMeta({
  title: page.value?.title + ' | Documentation',
  description: page.value?.description || 'Documentation page',
})

definePageMeta({
  layout: 'docs',
})
</script>
