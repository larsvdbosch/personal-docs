<template>
  <div class="fixed pt-(--header-height) hidden lg:block z-30 h-full w-64 border-r border-zinc-900 bg-zinc-950">
    <li class="flex flex-col gap-2 p-4">
      <span class="sidebar-category-title">Coding</span>
      <DocsSidebarLink
        v-for="link in docsNavigationCode"
        :key="link.title"
        :to="link.href"
      >
        {{ link.title }}
      </DocsSidebarLink>
    </li>

    <li class="flex flex-col gap-2 p-4">
      <span class="sidebar-category-title">School</span>
      <DocsSidebarLink
        v-for="link in docsNavigationSchool"
        :key="link.title"
        :to="link.href"
      >
        {{ link.title }}
      </DocsSidebarLink>
    </li>
  </div>
</template>

<script lang="ts" setup>
import { docsNavigationCode, docsNavigationSchool } from '~/constants/docsNavigation'
</script>
