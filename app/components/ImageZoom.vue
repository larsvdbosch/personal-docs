<template>
  <div>
    <!-- Regular image -->
    <NuxtImg
      :src="src"
      alt="Zoomable image"
      width="1280"
      height="720"
      class="cursor-zoom-in rounded-lg"
      @click="openZoom"
    />

    <!-- Dialog for zoomed image -->
    <Teleport to="body">
      <div
        :class="['fixed h-full w-full inset-0 bg-black/95 flex items-center justify-center z-100 transition-opacity duration-150 ease-out cursor-zoom-out', isZoomed ? 'opacity-100' : 'opacity-0 invisible']"
        @click.self="closeZoom"
      >
        <NuxtImg
          :src="src"
          alt="Zoomed"
          width="1280"
          height="720"
          :class="['max-h-[90vh] max-w-[90vw] transition-scale duration-400 ease-out rounded-lg', isZoomed ? 'scale-100' : 'scale-90']"
        />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'

// Define the props for the ImageZoom component
type Props = {
  src: string
}

// Get the props with type safety
defineProps<Props>()

const isZoomed = ref(false)

// Function to open the zoomed image
const openZoom = () => {
  isZoomed.value = true
  disableZoomOnScroll()
}

// Function to close the zoomed image
const closeZoom = () => {
  isZoomed.value = false
}

// Disable zoom when scrolling to go back to normal view
const disableZoomOnScroll = () => {
  window.addEventListener('scroll', () => {
    if (isZoomed.value) {
      closeZoom()
    }
  })
}

// Close zoomed image on Escape key press
onKeyStroke('Escape', () => {
  if (isZoomed.value) closeZoom()
})
</script>
