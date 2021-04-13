<template>
  <div class="base container-fluid bg-light p-0 d-flex flex-column">
    <Header />
    <div class="bg-white border border-3 border-primary rounded-3 flex-grow-1 col-11 col-md-8 my-2 my-md-3 align-self-center p-3">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, Footer }
};
</script>

<style>
.base {
  min-height: 100vh;
}
</style>
