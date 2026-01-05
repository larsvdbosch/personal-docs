<template>
  <component
    :is="componentTag"
    v-bind="componentAttrs"
    :class="[
      'px-4 py-2 rounded-lg w-fit text-label active-label-state transition-background-color ease-[cubic-bezier(.25,.46,.45,.94)] duration-150', // default styles
      variantClasses[variant], // variant-specific styles
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
// Define the props for the Button component
type Props = {
  href?: string
  variant?: 'primary' | 'secondary'
}

// Default variant is 'primary' if not provided
const props = withDefaults(defineProps<Props>(), {
  variant: 'secondary',
})

// Classes for different button variants
const variantClasses = {
  primary: 'bg-black/95 text-white hover:bg-black/90 active:bg-black/85',
  secondary: 'bg-white text-black hover:bg-zinc-50 active:bg-zinc-100',
}

// Determine the component tag and attributes based on the presence of href
const componentTag = computed(() => {
  if (!props.href) return 'button'
  return resolveComponent('NuxtLink')
})

// Determine the attributes for the component
const componentAttrs = computed(() => {
  if (!props.href) return { type: 'button' }
  if (!props.href.startsWith('/')) return { href: props.href, target: '_blank', rel: 'noopener' }
  return { to: props.href }
})
</script>
