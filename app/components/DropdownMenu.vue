<template>
  <div
    ref="target"
    class="relative"
  >
    <button
      class="flex items-center gap-2 text-label active-label-state text-black w-full hover:bg-zinc-100 active:bg-zinc-200 px-3 py-2 rounded-lg cursor-pointer transition-colors ease-[cubic-bezier(.25,.46,.45,.94)] duration-150"
      aria-haspopup="true"
      aria-label="open"
      :aria-expanded="isOpen"
      :aria-controls="dropdownId"
      @click="toggle"
    >
      {{ title }}
      <Icon
        name="lucide:chevron-down"
        :class="[
          { 'rotate-180': isOpen },
          'transition-transform ease-out duration-150',
        ]"
      />
    </button>
    <Transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-show="isOpen"
        :id="dropdownId"
        class="absolute min-w-48 mt-2 bg-white rounded-lg p-1 top-full flex flex-col gap-1"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside, onKeyStroke } from '@vueuse/core'

// Define the props for the DropdownMenu component
type Props = {
  title: string
}

// Get the props with type safety
defineProps<Props>()

const dropdownId = useId() // Unieke ID voor a11y

const target = ref<HTMLElement | null>(null)
const isOpen = ref(false)
const toggle = () => isOpen.value = !isOpen.value
const close = () => isOpen.value = false

// Sluit het dropdown-menu als er buiten wordt geklikt
onClickOutside(target, () => close())

// Sluit het dropdown-menu bij het indrukken van de Escape-toets
onKeyStroke('Escape', () => {
  if (isOpen.value) close()
})
</script>
