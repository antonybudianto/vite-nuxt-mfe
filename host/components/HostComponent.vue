<template>
  <div class="p-4 border rounded">
    <h2 class="text-xl mb-2">Host Component</h2>
    <p>This is a component from the host application</p>
  </div>
</template>

<script setup>
defineComponent({
  name: 'HostComponent'
})
</script>