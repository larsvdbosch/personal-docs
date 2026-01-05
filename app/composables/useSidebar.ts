export function useSidebar() {
  const isOpen = useState<boolean>('sidebar-is-open', () => false)

  // Functions to toggle, open, and close the sidebar
  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
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
  }
}
