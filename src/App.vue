<template>
  <div class="base container-fluid bg-white p-0 d-flex flex-column">
    <Header />
    <div class="flex-grow-1 d-flex justify-content-between">
      <Menu />
      <router-view v-slot="{ Component }" class="p-2 p-md-3 flex-grow-1">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
      <SidePortraits class="d-none d-md-block col-2 p1 py-md-2 py-lg-3" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from "./views/components/Menu.vue";
import Header from "./views/components/Header.vue";
import Footer from "./views/components/Footer.vue";
import SidePortraits from "./views/components/SidePortraits.vue";

export default {
  components: { Menu, Header, Footer, SidePortraits },
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
