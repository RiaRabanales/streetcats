<template>
  <div class="d-flex flex-row align-items-stretch flex-wrap">
    <div v-for="cat in cats" :key="cat.id" class="card m-1 me-md-2 me-mb-2 p-1" style="width: 15rem;">
      <router-link
        :to="{ name: 'SingleCat', params: { id: cat.id } }"
        role="button"
        class="d-flex flex-column justify-content-between align-items-center"
        style="height:100%;"
      >
        <div>
          <img :src="cat.imageUrl" class="card-img" alt="cat.name" />
        </div>
        <h5 class="card-title mt-1">{{ cat.name }}</h5>
      </router-link>
    </div>
  </div>
</template>

<script>
import { EyeIcon } from "@zhuowenli/vue-feather-icons";

export default {
  props: ["cats"],
  components: { EyeIcon },
};
</script>

<style scoped>
.card {
  width: 200px;
}

.card-img {
  object-fit: cover;
  min-width: 100%;
  height: 200px;
}
</style>