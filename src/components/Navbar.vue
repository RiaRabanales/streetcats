<template>
  <div class="py-2 px-3 border-top border-5 border-primary d-flex justify-content-between">
    <div>
      <router-link :to="{ name: 'Home' }">Streetcats Artà</router-link>
      <router-link :to="{ name: 'Donaciones' }">Ayuda</router-link>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-outline-dark border border-dark border-2 rounded-pill"
        @click="$router.push('login')"
      >
        Área de Colaboradores
      </button>
    </div>
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