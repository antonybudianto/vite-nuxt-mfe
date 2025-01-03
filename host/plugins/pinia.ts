import { createPinia } from "pinia"
import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia()
  // @ts-expect-error need global
  window.__mfeHostPinia = pinia
  nuxtApp.vueApp.use(pinia)
})
