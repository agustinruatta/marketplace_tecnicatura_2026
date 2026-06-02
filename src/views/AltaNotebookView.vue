<script setup>

</script>

<template>
  <form id="formulario-alta-notebook">
    <label>
      Titulo: <input type="text" name="titulo" id="input-titulo">
    </label>

    <label>
      Descripción: <textarea name="descripcion" id="input-descripcion"></textarea>
    </label>

    <label>
      Url imagen: <input type="text" name="url-imagen" id="input-url-imagen">
    </label>

    <label>
      URL fabricante: <input type="text" name="url-fabricante" id="input-url-fabricante">
    </label>

    <label>
      Característica: <input type="text" name="caracteristica" id="input-caracteristica">
    </label>

    <label>
      Descripción característica: <textarea name="descripcion" id="input-descripcion-caraterística"></textarea>
    </label>

    <input type="submit" value="Enviar">
  </form>
</template>

<style scoped>
#formulario-alta-notebook {
  display: grid;
  grid-template-columns: 100%;
  justify-items: start;
}
</style>
