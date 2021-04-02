<template>
  <div class="container-fluid bg-light p-0">
    <Navbar />
    <div class="principal col-sm-10 col-md-8">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, Footer }
};
</script>

<style>
.principal {
  margin: 0 auto;
}
</style>
