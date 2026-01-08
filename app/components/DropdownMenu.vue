<template>
  <div
    ref="target"
    class="relative"
  >
    <button
      class="flex items-center gap-2 text-label active-label-state text-black w-full hover:bg-zinc-200/50 active:bg-zinc-200 px-3 py-2 rounded-lg transition-colors ease-[cubic-bezier(.25,.46,.45,.94)] duration-150"
      aria-haspopup="true"
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
    <ul
      :id="dropdownId"
      :class="['absolute min-w-48 mt-2 bg-white rounded-xl p-1 top-full flex flex-col gap-1 origin-top transition-[opacity,scale] duration-100 ease-out', isOpen ? 'scale-100 opacity-100 visible' : 'scale-90 opacity-0 pointer-events-none invisible']"
    >
      <slot />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside, onKeyStroke } from '@vueuse/core'

type Props = {
  title: string
}

defineProps<Props>()

// Unieke ID voor aria-controls koppeling met dropdown content
const dropdownId = useId()

const target = ref<HTMLElement | null>(null)
const isOpen = ref(false)
const toggle = () => isOpen.value = !isOpen.value
const close = () => isOpen.value = false

// Sluit dropdown bij klik buiten het menu
onClickOutside(target, () => close())

// Sluit dropdown met Escape toets
onKeyStroke('Escape', () => {
  if (isOpen.value) close()
})
</script>
