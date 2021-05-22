<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3>{{ $t("nav.cats") }}</h3>

      <div class="mb-3">
        <div v-if="error == 'nodocs'" class="error">{{ $t('cats.error') }}</div>
        <div v-if="documents">
          <ListCats :cats="documents" />
        </div>

        <router-link
          v-if="logged"
          :to="{ name: 'NewCat' }"
          class="add-btn mt-3 btn btn-primary border border-primary border-2 rounded-pill text-center"
        >
          {{ $t('cats.add') }}
        </router-link>
      </div>
    </div>

    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import ListCats from "./components/cats/ListCats.vue";
import getCollection from "@/utils/getCollection";
import SidePortraits from "./components/SidePortraits.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Cats",
  components: { ListCats, SidePortraits },
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