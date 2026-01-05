export function useSidebar() {
  const isOpen = useState<boolean>('sidebar-is-open', () => false)

  const sidebarRef = ref<HTMLElement | null>(null)

  const previouslyFocusedElement = ref<HTMLElement | null>(null)

  // Focus trap voor de mobile sidebar
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return

    // Vind alle focusbare elementen binnen de modal
    const focusableElements = sidebarRef.value?.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    )

    if (!focusableElements || focusableElements.length === 0) return

    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    // Shift+Tab op eerste element → ga naar laatste
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault()
      lastElement.focus()
    }

    // Tab op laatste element → ga naar eerste
    if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault()
      firstElement.focus()
    }
  }

  // Functions to toggle, open, and close the sidebar
  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  const open = () => {
    isOpen.value = true
    previouslyFocusedElement.value = document.activeElement as HTMLElement

    nextTick(() => {
      sidebarRef.value?.focus()
    })
  }

  const close = () => {
    isOpen.value = false
    previouslyFocusedElement.value?.focus()
  }

  // Watch for changes in isOpen to manage body overflow
  watch(isOpen, (newValue) => {
    if (import.meta.client) {
      document.body.style.overflow = newValue ? 'hidden' : ''
    }
  })

  // Close the sidebar on route change
  const route = useRoute()

  watch(route, () => {
    close()
  }, { immediate: true })

  return {
    isOpen,
    toggle,
    open,
    close,
    handleKeydown,
    sidebarRef,
  }
}
