<template>
  <NuxtLink
    aria-labelledby="card-title"
    :to="to"
    :class="['relative flex w-full min-h-64 border rounded-lg p-4', variantClasses[variant], 'card-hover-effect']"
  >
    <div class="absolute flex top-0 left-0 ml-4 mt-4">
      <Icon
        :name="icon"
        size="24"
      />
    </div>
    <div class="flex flex-col justify-end gap-2">
      <span
        id="card-title"
        class="text-card-title"
      >{{ label }}</span>
      <span class="text-paragraph">{{ description }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
export type Card = {
  icon: string
  label: string
  description: string
  to: string
  variant: 'dark' | 'light'
}

defineProps<Card>()

const variantClasses = {
  dark: 'bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800',
  light: 'bg-sky-200 text-black border-sky-300 hover:bg-sky-300/50',
}
</script>

<style scoped>
  .card-hover-effect {
    transition-property: background-color, border-color, scale;
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
  }
</style>
