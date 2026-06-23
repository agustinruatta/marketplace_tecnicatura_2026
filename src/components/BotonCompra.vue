<script setup>
import {ref} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  }
})

let precioNotebook = ref(0);

const emit = defineEmits(["notebookAgregada"])

function agregarACarroDeCompras() {
  emit("notebookAgregada", {
    title: props.title.value,
    price: precioNotebook.value
  })
}
</script>

<template>
  <button @click="agregarACarroDeCompras">Comprar</button>

  <label>
    Precio:
    <input type="number" v-model="precioNotebook">
  </label>
</template>

<style scoped>

</style>
