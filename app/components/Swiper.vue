<template>
  <ClientOnly>
    <swiper-container
      ref="containerRef"
      :slides-per-view="1.5"
      :slides-per-view:md="2.4"
      :breakpoints="{
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2.4,
        },
        1024: {
          slidesPerView: 3.4,
        },
      }"
      :slides-per-view:lg="3.4"
      :space-between="16"
    >
      <swiper-slide
        v-for="card in cards"
        :key="card.label"
      >
        <Card
          class="min-h-100"
          :icon="card.icon"
          :label="card.label"
          :description="card.description"
          :to="card.to"
          :variant="card.variant"
        />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>

  <div class="flex justify-center gap-4 w-full mt-8">
    <!-- Navigatie knoppen voor swiper -->
    <button
      class="flex bg-toast rounded-full p-2 cursor-pointer"
      @click="swiper.prev()"
    >
      <Icon
        name="lucide:chevron-left"
        size="20"
        style="color: white;"
      />
    </button>
    <button
      class="flex bg-toast rounded-full p-2 cursor-pointer"
      @click="swiper.next()"
    >
      <Icon
        name="lucide:chevron-right"
        size="20"
        style="color: white;"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Card } from '~/components/Card.vue'

const containerRef = ref(null)

const swiper = useSwiper(containerRef)

const cards: Card[] = [
  {
    icon: 'lucide:copy',
    label: 'Getting started',
    description: 'Learn how to use the Linear API',
    to: '/docs/nuxt',
    variant: 'light',
  },
  {
    icon: 'lucide:book-open',
    label: 'Components',
    description: 'Explore the UI components available',
    to: '/docs/components',
    variant: 'light',
  },
  {
    icon: 'lucide:cog',
    label: 'Configuration',
    description: 'Understand configuration options',
    to: '/docs/configuration',
    variant: 'light',
  },
  {
    icon: 'lucide:shield-check',
    label: 'Security',
    description: 'Learn about security best practices',
    to: '/docs/security',
    variant: 'light',
  },
  {
    icon: 'lucide:spotlight',
    label: 'Performance',
    description: 'Optimize your application performance',
    to: '/docs/performance',
    variant: 'light',
  },
  {
    icon: 'lucide:blocks',
    label: 'Plugins',
    description: 'Extend functionality with plugins',
    to: '/docs/plugins',
    variant: 'light',
  },
]
</script>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.swiper-button {
  background-color: #28282c; /* Lichtgrijze achtergrond */
  border: 1px solid #3e3e43;
  border-radius: 9999px; /* Ronde hoeken */
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.15s ease-out;
}

.swiper-button:hover {
  background-color: #333333; /* Donkerder grijs bij hover */
}
</style>
