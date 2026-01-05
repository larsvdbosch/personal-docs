<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
  <section class="bg-sky-100 w-full">
    <div class="container padding-section">
      <motion.div
        :initial="{ opacity: 0, translateY: -20, scale: 0.9 }"
        :while-in-view="{ opacity: 1, translateY: 0, scale: 1 }"
        :transition="{
          type: 'tween',
          duration: 0.3,
        }"
      >
        <ImageZoom src="/images/nuxt.png" />
      </motion.div>
    </div>
  </section>
</template>
