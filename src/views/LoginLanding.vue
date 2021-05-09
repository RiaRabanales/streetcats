<template>
  <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 d-flex flex-column">
    <!--//TODO literales-->
    <h3>¡Hola, {{ user.displayName }}!</h3>
    <!--//TODO todo lo que puedes hacer completar -->
    <p class="pb-0 mb-0">Como colaborador de Streetcats Artà ya puedes realizar todas las operaciones que quieras en nuestra aplicación: consultar y descargar documentos, añadir gatos a nuestra página, publicar noticias en el tablón de anuncios...</p>
    <img src="@/assets/img/cat00.png" alt="Login Cats!" class="pt-0 mt-0 col-10 col-md-8 align-self-center" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'; 

export default {
  setup() {
    return { 
      user: computed(() => useStore().state.user), 
      logged: computed(() => useStore().state.logged)
    };
  }
};
</script>

<style>
</style>