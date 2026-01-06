<template>
  <!-- Sidebar panel -->
  <nav
    id="docs-sidebar"
    ref="sidebarRef"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
    aria-label="Navigatiemenu"
    :class="['fixed pt-(--header-height) block lg:hidden z-30 h-full w-full border-r border-zinc-900 bg-zinc-950 opacity-0 invisible transition-opacity ease-in-out duration-300', { 'opacity-100 visible': isOpen }]"
  >
    <div class="flex flex-col p-4">
      <span
        id="mobile-category-coding"
        class="sidebar-category-title"
      >
        Coding
      </span>
      <ul
        aria-labelledby="mobile-category-coding"
        class="flex flex-col gap-2"
      >
        <li
          v-for="link in docsNavigationCode"
          :key="link.title"
        >
          <DocsSidebarLink :to="link.href">
            {{ link.title }}
          </DocsSidebarLink>
        </li>
      </ul>
    </div>

    <div class="flex flex-col p-4">
      <span
        id="mobile-category-school"
        class="sidebar-category-title"
      >
        School
      </span>
      <ul
        aria-labelledby="mobile-category-school"
        class="flex flex-col gap-2"
      >
        <li
          v-for="link in docsNavigationSchool"
          :key="link.title"
        >
          <DocsSidebarLink
            :to="link.href"
          >
            {{ link.title }}
          </DocsSidebarLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { docsNavigationCode, docsNavigationSchool } from '~/constants/docsNavigation'

const { isOpen, handleKeydown, sidebarRef } = useSidebar('docs-sidebar')

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
