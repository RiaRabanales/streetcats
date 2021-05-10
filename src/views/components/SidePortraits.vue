<template>
  <!-- //TODO no me coge el d-flex -->
  <div class="mt-0">
    <div 
      v-for="portrait in randomPortraits" 
      :key="portrait.url" 
      class="d-flex justify-content-end align-items-start px-2 px-lg-3"
      style="height:32%;"
    >
      <img
        :src="portrait.url"
        :alt="portrait.description"
        class="cat-portraits"
      />
    </div>
  </div>
</template>

<script>
import { store } from "@/store/index";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  setup() {
    return { randomPortraits: store.getters.getPortraits };
  }
};
</script>

<style scoped>
.cat-portraits {
  width: 90%;
  height: auto; 
  min-width: 150px; 
  object-fit: contain;
}
</style>