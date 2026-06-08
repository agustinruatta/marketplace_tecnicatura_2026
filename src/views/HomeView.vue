<script setup>
import {ref} from "vue";

let notebooks = ref([]);

async function cargarNotebooks() {
  const response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/');
  notebooks.value = await response.json();
}

cargarNotebooks();

</script>

<template>
  <h1>Mercado No Libre - El peor mercado</h1>

  <ul id="listado-notebooks">
    <li class="item-notebook" v-for="(notebook, index) in notebooks" :key="index">
      <router-link :to="'/notebook/' + notebook.id">
        <img class="imagen-notebook" :src="notebook.image_url" :alt="notebook.title"/>
        <i class="titulo-notebook">{{ notebook.title }}</i>
      </router-link>

    </li>
  </ul>
</template>

<style scoped>
#listado-notebooks {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  list-style: none;
  padding: 1rem;
  margin: 0;
}

.item-notebook {
  border: 1px solid #ccc;
  padding: 0.5rem;
}

.imagen-notebook {
  width: 100%;
  height: 150px;
  object-fit: contain;
}

.titulo-notebook {
  display: block;
  text-align: center;
}
</style>
