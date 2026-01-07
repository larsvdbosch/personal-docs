<template>
  <div
    class="hidden lg:flex bg-zinc-50 border border-zinc-100 rounded-xl p-1 gap-8 items-center"
  >
    <DropdownMenu
      title="Dropdown"
    >
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
</template>

<script setup lang="ts">
import { navigationLinks, resourceItems } from '~/constants/navigation'
</script>
