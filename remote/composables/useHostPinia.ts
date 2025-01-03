import { onBeforeMount } from "vue"
import { setActivePinia } from "pinia"

export function useHostPinia() {
  onBeforeMount(() => {
    console.log("RMT: init pinia store from host: ")
    // @ts-expect-error global pinia host
    setActivePinia(window.__mfeHostPinia || createPinia())
  })
}
