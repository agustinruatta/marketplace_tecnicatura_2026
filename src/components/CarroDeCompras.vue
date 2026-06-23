<script setup>
import {computed} from "vue";

const props = defineProps({
  carroDeCompras: {
    type: Array,
    required: true,
  }
})

const totalCarroDeCompra = computed(() => {
  let total = 0;

  for (let notebookComprada of props.carroDeCompras) {
    total += notebookComprada.price;
  }

  return total;
})
</script>

<template>
  <div v-if="carroDeCompras.length > 0">
    <ul>
      <li v-for="(notebookComprada, index) in carroDeCompras">
        {{ notebookComprada.title }}: {{ notebookComprada.price }}
      </li>
    </ul>

    <p>{{ totalCarroDeCompra }}</p>
  </div>
</template>

<style scoped>
#carro-compras {
  grid-area: carro-compras;
}
</style>
