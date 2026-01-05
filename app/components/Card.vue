<template>
  <NuxtLink
    :to="to"
    class="bg-zinc-900 relative border border-zinc-800 hover:card-hover-effect hover:bg-zinc-800 hover:border-zinc-700 card-hover-effect flex w-fit min-h-64 rounded-lg p-4"
  >
    <div class="absolute top-0 left-0 ml-4 mt-4">
      <Icon
        :name="icon"
        size="24"
      />
    </div>
    <div class="flex flex-col justify-end gap-2">
      <span class="text-card-title">{{ label }}</span>
      <span class="text-paragraph text-zinc-400">{{ description }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
export type Card = {
  icon: string
  label: string
  description: string
  to: string
}

defineProps<Card>()
</script>

<style scoped>
  .card-hover-effect {
    transition-property: background-color, border-color, scale;
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
  }
</style>
