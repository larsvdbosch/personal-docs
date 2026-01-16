<template>
  <header class="fixed w-full bg-zinc-950 top-0 h-(--header-height) z-50 border-b border-zinc-900">
    <div class="px-4 flex items-center justify-between w-full h-full">
      <div class="flex gap-4 items-center justify-center">
        <NuxtLink
          class="active-label-state"
          to="/"
        >
          <NuxtImg
            src="/images/lars.jpg"
            alt="Logo"
            width="24"
            height="24"
            class="rounded-full"
          />
        </NuxtLink>
        <div class="h-6 w-px bg-zinc-600" />
        <NuxtLink
          to="/docs"
          class="text-h6 text-white hover:text-zinc-500 transition-background-color ease-out duration-150"
        >
          <span>Documentation</span>
        </NuxtLink>
      </div>
      <button
        class="flex lg:hidden items-center justify-center rounded-lg bg-zinc-800 hover:bg-zinc-700 active:scale-[0.97] active:bg-zinc-600 border border-zinc-700 size-8 transition-background-color ease-out duration-150"
        :aria-expanded="isOpen"
        aria-controls="docs-sidebar"
        :aria-label="isOpen ? 'Sluit menu' : 'Open menu'"
        @click="toggle"
      >
        <Icon
          :name="isOpen ? 'lucide:x' : 'lucide:menu'"
          class="lg:hidden"
          style="color: white;"
          size="16"
        />
      </button>
    </div>
  </header>
  <MobileSidebar />
</template>

<script setup lang="ts">
const { isOpen, toggle } = useSidebar('docs-sidebar')
</script>
