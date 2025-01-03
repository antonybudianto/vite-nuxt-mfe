<template>
  <div>
    <component
      v-if="asyncPageComponent"
      :is="asyncPageComponent"
      @increment="(v: number) => emit('increment', v)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue"
import { useHostPinia } from "~/composables/useHostPinia"

const props = defineProps<{
  label: string
}>()

const emit = defineEmits<{
  (e: "increment", count: number): void
}>()

useHostPinia()

/**
 * @todo
 * it'll be nice if there is a way to dynamically match route and render..
 */
const Index = defineAsyncComponent(() => import("@/pages/contact/index.vue"))
const Properties = defineAsyncComponent(
  () => import("@/pages/contact/properties.vue")
)

let asyncPageComponent: unknown
if (/\/contact\/properties/.test(window.location.pathname)) {
  asyncPageComponent = Properties
} else {
  asyncPageComponent = Index
}
</script>
