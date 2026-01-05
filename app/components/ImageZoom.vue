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
        ref="modalRef"
        :class="['fixed h-full w-full inset-0 bg-black/95 flex items-center justify-center z-100 transition-opacity duration-150 ease-out cursor-zoom-out', isZoomed ? 'opacity-100' : 'opacity-0 invisible']"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
        aria-label="Vergrote afbeelding"
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
// Define the props for the ImageZoom component
type Props = {
  src: string
}

// Get the props with type safety
defineProps<Props>()

const modalRef = ref<HTMLElement | null>(null)
const isZoomed = ref(false)
const previouslyFocusedElement = ref<HTMLElement | null>(null)

// Handle scroll events to close the zoomed image
const scrollHandler = () => {
  closeZoom()
}

// Focus trap voor de zoom modal
const handleKeydown = (e: KeyboardEvent) => {
  if (!isZoomed.value) return // ← Modal dicht? Doe niets.

  if (e.key === 'Escape') closeZoom()
  if (e.key === 'Tab') e.preventDefault()
}

// Function to open the zoomed image
const openZoom = () => {
  previouslyFocusedElement.value = document.activeElement as HTMLElement
  isZoomed.value = true
  window.addEventListener('scroll', scrollHandler)

  // Focus the modal for accessibility
  nextTick(() => {
    modalRef.value?.focus()
  })
}

// Function to close the zoomed image
const closeZoom = () => {
  isZoomed.value = false
  window.removeEventListener('scroll', scrollHandler)
  previouslyFocusedElement.value?.focus()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

// Verwijder scroll listen als component unmount
onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
  document.removeEventListener('keydown', handleKeydown)
})
</script>
