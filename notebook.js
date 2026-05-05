import apiService from './api.js';
import {agregarListItem, editarTexto} from "./manejadorHtml.js";

async function cargarDatos() {
    let datos = await apiService.getNotebook(1);

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

cargarDatos();