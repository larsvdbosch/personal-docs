<script setup lang="ts">
import { motion } from 'motion-v'

interface SvgOptions {
  duration?: number
}

defineProps<{
  svgOptions?: SvgOptions
}>()

const pathVariants = {
  initial: { strokeDashoffset: 800, strokeDasharray: '50 800' },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: '20 800',
    opacity: [0, 1, 1, 0],
  },
}

const paths = [
  'M720 450C720 450 742.459 440.315 ...',
  // ⬆️ keep ALL your paths exactly as-is
]

const colors = [
  '#46A5CA',
  '#8C2F2F',
  '#4FAE4D',
  '#D6590C',
  '#811010',
  '#247AFB',
  '#A534A0',
  '#A8A438',
  '#D6590C',
  '#46A29C',
  '#670F6D',
  '#D7C200',
  '#59BBEB',
  '#504F1C',
  '#55BC54',
  '#4D3568',
  '#9F39A5',
  '#363636',
  '#860909',
  '#6A286F',
  '#604483',
]

const randomDelay = () => Math.floor(Math.random() * 10)
const randomRepeatDelay = () => Math.floor(Math.random() * 10 + 2)
</script>

<template>
  <motion.svg
    viewBox="0 0 1440 900"
    fill="none"
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{ duration: 1 }"
    class="absolute inset-0 w-full h-full"
  >
    <template
      v-for="(path, idx) in paths"
      :key="'first-' + idx"
    >
      <motion.path
        :d="path"
        :stroke="colors[idx]"
        stroke-width="2.3"
        stroke-linecap="round"
        :variants="pathVariants"
        initial="initial"
        animate="animate"
        :transition="{
          duration: svgOptions?.duration || 10,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          delay: randomDelay(),
          repeatDelay: randomRepeatDelay(),
        }"
      />
    </template>

    <!-- duplicate for more paths -->
    <template
      v-for="(path, idx) in paths"
      :key="'second-' + idx"
    >
      <motion.path
        :d="path"
        :stroke="colors[idx]"
        stroke-width="2.3"
        stroke-linecap="round"
        :variants="pathVariants"
        initial="initial"
        animate="animate"
        :transition="{
          duration: svgOptions?.duration || 10,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          delay: randomDelay(),
          repeatDelay: randomRepeatDelay(),
        }"
      />
    </template>
  </Motion.svg>
</template>
