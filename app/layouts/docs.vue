<template>
  <div>
    <DocsNavbar />
    <DocsMobileSidebar />
    <DocsSidebar />
    <main class="min-h-screen pt-(--header-height) lg:pl-64">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// Set the body background color using useHead from Nuxt
useHead({
  bodyAttrs: {
    class: 'bg-zinc-950',
  },
})
</script>
