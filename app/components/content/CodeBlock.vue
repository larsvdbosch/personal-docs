<template>
  <div
    ref="codeblock"
    class="relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto"
  >
    <slot />
    <button
      class="absolute flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 active:scale-[0.97] active:bg-zinc-600 border border-zinc-700 rounded-lg size-8 top-4 right-4 cursor-pointer transition-[colors,scale] ease-[cubic-bezier(.25,.46,.45,.94)] duration-150"
      aria-label="kopieren"
      @click="copyCode"
    >
      <Icon
        :name="copied ? 'lucide:check' : 'lucide:copy'"
        :class="['copy-icon-crossfade']"
        size="16"
      />
    </button>
  </div>

  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0 translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-out duration-300"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-1"
  >
    <Toast
      v-if="copied"
      label="Code copied successfully"
    />
  </Transition>
</template>

<script setup lang="ts">
const codeblock = ref<HTMLElement | null>(null)
const copied = ref(false)

const copyCode = async () => {
  const code = codeblock.value?.querySelector('pre')?.textContent || ''
  await navigator.clipboard.writeText(code)
  copied.value = true
  setTimeout(() => (copied.value = false), 4000)
}
</script>

<style scoped>
.copy-icon-crossfade {
  transition: opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1);
}
</style>
