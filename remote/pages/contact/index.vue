<template>
  <div class="rmt">
    <h1>rmt/pages/contact/index.vue</h1>
    <div>Contact index</div>
    <div>
      count: {{ count }}
      <button type="button" @click="count++">increment+</button>
    </div>
  </div>
</template>
<script setup>
const count = ref(0)
</script>
<style scoped>
.rmt {
  background-color: antiquewhite;
}
</style>
