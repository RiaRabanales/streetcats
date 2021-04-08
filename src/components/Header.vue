<template>
  <div class="d-flex flex-column p-0 m-0 bg-white">
    <LocaleSelector />
    <div class="cabecera top-fixed align-self-center">
      Aquí va el header con sus imágenes
    </div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import LocaleSelector from "./LocaleSelector.vue";

export default {
  components: { Navbar, LocaleSelector },
};
</script>


<style>
.cabecera {
  min-height: 20vh;
}
</style>