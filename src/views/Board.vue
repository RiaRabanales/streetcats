<template>
  <div class="col-12 col-md-11 mt-1 mt-md-2 mt-lg-3 p-md-1">
    <h3>Tablón de Anuncios</h3> <!-- //TODO literales -->
    <!-- //TODO q solo usuarios puedan postear -->
    <NewPost />
  </div>
</template>

<script>
import NewPost from './components/board/NewPost.vue';

export default {
  components: { NewPost }
};
</script>

<style>
</style>