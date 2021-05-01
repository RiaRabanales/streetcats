<template>
  <div>
    <!-- //TODO literales -->
    <h3>Detalles del gatete</h3>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="cat">
      <div class="d-flex justify-content-between">
        <div class="cat-img">
          aquí irá la foto //TODO
          <!--  <img :src="cat.img" :alt="cat.name" />  -->
        </div>
        <div class="cat-details">
          <ul>
            <li>Nombre: {{ cat.name }}</li>
            <li>Raza: {{ cat.breed }}</li>
          </ul>
        </div>
      </div>
      <p class="cat-contact">
        Para más detalles, contacta con //TODO usuario + si procede nombre o teléfono
      </p>
    </div>
  </div>
</template>

<script>
import getDocument from "@/utils/collections/getDocument";

export default {
  props: ["id"],
  //TODO que si el usuario creó el gato pueda eliminarlo

  setup(props) {
    // toma el objeto document pero le cambia el nombre a gato
    const { error, document: cat } = getDocument("cats", props.id);

    return { error, cat };
  },
};
</script>

<style>
</style>