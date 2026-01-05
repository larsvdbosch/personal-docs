<template>
  <ol
    class="fixed bottom-4 right-4 z-10"
  >
    <li class="bg-[#006bff] border border-white inline-flex items-center p-6 rounded-lg w-fit min-w-lg">
      <span class="text-paragraph">{{ label }}</span>
    </li>
  </ol>
</template>

<script setup lang="ts">
defineProps<{ label: string }>()
</script>
