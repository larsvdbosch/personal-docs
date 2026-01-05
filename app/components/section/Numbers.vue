<template>
  <section class="bg-linear-to-b from-white to-sky-100 w-full">
    <div class="container padding-section">
      <motion.div
        :initial="{ opacity: 0, translateY: -20, scale: 0.9 }"
        :while-in-view="{ opacity: 1, translateY: 0, scale: 1 }"
        :transition="{
          type: 'tween',
          duration: 0.3,
        }"
        class="flex flex-col md:flex-row items-center justify-center gap-16"
      >
        <div
          v-for="statistic in Statistics"
          :key="statistic.label"
          class="flex flex-col items-center text-center gap-2"
        >
          <h1 class="text-h1 text-black">
            {{ statistic.label }}
          </h1>
          <p class="text-paragraph text-black">
            {{ statistic.description }}
          </p>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

type Statistics = {
  label: string
  description: string
}

type Props = {
  statistics?: Statistics[]
}

defineProps<Props>()

const Statistics: Statistics[] = [
  { label: '1.2mil+', description: 'Monthly downloads' },
  { label: '145+', description: 'Contributors' },
  { label: '5.3k+', description: 'Github Stars' },
]
</script>
