<template>
  <div class="flex">
    <div :class="['px-4 py-2 rounded-full text-small w-fit', variantClasses[variant]]">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
export type Variant = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'pink' | 'purple' | 'black'

// Define the props for the Tagline component
type Props = {
  variant?: Variant
}

// Use withDefaults to set default values for props
withDefaults(defineProps<Props>(), {
  variant: 'red',
})

// Define the classes for each variant
const variantClasses = {
  red: 'bg-red-200 border-2 border-red-300 text-red-800',
  orange: 'bg-orange-200 border-2 border-orange-300 text-orange-800',
  yellow: 'bg-yellow-200 border-2 border-yellow-300 text-yellow-800',
  green: 'bg-green-200 border-2 border-green-300 text-green-800',
  blue: 'bg-blue-200 border-2 border-blue-300 text-blue-800',
  pink: 'bg-pink-200 border-2 border-pink-300 text-pink-800',
  purple: 'bg-purple-200 border-2 border-purple-300 text-purple-800',
  black: 'bg-black text-white',
}
</script>
