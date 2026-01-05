<template>
  <section class="bg-linear-to-b from-sky-200 via-sky-100 to-white w-full relative">
    <div class="container padding-section flex flex-col gap-8 text-center items-center justify-center">
      <Tagline :variant="variant">
        {{ tagline }}
      </Tagline>
      <h1 class="text-h1 bg-linear-to-b from-black to-zinc-600 text-transparent bg-clip-text max-w-195">
        {{ title }}
      </h1>
      <p class="text-paragraph text-black max-w-91">
        {{ description }}
      </p>
      <Button
        :href="href"
        variant="primary"
        aria-label="Get started"
      >
        {{ buttonLabel }}
      </Button>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Import the Variant type from Tagline component
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
