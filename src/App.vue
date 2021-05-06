<template>
  <div class="base container-fluid bg-white p-0 d-flex flex-column">
    <Header />
    <div class="flex-grow-1 d-flex justify-content-between">
        <Menu />
        <div class="p-3 flex-grow-1 d-flex justify-content-center align-items-stretch">
          <router-view v-slot="{ Component }">
            <transition name="route" mode="out-in">
              <component :is="Component"></component>
            </transition>
          </router-view>
        </div>
        <div class="d-none d-md-block mx-3 col-1 d-flex flex-column justify-content-start mt-3 pt-md-3">
          <p>Fotos!</p>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from "./views/components/Menu.vue";
import Header from "./views/components/Header.vue";
import Footer from "./views/components/Footer.vue";

export default {
  components: { Menu, Header, Footer }
};
</script>

<style>
.base {
  min-height: 100vh;
}

.add-btn {
  max-width: 200px;
}

/* Transiciones de rutas */
.route-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>
