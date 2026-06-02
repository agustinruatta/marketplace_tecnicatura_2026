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
    <li v-for="(notebook, index) in notebooks" :key="index">
      <a>
        <img :src="notebook.image_url" :alt="notebook.title" />
        <i>{{ notebook.title }}</i>
      </a>

    </li>
  </ul>
</template>
