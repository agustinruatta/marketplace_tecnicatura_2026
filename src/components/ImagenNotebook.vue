<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div id="div-imagen-notebook">
    <img id="imagen-notebook" class="caja"
         :src="imageUrl"
         :alt="title">
  </div>
</template>

<style scoped>

</style>
