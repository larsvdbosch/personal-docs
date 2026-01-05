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
        <div class="flex flex-col gap-16 items-center">
          <ImageZoom
            v-for="image in Images"
            :key="image"
            :src="image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Lars - Documentation platform for creators',
  description: 'Welcome to my personal docs',
})

const Images = [
  '/images/dashboard.png',
  '/images/nuxt.png',
  '/images/nuxt.png',
]
</script>
