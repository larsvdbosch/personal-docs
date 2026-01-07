<template>
  <section class="bg-linear-to-b from-sky-100 to-white w-full">
    <div class="container padding-section">
      <motion.div
        :initial="{ opacity: 0, translateY: -20, scale: 0.9 }"
        :while-in-view="{ opacity: 1, translateY: 0, scale: 1, once: true }"
        :in-view-options="{ once: true }"
        :transition="motionTransition"
      >
        <div class="flex flex-col gap-4 text-center items-center">
          <Tagline variant="blue">
            Features
          </Tagline>
          <h2 class="text-h4 text-black max-w-128.5">
            Documentation for teams that mean business
          </h2>
          <p class="text-paragraph text-black max-w-2xl">
            Empower your enterprise with our robust documentation solutions, designed to enhance collaboration, ensure security, and scale seamlessly with your business needs.
          </p>
        </div>
        <div class="mt-16">
          <Swiper />
        </div>
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import Tagline from '../Tagline.vue'
</script>
