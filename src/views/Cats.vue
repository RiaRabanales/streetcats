<template>
  <div class="col-12 col-md-11 mt-1 mt-md-2 mt-lg-3 p-md-1">
    <h3>{{ $t("nav.cats") }}</h3>
    <div v-if="!showNewCatForm">
      <div v-if="error" class="error">
        ¡ERROR! ¡Que se nos han perdido los gatos!
      </div>
      <!-- //TODO literales -->
      <div v-if="documents">
        <ListCats :cats="documents" />
      </div>

      <!-- //TODO que sólo usuarios registrados puedan añadir gatos -->
      <button
        @click="showNewCatForm = true"
        class="mt-1 btn btn-primary border border-primary border-2 rounded-pill text-center"
      >
        Añadir nuevo gatete
      </button>
    </div>
    <!-- //TODO que actualice o algo al enviar nuevo gato -->
    <NewCat v-else />
  </div>
</template>

<script>
import ListCats from "./components/cats/ListCats.vue";
import NewCat from "./components/cats/NewCat.vue";
import getCollection from "@/utils/collections/getCollection";
import { ref } from "vue";

export default {
  name: "Cats",
  components: { ListCats, NewCat },
  setup() {
    const { error, documents } = getCollection("cats");
    const showNewCatForm = ref(false);

    return { error, documents, showNewCatForm };
  },
};
</script>