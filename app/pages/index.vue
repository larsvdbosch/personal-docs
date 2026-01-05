<template>
  <div>
    <SectionHero
      tagline="🎉 Join 50,000+ creators in"
      variant="blue"
      title="A documentation platform to write down useful knowledge for later."
      description="The first social scheduler built for onchain teams.
        Manage Farcaster, Zora, and Twitter in one place."
      button-label="Read the documentation"
      href="/docs"
    />
    <SectionFeatures />
    <SectionNumbers />
    <SectionCards />
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Notion - Documentation platform for creators',
  description: 'Welcome to Notion, the documentation platform for creators.',
})
</script>
