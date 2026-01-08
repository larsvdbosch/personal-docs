<script setup lang="ts">
import { computed } from 'vue'

interface SvgOptions {
  duration?: number
}

const props = defineProps<{
  className?: string
  svgOptions?: SvgOptions
}>()

const containerClass = computed(() =>
  [
    'h-[20rem] md:h-screen w-full bg-white dark:bg-black',
    props.className,
  ].filter(Boolean).join(' '),
)
</script>

<template>
  <div :class="containerClass">
    <BackgroundLinesSVG :svg-options="svgOptions" />
    <slot />
  </div>
</template>
