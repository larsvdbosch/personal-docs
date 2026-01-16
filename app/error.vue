<template>
  <Header />
  <SectionHero
    tagline="Error"
    title="An error occured."
    description="Click the button below to return to the homepage."
    variant="red"
    button-label="Go back"
    href="/"
  />
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'font-display text-paragraph text-black bg-white selection:bg-blue-200 selection:text-blue-800 antialiased',
    id: 'page',
  },
  title: '404 - Page not found',
})
</script>
