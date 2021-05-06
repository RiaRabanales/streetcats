<template>
  <div class="col-12 col-md-11 mt-1 mt-md-2 mt-lg-3 p-md-1">
    <h3>{{ $t("nav.cats") }}</h3>

    <div class="mb-3">
      <div v-if="error" class="error">
        ¡ERROR! ¡Que se nos han perdido los gatos!
      </div>
      <!-- //TODO literales -->
      <div v-if="documents">
        <ListCats :cats="documents" />
      </div>

      <router-link
        v-if="logged"
        :to="{ name: 'NewCat' }"
        class="add-btn mt-3 btn btn-primary border border-primary border-2 rounded-pill text-center"
      >
        Add a cat!
      </router-link>
    </div>
  </div>
</template>

<script>
import ListCats from "./components/cats/ListCats.vue";
import getCollection from "@/utils/getCollection";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Cats",
  components: { ListCats },
  setup() {
    const { error, documents } = getCollection("cats");

    return {
      error,
      documents,
      logged: computed(() => useStore().state.logged),
    };
  },
};
</script>