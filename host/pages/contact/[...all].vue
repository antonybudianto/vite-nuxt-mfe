<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Contact page (Host)</h1>
    <div class="grid grid-cols-1 gap-4">
      <div class="rmt">
        <Suspense>
          <template #default>
            <RemoteContactRouter />
          </template>
          <template #fallback>
            <div>Loading remote component...</div>
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue"

const RemoteContactRouter = defineAsyncComponent(() =>
  import("remote/ContactRouter")
)
</script>

<style scoped></style>
