<template>
  <section class="bg-linear-to-b from-sky-200 via-sky-100 to-white w-full">
    <motion.div
      :initial="{ opacity: 0, translateY: -20, scale: 0.9 }"
      :while-in-view="{ opacity: 1, translateY: 0, scale: 1 }"
      :transition="{
        type: 'tween',
        duration: 0.3,
      }"
      class="container padding-section flex flex-col gap-8 text-center items-center justify-center"
    >
      <motion.div
        :initial="{ opacity: 0, translateY: -40, scale: 0.9 }"
        :while-in-view="{ opacity: 1, translateY: 0, scale: 1 }"
        :transition="{
          type: 'spring',
          duration: 1.5,
          bounce: 0.5,
        }"
      >
        <Tagline
          :variant="variant"
        >
          {{ tagline }}
        </Tagline>
      </motion.div>
      <h1 class="text-h1 bg-linear-to-b from-blue-950 to-blue-900 text-transparent bg-clip-text p-2 max-w-195">
        {{ title }}
      </h1>
      <p class="text-paragraph text-black max-w-md">
        {{ description }}
      </p>
      <Button
        :href="href"
        variant="primary"
        aria-label="Get started"
      >
        {{ buttonLabel }}
      </Button>
    </motion.div>
  </section>
</template>

<script setup lang="ts">
// Import the Variant type from Tagline component
import { motion } from 'motion-v'
import type { Variant } from '../Tagline.vue'

// Define the props for the Hero component
type Props = {
  tagline: string
  title: string
  description: string
  buttonLabel: string
  href?: string
  variant?: Variant
}

// Default variant is 'primary' if not provided
defineProps<Props>()
</script>
