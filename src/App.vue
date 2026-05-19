<script setup>
import {ref} from "vue";

let notebook = ref({
  "id": 1,
  "title": "Notebook HP 14-dq2024la",
  description: "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
  "image_url": "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
  "factory_url": "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
  "features": [
    {
      "name": "RAM",
      "description": "16 GB"
    },
    {
      "name": "Procesador",
      "description": "i9"
    }
  ]
})

function agregarAFavoritos() {
  let idFavoritos = [];

  if (localStorage.getItem('notebook-favoritos') !== null) {
    idFavoritos = JSON.parse(localStorage.getItem('notebook-favoritos'));
  }

  idFavoritos.push(idNotebook);
  localStorage.setItem('notebook-favoritos', JSON.stringify(idFavoritos));
}
</script>

<template>
  <div id="contenedor-principal">

    <h1 id="titulo">{{ notebook.title }}</h1>

    <div id="div-imagen-notebook">
      <img id="imagen-notebook" class="caja"
           :src="notebook.image_url"
           :alt="notebook.title">
    </div>

    <div class="caja" id="descripcion">
      <p id="texto-descripcion">{{ notebook.description }}</p>

      <p>Características</p>
      <ul id="caracteristicas">
        <li v-for="(feature, indice) in notebook.features" :key="indice">
          {{ feature.name }}: {{ feature.description }}
        </li>
      </ul>

      <a :href="notebook.factory_url" id="link-pagina">Página oficial</a>

      <button id="boton-favoritos" @click="agregarAFavoritos">Agregar a favoritos</button>

    </div>

    <div class="caja" id="boton-comprar">
      <button>Comprar</button>
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
          <input  type="submit" value="Enviar comentario">
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
            "imagen imagen descripcion"
            "imagen imagen boton-comprar"
        "feedback feedback feedback"
}

#titulo {
  grid-area: titulo;
}

#div-imagen-notebook {
  grid-area: imagen;
  width: 100%;
  height: 100%;
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
