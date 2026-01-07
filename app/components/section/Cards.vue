<template>
  <section class="bg-sky-100 w-full">
    <div class="container padding-section">
      <motion.div
        :initial="{ opacity: 0, translateY: -20, scale: 0.9 }"
        :while-in-view="{ opacity: 1, translateY: 0, scale: 1 }"
        :in-view-options="{ once: true }"
        :transition="motionTransition"
      >
        <ImageZoom src="/images/docs-2.png" />
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
</script>
