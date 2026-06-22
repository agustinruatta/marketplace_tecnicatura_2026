<script setup>
import {ref} from "vue";
import * as yup from "yup";
import {Form, Field, ErrorMessage} from "vee-validate";

let title = ref("");
let description = ref("");
let imageUrl = ref("");
let factoryUrl = ref("");
let featureName = ref("");
let featureDescription = ref("");

let schema = yup.object({
  title: yup.string().max(100).required("Título obligatorio"),
  description: yup.string().max(1000).required("Description obligatoria"),
  imageUrl: yup.string().url().required("URL requerida"),
  factoryUrl: yup.string().url().required("URL requerida"),
  featureName: yup.string().required("Nombre obligatori0"),
  featureDescription: yup.string().required("Descripción obligatoria"),
})

async function llamarApi() {
  let data = {
    title: title.value,
    description: description.value,
    image_url: imageUrl.value,
    factory_url: factoryUrl.value,
    features: [
      {
        name: featureName.value,
        description: featureDescription.value,
      }
    ]
  }

  let respuesta = await fetch(' https://crudcrud.com/api/b185a80bbde14a6e88e5eb8f47a1edd4/notebooks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (respuesta.ok) {
    alert("Notebook cargada exitosamente");
  } else {
    alert("Error al cargar notebook");
  }
}
</script>

<template>
  <Form id="formulario-alta-notebook" @submit="llamarApi" :validation-schema="schema">
    <label>
      Titulo: <Field type="text" name="title" id="input-titulo" v-model="title" />
      <ErrorMessage name="title" />
    </label>

    <label>
      Descripción: <Field name="description" id="input-descripcion" v-model="description" />
      <ErrorMessage name="description" />
    </label>

    <label>
      Url imagen: <Field type="text" name="imageUrl" id="input-url-imagen" v-model="imageUrl" />
      <ErrorMessage name="imageUrl" />
    </label>

    <label>
      URL fabricante: <Field type="text" name="factoryUrl" id="input-url-fabricante" v-model="factoryUrl" />
      <ErrorMessage name="factoryUrl" />
    </label>

    <label>
      Característica: <Field type="text" name="featureName" id="input-caracteristica" v-model="featureName" />
      <ErrorMessage name="featureName" />
    </label>

    <label>
      Descripción característica: <Field name="featureDescription" id="input-descripcion-caraterística" v-model="featureDescription" />
      <ErrorMessage name="featureDescription" />
    </label>

    <Field type="submit" value="Enviar" name="submit" />
  </Form>
</template>

<style scoped>
#formulario-alta-notebook {
  display: grid;
  grid-template-columns: 100%;
  justify-items: start;
}
</style>
