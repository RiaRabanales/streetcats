<template>
  <div class="d-flex flex-row justify-content-between flex-wrap">
    <div v-for="cat in cats" :key="cat.id" class="card m-1 p-1" style="width: 15rem;">
      <router-link
        :to="{ name: 'SingleCat', params: { id: cat.id } }"
        role="button"
      >
        <img :src="cat.imageUrl" class="card-img-top" alt="cat.name" />
        <h5 class="card-title text-decoration-none">{{ cat.name }}</h5>
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
</style>