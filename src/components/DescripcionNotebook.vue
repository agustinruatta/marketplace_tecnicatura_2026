<script setup>
defineProps({
  notebook: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <p id="texto-descripcion">{{ notebook.description }}</p>

  <p>Características</p>
  <ul id="caracteristicas">
    <li v-for="(feature, indice) in notebook.features" :key="indice">
      {{ feature.name }}: {{ feature.description }}
    </li>
  </ul>

  <a :href="notebook.factory_url" id="link-pagina">Página oficial</a>
</template>

<style scoped>

</style>
