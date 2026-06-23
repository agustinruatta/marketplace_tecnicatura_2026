<script setup>
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import ImagenNotebook from "@/components/ImagenNotebook.vue";
import DescripcionNotebook from "@/components/DescripcionNotebook.vue";

let route = useRoute();
let notebook = ref(null);
let carroDeCompra = ref([]);

async function cargarDatos() {
  let id = route.params.id;
  const respuesta = await fetch(' https://crudcrud.com/api/b185a80bbde14a6e88e5eb8f47a1edd4/notebooks/' + id);

  if (!respuesta.ok) {
    alert("Notebook no encontrada");
    return;
  }

  notebook.value = await respuesta.json();
}

cargarDatos();

function agregarAFavoritos() {
  let idFavoritos = [];

  if (localStorage.getItem('notebook-favoritos') !== null) {
    idFavoritos = JSON.parse(localStorage.getItem('notebook-favoritos'));
  }

  idFavoritos.push(idNotebook);
  localStorage.setItem('notebook-favoritos', JSON.stringify(idFavoritos));
}

function agregarACarroDeCompras() {
  carroDeCompra.value.push({
    title: notebook.value.title,
    price: 500000
  })
}

const totalCarroDeCompra = computed(() => {
  let total = 0;

  for (let notebookComprada of carroDeCompra.value) {
    total += notebookComprada.price;
  }

  return total;
})
</script>

<template>
  <p v-if="notebook === null">Cargando...</p>
  <div id="contenedor-principal" v-else>

    <h1 id="titulo">{{ notebook.title }}</h1>

    <ImagenNotebook :title="notebook.title" :image-url="notebook.image_url" />

    <div id="carro-compras" class="caja">
      <div v-if="carroDeCompra.length > 0">
        <ul>
          <li v-for="(notebookComprada, index) in carroDeCompra">
            {{ notebookComprada.title }}: {{ notebookComprada.price }}
          </li>
        </ul>

        <p>{{ totalCarroDeCompra }}</p>
      </div>
    </div>

    <div class="caja" id="descripcion">
      <DescripcionNotebook :notebook="notebook" />

      <button id="boton-favoritos" @click="agregarAFavoritos">Agregar a favoritos</button>

    </div>

    <div class="caja" id="boton-comprar">
      <button @click="agregarACarroDeCompras">Comprar</button>
    </div>

    <div class="caja" id="feedback">
      <form action="/submit-notebook" method="post">
        <label id="comentario">
          Comentario:
          <textarea name="comentario" placeholder="Ingrese su comentario" required></textarea>
        </label>

        <div id="puntacion">
          <label>
            1 <input type="radio" name="puntuacion" value="1">
          </label>

          <label>
            2 <input type="radio" name="puntuacion" value="2">
          </label>

          <label>
            3 <input type="radio" name="puntuacion" value="3">
          </label>

          <label>
            4 <input type="radio" name="puntuacion" value="4">
          </label>

          <label>
            5 <input type="radio" name="puntuacion" value="5">
          </label>

        </div>

        <div id="boton-comentario">
          <input type="submit" value="Enviar comentario">
        </div>

      </form>
    </div>

  </div>
</template>

<style scoped>
#contenedor-principal {
  display: grid;
  grid-template-columns: 30% 30% auto;
  grid-gap: 2%;
  justify-content: stretch;
  grid-template-areas:
                    "titulo titulo titulo"
                    "imagen imagen carro-compras"
            "imagen imagen descripcion"
            "imagen imagen boton-comprar"
        "feedback feedback feedback"
}

#titulo {
  grid-area: titulo;
}

#carro-compras {
  grid-area: carro-compras;
}

#descripcion {
  grid-area: descripcion;
}

#boton-comprar {
  grid-area: boton-comprar;
}

#feedback {
  grid-area: feedback;
}

h1 {
  font-weight: bold;
  font-size: 3vw;
}

#div-imagen-notebook {
  text-align: center;
}

#imagen-notebook {
  border: 4px solid gray;
  height: 100%;
  width: 100%;
}

.caracteristica {
  font-family: cursive;
}

.caja {
  border: 4px solid gray;
  margin: 10px;
}
</style>
