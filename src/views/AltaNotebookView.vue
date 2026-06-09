<script setup>
import {ref} from "vue";

let title = ref("");
let description = ref("");
let imageUrl = ref("");
let factoryUrl = ref("");
let featureName = ref("");
let featureDescription = ref("");

async function llamarApi(event) {
  event.preventDefault();

  let data = {
    title: title.value,
    description: description.value,
    image_url: imageUrl.value,
    factory_url: factoryUrl.value,
    features: [
      {
        name: featureName.value,
        description: featureDescription.value,
      }
    ]
  }

  let respuesta = await fetch('https://crudcrud.com/api/74d92f809a8d4aa5b8d0261c1dd871a6/notebooks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (respuesta.ok) {
    alert("Notebook cargada exitosamente");
  } else {
    alert("Error al cargar notebook");
  }
}
</script>

<template>
  <form id="formulario-alta-notebook" @submit="llamarApi">
    <label>
      Titulo: <input type="text" name="titulo" id="input-titulo" v-model="title" />
    </label>

    <label>
      Descripción: <textarea name="descripcion" id="input-descripcion" v-model="description"></textarea>
    </label>

    <label>
      Url imagen: <input type="text" name="url-imagen" id="input-url-imagen" v-model="imageUrl">
    </label>

    <label>
      URL fabricante: <input type="text" name="url-fabricante" id="input-url-fabricante" v-model="factoryUrl">
    </label>

    <label>
      Característica: <input type="text" name="caracteristica" id="input-caracteristica" v-model="featureName">
    </label>

    <label>
      Descripción característica: <textarea name="descripcion" id="input-descripcion-caraterística" v-model="featureDescription"></textarea>
    </label>

    <input type="submit" value="Enviar">
  </form>
</template>

<style scoped>
#formulario-alta-notebook {
  display: grid;
  grid-template-columns: 100%;
  justify-items: start;
}
</style>
