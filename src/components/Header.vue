<template>
  <div class="cabecera bg-white top-fixed">Aquí va el header con sus imágenes</div>
  <Navbar />
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  components: { Navbar },
};
</script>


<style>
.cabecera {
  min-height: 20vh;
}
</style>