async function llamarApi(evento) {
    evento.preventDefault();

    let titulo = document.getElementById("input-titulo").value;
    let descripcion = document.getElementById("input-descripcion").value;
    let urlImagen = document.getElementById("input-url-imagen").value;
    let urlFabricante = document.getElementById("input-url-fabricante").value;
    let caracteristica = document.getElementById("input-caracteristica").value;
    let descripcionCaracteristica = document.getElementById("input-descripcion-caraterística").value;

    let datos = {
        title: titulo,
        description: descripcion,
        image_url: urlImagen,
        factory_url: urlFabricante,
        features: [
            {
                name: caracteristica,
                description: descripcionCaracteristica
            }
        ]
    }

    let response = await fetch('https://crudcrud.com/api/938b1a73beb940958903caf380b276cb/notebook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })

    if (response.ok) {
        alert("Se ha creado el notebook");
    } else {
        alert("No se ha podido crear el notebook");
    }
}

document.getElementById("formulario-alta-notebook").addEventListener("submit", llamarApi);