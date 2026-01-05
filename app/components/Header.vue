<template>
  <div class="fixed backdrop-blur-3xl w-full top-0 h-(--header-height) z-50">
    <div class="container flex items-center justify-between w-full h-full">
      <Logo />
      <button
        class="flex lg:hidden p-2 rounded-lg hover:bg-zinc-200 transition-colors ease-out duration-150"
        :aria-expanded="isOpen"
        aria-controls="mobile-sidebar"
        :aria-label="isOpen ? 'Sluit menu' : 'Open menu'"
        @click="toggle"
      >
        <Icon
          v-if="!isOpen"
          name="lucide:menu"
          class="lg:hidden"
          size="24"
        />
        <Icon
          v-if="isOpen"
          name="lucide:x"
          class="lg:hidden"
          size="24"
        />
      </button>
      <div
        class="hidden lg:flex gap-8 items-center"
      >
        <DropdownMenu
          title="Resources"
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
      <div class="hidden lg:flex gap-4 items-center">
        <Button
          href="/docs"
          variant="secondary"
          aria-label="Docs"
        >
          Documentation
        </Button>
      </div>
    </div>
  </div>
  <MobileSidebar />
</template>

<script lang="ts" setup>
import { onKeyStroke } from '@vueuse/core'
import { navigationLinks, resourceItems } from '~/constants/navigation'

// Destructuring the sidebar composable for easier access
const { isOpen, toggle, close } = useSidebar()

// Sluit het dropdown-menu bij het indrukken van de Escape-toets
onKeyStroke('Escape', () => {
  if (isOpen.value) close()
})
</script>
