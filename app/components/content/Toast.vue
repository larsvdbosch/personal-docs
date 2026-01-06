<template>
  <ol
    class="fixed bottom-4 right-4 z-20"
  >
    <li
      role="status"
      aria-live="polite"
      class="bg-toast border border-white inline-flex items-center p-6 rounded-lg w-fit min-w-fit md:min-w-lg"
    >
      <span class="text-paragraph">{{ label }}</span>
    </li>
  </ol>
</template>

<script setup lang="ts">
defineProps<{ label: string }>()
</script>
