<template>
  <nav class="fixed pt-(--header-height) hidden lg:block z-30 h-full w-64 border-r border-zinc-900 bg-zinc-950">
    <div class="flex flex-col p-4">
      <span
        id="desktop-category-coding"
        class="sidebar-category-title"
      >
        Coding
      </span>
      <ul
        aria-labelledby="desktop-category-coding"
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
        id="desktop-category-school"
        class="sidebar-category-title"
      >
        School
      </span>
      <ul
        aria-labelledby="desktop-category-school"
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
</script>
