<template>
  <div>
    <SectionHero
      tagline="🎉 Join 50,000+ creators in"
      variant="blue"
      title="A documentation platform to write down useful knowledge for later."
      description="My personal documentation platform is designed to help creators organize and share their knowledge effectively."
      button-label="Read the documentation"
      href="/docs"
    />
    <SectionFeatures />
    <SectionNumbers />
    <SectionCards />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Lars - Documentation platform for creators',
  description: 'Welcome to my personal docs',
})
</script>
