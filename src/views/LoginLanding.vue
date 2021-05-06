<template>
  <div class="col-12 col-md-11 mt-1 mt-md-2 mt-lg-3 p-md-1">
    <!--//TODO literales-->
    <h3>Hola, {{ user.displayName }}</h3>
    <!--//TODO revisar x q no me está haciendo los cambios-->
    <!--//TODO todo lo que puedes hacer -->
    <p>//TODO</p>
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