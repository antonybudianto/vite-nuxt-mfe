<template>
  <div>
    <component v-if="asyncPageComponent" :is="asyncPageComponent" />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue"

/**
 * @todo
 * it'll be nice if there is a way to dynamically match route and render..
 */
console.log(">>", window.location.pathname)

const Index = defineAsyncComponent(() => import("@/pages/contact/index.vue"))
const Properties = defineAsyncComponent(() =>
  import("@/pages/contact/properties.vue")
)

let asyncPageComponent
if (/\/contact\/properties/.test(window.location.pathname)) {
  asyncPageComponent = Properties
} else {
  asyncPageComponent = Index
}
</script>
