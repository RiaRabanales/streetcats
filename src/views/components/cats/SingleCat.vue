<template>
  <div class="col-12 col-md-11 mt-1 mt-md-2 mt-lg-3 p-md-1">
    <!-- //TODO literales -->
    <h3>Detalles del gatete</h3>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="cat">
      <div class="d-flex justify-content-between">
        <div class="cat-img col-3 col-md-4">
          <img :src="cat.imageUrl" alt="cat.name" class="cat-photo" />
        </div>
        <div class="cat-details flex-grow-1">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Nombre: {{ cat.name }}</li>
            <li class="list-group-item">Raza: {{ cat.breed }}</li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-between">
      <p class="cat-contact mt-2 mt-md-3 small text-dark">
        Para más detalles, contacta con //TODO usuario + si procede nombre o teléfono
      </p>
        <router-link
        :to="{ name: 'Cats' }"
        class="mt-3 btn btn-primary p-2 text-center"
      >
        Volver a todos nuestros gatos
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import getDocument from "@/utils/getDocument";

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

<style scoped>
.cat-photo {
  max-width: 100%;
}
</style>