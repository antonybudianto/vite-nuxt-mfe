<template>
  <div>
    <h1>rmt/pages/contact/properties.vue</h1>
    <div>Contact prop</div>
    <div>
      <button type="button" @click="handleClick">Click: {{ counter }}</button>
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
