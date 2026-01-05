<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// Set the body background color using useHead from Nuxt
useHead({
  bodyAttrs: {
    class: 'bg-white',
  },
})
</script>
