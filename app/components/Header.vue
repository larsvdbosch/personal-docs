<template>
  <header class="fixed w-full top-0 h-(--header-height) z-50 transition-[background-color] ease-out duration-300">
    <div class="container flex items-center justify-between w-full h-full">
      <Logo />
      <button
        class="flex lg:hidden p-2 rounded-lg hover:bg-zinc-200 transition-[background-color] ease-out duration-150"
        :aria-expanded="isOpen"
        aria-controls="mobile-sidebar"
        :aria-label="isOpen ? 'Sluit menu' : 'Open menu'"
        @click="toggle"
      >
        <Icon
          v-if="!isOpen"
          name="lucide:menu"
          class="lg:hidden"
          size="24"
        />
        <Icon
          v-if="isOpen"
          name="lucide:x"
          class="lg:hidden"
          size="24"
        />
      </button>
      <AnimatedTabs />
      <div class="hidden lg:flex gap-4 items-center">
        <Button
          href="/docs"
          variant="primary"
          aria-label="documentation"
        >
          Documentation
        </Button>
      </div>
    </div>
  </header>
  <MobileSidebar />
</template>

<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'

const { isOpen, toggle, close } = useSidebar('mobile-sidebar')

// Sluit sidebar met Escape toets
onKeyStroke('Escape', () => {
  if (isOpen.value) close()
})

// Voeg scroll listener toe bij mount, verwijder bij unmount
onMounted(() => {
  window.addEventListener('scroll', changeBackgroundOnScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', changeBackgroundOnScroll)
})

// Toont witte achtergrond met border na 80px scroll voor visuele scheiding
const changeBackgroundOnScroll = () => {
  const header = document.querySelector('header')
  if (window.scrollY > 80) {
    header?.classList.add('bg-white')
  } else {
    header?.classList.remove('bg-white')
  }
}
</script>
