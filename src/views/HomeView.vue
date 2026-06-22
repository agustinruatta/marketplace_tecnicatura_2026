<script setup>
import {computed, ref} from "vue";

let notebooks = ref([]);

let textoFiltro = ref("");

async function cargarNotebooks() {
  const response = await fetch(' https://crudcrud.com/api/b185a80bbde14a6e88e5eb8f47a1edd4/notebooks');
  notebooks.value = await response.json();
}

cargarNotebooks();

const notebooksFiltradas = computed(() => {
  if (textoFiltro.value === "") {
    return notebooks.value;
  }

  return notebooks.value.filter((notebook) => {
    return notebook.title.includes(textoFiltro.value);
  })
})

</script>

<template>
  <h1>Mercado No Libre - El peor mercado</h1>

  <label>
    Buscar:
    <input type="text" v-model="textoFiltro" />
  </label>

  <ul id="listado-notebooks">
    <li class="item-notebook" v-for="(notebook, index) in notebooksFiltradas" :key="index">
      <router-link :to="'/notebook/' + notebook._id">
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
