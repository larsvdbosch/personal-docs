<template>
  <div>
    <DocsNavbar />
    <DocsMobileSidebar />
    <DocsSidebar />
    <main class="min-h-screen pt-(--header-height) lg:pl-64">
      <motion.div
        id="scroll-indicator"
        :style="scrollIndicator"
      />
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { motion, useScroll } from 'motion-v'

const { scrollYProgress } = useScroll()

// Scroll indicator stijl
const scrollIndicator = {
  scaleX: scrollYProgress,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '10px',
  originX: 0,
  zIndex: 300,
  backgroundColor: '#006bff',
}

useHead({
  bodyAttrs: {
    class: 'bg-zinc-950',
  },
})
</script>
