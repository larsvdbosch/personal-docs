<template>
  <div class="fixed w-full bg-zinc-950 top-0 h-(--header-height) z-50 border-b border-zinc-900">
    <div class="px-4 flex items-center w-full h-full">
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
          class="hover:text-zinc-500 text-lg font-semibold text-white transition-colors ease-out duration-150"
        >
          <span>Documentation</span>
        </NuxtLink>
      </div>
    </div>
  </div>
  <MobileSidebar />
</template>
