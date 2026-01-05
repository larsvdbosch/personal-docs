<template>
  <!-- Sidebar panel -->
  <aside
    id="mobile-sidebar"
    ref="sidebarRef"
    :class="['fixed top-(--header-height) right-0 h-full bg-white p-4 w-full flex flex-col z-50 transition-translate ease-in-out duration-300', isOpen ? 'translate-x-0': 'translate-x-full invisible']"
    role="dialog"
    aria-modal="true"
    aria-label="Navigatiemenu"
  >
    <div
      class="flex flex-col gap-4"
    >
      <DropdownMenu title="Resources">
        <NavLink
          v-for="item in resourceItems"
          :key="item.name"
          :to="item.href"
        >
          {{ item.name }}
        </NavLink>
      </DropdownMenu>

      <NavLink
        v-for="link in navigationLinks"
        :key="link.name"
        :to="link.href"
      >
        {{ link.name }}
      </NavLink>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { navigationLinks, resourceItems } from '~/constants/navigation'

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

const { isOpen, handleKeydown, sidebarRef } = useSidebar()
</script>
