<template>
  <div
    ref="codeblock"
    class="relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-lg p-4"
  >
    <slot />
    <button
      class="absolute flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 active:scale-[0.97] active:bg-zinc-600 border border-zinc-700 rounded-lg size-8 top-4 right-4 cursor-pointer transition-[colors,scale] ease-[cubic-bezier(.25,.46,.45,.94)] duration-150"
      @click="copyCode"
    >
      <Icon
        :name="copied ? 'lucide:check' : 'lucide:copy'"
        :class="['copy-icon-crossfade']"
        size="16"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
const codeblock = ref<HTMLElement | null>(null)
const copied = ref(false)

const copyCode = async () => {
  const code = codeblock.value?.querySelector('pre')?.textContent || ''
  await navigator.clipboard.writeText(code)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<style scoped>
.copy-icon-crossfade {
  transition: opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1);
}
</style>
