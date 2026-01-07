<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-2 text-label active-label-state text-zinc-400 w-full hover:bg-zinc-900 active:bg-zinc-800  px-3 py-2 rounded-lg transition-background-color ease-[cubic-bezier(.25,.46,.45,.94)] duration-150"
    exact-active-class="bg-zinc-800"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
type Props = {
  to: string
}

defineProps<Props>()
</script>
