<template>
  <div class="p-4 border rounded bg-blue-50 sty1">
    <h2 class="text-xl mb-2">Remote Component</h2>
    <p>This component is exposed from the remote application</p>
  </div>
</template>

<script setup>
defineComponent({
  name: 'RemoteComponent'
})

onMounted(() => {
  console.log('mounted')
})
</script>

<style>
  .sty1 {
    background: pink;
  }
</style>