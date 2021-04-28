<template>
  <div v-for="cat in cats" :key="cat.id" class="d-flex justify-content-between flex-wrap">
    <!-- //TODO router link 
    //TODO
    <div class="thumbnail">
      <img :src="cat.imgUrl" alt="cat.name" />
    </div>
    -->
    <div class="card" style="width: 18rem">
      <img src="#" class="card-img-top" alt="cat.name" />
      <div class="card-body">
        <h5 class="card-title">{{ cat.name }}</h5>
        <a href="#" class="card-text text-center">Go somewhere</a>
      </div>
    </div>
    <!-- //TODO: añadir link a cada gato en card y en href -->
  </div>
</template>

<script>
export default {
  props: ["cats"],
};
</script>

<style>
</style>