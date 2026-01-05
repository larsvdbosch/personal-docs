<template>
  <section class="bg-linear-to-b from-white to-sky-100 w-full">
    <div class="container padding-section">
      <div class="flex flex-col md:flex-row items-center justify-center gap-16">
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
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
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
