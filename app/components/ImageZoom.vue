<template>
  <div>
    <!-- Normale afbeelding, klikbaar voor zoom -->
    <NuxtImg
      :src="src"
      alt="Zoomable image"
      width="1280"
      height="720"
      class="cursor-zoom-in rounded-lg"
      loading="lazy"
      @click="openZoom"
    />

    <!-- Fullscreen overlay met vergrote afbeelding -->
    <Teleport
      to="body"
    >
      <div
        ref="modalRef"
        :class="['fixed h-full w-full inset-0 bg-black/95 flex items-center justify-center z-100 transition-opacity duration-150 ease-out cursor-zoom-out',
                 isZoomed ? 'opacity-100 visible' : 'opacity-0 invisible']"
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
          :class="['max-h-[90vh] max-w-[90vw] transition-scale duration-400 ease-out rounded-lg',
                   isZoomed ? 'scale-100' : 'scale-90']"
          loading="lazy"
        />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
type Props = {
  src: string
}

defineProps<Props>()

const modalRef = ref<HTMLElement | null>(null)
const isZoomed = ref(false)
const previouslyFocusedElement = ref<HTMLElement | null>(null)

// Sluit modal bij scrollen
const scrollHandler = () => {
  closeZoom()
}

// Focus trap: houdt focus binnen modal, sluit met Escape
const handleKeydown = (e: KeyboardEvent) => {
  if (!isZoomed.value) return

  if (e.key === 'Escape') closeZoom()
  if (e.key === 'Tab') e.preventDefault()
}

// Opent zoom modal en slaat vorige focus op voor herstel bij sluiten
const openZoom = () => {
  previouslyFocusedElement.value = document.activeElement as HTMLElement
  isZoomed.value = true
  window.addEventListener('scroll', scrollHandler)

  nextTick(() => {
    modalRef.value?.focus()
  })
}

// Sluit modal en herstelt focus naar origineel element
const closeZoom = () => {
  isZoomed.value = false
  window.removeEventListener('scroll', scrollHandler)
  previouslyFocusedElement.value?.focus()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

// Cleanup: verwijder alle event listeners bij unmount
onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
  document.removeEventListener('keydown', handleKeydown)
})
</script>
