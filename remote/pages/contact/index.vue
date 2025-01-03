<template>
  <div class="rmt">
    <h1>rmt/pages/contact/index.vue</h1>
    <div>Contact index</div>
    <div>
      count: {{ count }} / counterFromPinia: {{ counter.$state.count }} <br />
      <button type="button" @click="count++">increment+ local</button>
      <button type="button" @click="handleIncrementPinia">
        increment+ pinia
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCounter } from "@/stores/counter"
const counter = useCounter()
const count = ref(0)

const emit = defineEmits<{
  (e: "increment", count: number): void
}>()

const handleIncrementPinia = () => {
  counter.increment()
  emit("increment", counter.$state.count)
}
</script>
<style scoped>
.rmt {
  background-color: antiquewhite;
}
</style>
