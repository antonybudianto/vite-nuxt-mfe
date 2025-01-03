<template>
  <div>
    Index page:
    <p>Count: {{ counter.$state.count }}</p>
    <button type="button" @click="() => counter.increment()">
      increment+ pinia
    </button>
  </div>
</template>
<script setup lang="ts">
import { useCounter } from "@/stores/counter"
const counter = useCounter()
</script>
