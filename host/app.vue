<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Nuxt 3 MFE Host App</h1>
    <div class="grid grid-cols-1 gap-4">
      <HostComponent />
      <Suspense>
        <template #default>
          <RemoteComponent />
        </template>
        <template #fallback>
          <div>Loading remote component...</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import HostComponent from './components/HostComponent.vue'

const RemoteComponent = defineAsyncComponent(() => import('remote/RemoteComponent'))
</script>