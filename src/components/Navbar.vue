<template>
  <div class="border-top border-5 border-primary">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link h3" :to="{ name: 'Home' }"
                >Streetcats Artà</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Donaciones' }"
                >ayuda</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Contacto' }"
                >contacto</router-link
              >
            </li>
          </ul>
        </div>
        <button
          type="button"
          class="btn btn-outline-dark border border-dark border-2 rounded-pill"
          @click="$router.push('login')"
        >
          Área de Colaboradores
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    return { router };
  },
};
</script>

<style scoped>
</style>