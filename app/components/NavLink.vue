<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-2 text-label active-label-state text-black w-full hover:bg-zinc-100 active:bg-zinc-200  px-3 py-2 rounded-lg transition-background-color ease-[cubic-bezier(.25,.46,.45,.94)] duration-150"
    exact-active-class="bg-zinc-200"
  >
    <slot />
    <Icon
      v-if="icon"
      :name="icon"
      class="transition-transform ease-out duration-150"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
// Define the props for the NavLink component
type Props = {
  to: string
  icon?: string
}

// Use defineProps to declare the props
defineProps<Props>()
</script>
