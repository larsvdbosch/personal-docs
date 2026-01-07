<template>
  <div>
    <SectionHero
      tagline="🖼️ Showcase"
      variant="pink"
      title="The documentation is precisely organized for your needs."
      description="The design is clean and simple, making it easy to navigate and find the information you need."
      button-label="Read the documentation"
      href="/docs"
    />

    <section class="bg-white w-full">
      <div class="container padding-section">
        <motion.div
          :initial="{ opacity: 0, translateY: -20, scale: 0.9 }"
          :while-in-view="{ opacity: 1, translateY: 0, scale: 1 }"
          :transition="{
            type: 'tween',
            duration: 0.3,
          }"
          class="flex flex-col gap-16 items-center"
        >
          <ImageZoom
            v-for="image in Images"
            :key="image"
            :src="image"
          />
        </motion.div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

useSeoMeta({
  title: 'Lars - Documentation platform for creators',
  description: 'Welcome to my personal docs',
})

const Images = [
  '/images/docs.png',
  '/images/docs-2.png',
  '/images/docs.png',
]
</script>
