<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    id: 'page',
    class: 'font-display text-paragraph text-black bg-white selection:bg-blue-200 selection:text-blue-800 antialiased',
  },
})
</script>
