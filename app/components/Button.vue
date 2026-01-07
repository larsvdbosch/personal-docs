<template>
  <component
    :is="componentTag"
    v-bind="componentAttrs"
    :class="[
      'px-4 py-2 rounded-lg w-fit text-label active-label-state transition-background-color ease-[cubic-bezier(.25,.46,.45,.94)] duration-150',
      variantClasses[variant],
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
type Props = {
  href?: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'secondary',
})

// Styling per button variant
const variantClasses = {
  primary: 'bg-black/95 text-white hover:bg-black/90 active:bg-black/85',
  secondary: 'bg-white text-black hover:bg-zinc-50 active:bg-zinc-100',
}

// Rendert als <button>, <NuxtLink>, of externe <a> afhankelijk van href prop
const componentTag = computed(() => {
  if (!props.href) return 'button'
  return resolveComponent('NuxtLink')
})

// Bepaalt de juiste attributen: type="button" voor buttons, to="" voor interne links, href="" voor externe links
const componentAttrs = computed(() => {
  if (!props.href) return { type: 'button' }
  if (!props.href.startsWith('/')) return { href: props.href, target: '_blank', rel: 'noopener' }
  return { to: props.href }
})
</script>
