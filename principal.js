import apiService from './api.js';
import {agregarLinkAItem} from "./manejadorHtml.js";

async function cargarDatos() {
    let notebooks = await apiService.getNotebooks();

    for (let notebook of notebooks) {
        agregarLinkAItem('listado-notebooks', notebook.image_url, notebook.title, notebook.id);
    }
}

cargarDatos();