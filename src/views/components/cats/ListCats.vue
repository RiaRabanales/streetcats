<template>
  <div v-for="cat in cats" :key="cat.id">
    <!-- //TODO router link -->
    <div class="thumbnail">
      <img :src="cat.imgUrl" alt="cat.name" />
    </div>
    <div class="info">
      <h3>{{ cat.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cats"],
};
</script>

<style>
</style>