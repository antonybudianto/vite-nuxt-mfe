<template>
  <div>
    <div class="layout">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <NuxtLink to="/contact/properties">Contact Properties</NuxtLink>
    </div>
    <slot />
    <div>--HOST Footer--</div>
  </div>
</template>
<style scoped>
.layout {
  display: flex;
  gap: 20px;
}
</style>
