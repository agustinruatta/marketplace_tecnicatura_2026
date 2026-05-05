export function editarTexto(idElemento, texto) {
    document.getElementById(idElemento).textContent = texto;
}

export function agregarListItem(idLista, textoElemento) {
    let item = document.createElement('li');
    item.textContent = textoElemento;

    document.getElementById(idLista).appendChild(item);
}

export function agregarLinkAItem(idLista, urlImagen, nombre) {
    let imagen = document.createElement('img');
    imagen.src = urlImagen;
    imagen.alt = nombre;

    let texto = document.createElement('i');
    texto.textContent = nombre;

    let link = document.createElement('a');
    link.href = 'notebook.html';

    link.appendChild(imagen);
    link.appendChild(document.createElement('br'));
    link.appendChild(texto);

    document.getElementById(idLista).appendChild(link);
}