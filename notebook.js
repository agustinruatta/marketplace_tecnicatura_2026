import apiService from './api.js';
import {agregarListItem, editarTexto} from "./manejadorHtml.js";

async function cargarDatos(id) {
    let datos = await apiService.getNotebook(id);

    editarTexto('titulo', datos.title);
    editarTexto('texto-descripcion', datos.description);

    for (let caracteristica of datos.features) {
        agregarListItem('caracteristicas', caracteristica.name + " " + caracteristica.description);
    }

    document.getElementById('link-pagina').href = datos.factory_url;

    let imagen = document.getElementById('imagen-notebook');
    imagen.src = datos.image_url;
    imagen.alt = datos.title;


}

let idNotebook = '6a026e7dee62c203e8571373';

cargarDatos(idNotebook);

document.getElementById('boton-favoritos').addEventListener('click', function () {
    let idFavoritos = [];

    if (localStorage.getItem('notebook-favoritos') !== null) {
        idFavoritos = JSON.parse(localStorage.getItem('notebook-favoritos'));
    }

    idFavoritos.push(idNotebook);
    localStorage.setItem('notebook-favoritos', JSON.stringify(idFavoritos));
})