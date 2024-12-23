<template>
  <div class="rmt2">
    <h1>rmt/pages/contact/properties.vue</h1>
    <div>Contact prop</div>
    <div>
      <button type="button" @click="handleClick">Click: {{ counter }}</button>
    </div>
    <div class="links">
      <NuxtLink to="/">Go to home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </div>
</template>
<script setup>
const counter = ref(0)

const handleClick = () => {
  counter.value += 2
}

definePageMeta({
  name: "contact-properties"
})
</script>

<style scoped>
.rmt2 {
  background: pink;
}
.links {
  display: flex;
  gap: 2rem;
}
</style>
