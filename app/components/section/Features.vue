<template>
  <section class="bg-white w-full">
    <div class="container padding-section">
      <motion.div
        :initial="{ opacity: 0, translateY: -20, scale: 0.9 }"
        :while-in-view="{ opacity: 1, translateY: 0, scale: 1 }"
        :transition="{
          type: 'tween',
          duration: 0.3,
        }"
        class="flex flex-col items-center"
      >
        <ImageZoom src="/images/nuxt.png" />
      </motion.div>

      <motion.div
        :initial="{ opacity: 0, translateY: -20, scale: 0.9 }"
        :while-in-view="{ opacity: 1, translateY: 0, scale: 1 }"
        :transition="{
          type: 'tween',
          duration: 0.3,
        }"
        class="flex flex-col items-center gap-4 text-center mt-32"
      >
        <h2 class="text-h4 text-black max-w-128.5">
          Bring intelligence to enterprise knowledge
        </h2>
        <p class="text-paragraph text-black">
          Modernize without the rebuild with enterprise-grade professional service & security.
        </p>
      </motion.div>

      <motion.div
        :initial="{ opacity: 0, translateY: -20, scale: 0.9 }"
        :while-in-view="{ opacity: 1, translateY: 0, scale: 1 }"
        :transition="{
          type: 'tween',
          duration: 0.3,
        }"
        class="mt-16 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-16"
      >
        <div
          v-for="card in cards"
          :key="card.title"
          class="flex flex-col items-center text-center gap-4"
        >
          <Tagline variant="purple">
            {{ card.tagline }}
          </Tagline>
          <h3 class="text-h6 text-black">
            {{ card.title }}
          </h3>
          <p class="text-paragraph text-black max-w-80">
            {{ card.description }}
          </p>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

// Structure of a feature card
type Card = {
  tagline: string
  title: string
  description: string
}

// Array of feature cards to display
const cards: Card[] = [
  {
    tagline: 'Enterprise',
    title: 'Build with partnership',
    description: 'Direct, white-glove access to our documentation experts. Dedicated migration support and guidance tailored to your setup, and elevated support SLAs.',
  },
  {
    tagline: 'Enterprise',
    title: 'Secure by design',
    description: 'Built with enterprise-grade security features including SSO, SCIM, audit logs, and advanced permissions to keep your data safe and compliant.',
  },
  {
    tagline: 'Enterprise',
    title: 'Scale without limits',
    description: 'Handle large teams and extensive documentation needs with robust performance, unlimited storage, and priority support to ensure seamless operations.',
  },
]
</script>
