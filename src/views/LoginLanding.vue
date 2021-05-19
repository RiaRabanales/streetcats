<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 d-flex flex-column col-12 col-md-9 col-lg-10">
      <h3>{{ $t("auth.greeting") }}, {{ user.displayName }}!</h3>
      <p class="pb-0 mb-0">{{ $t("auth.landing") }}</p>
      <img src="@/assets/img/cat00.png" alt="Login Cats!" class="p-1 pt-lg-2 col-10 col-md-8 align-self-center" />
    </div>
    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'; 
import SidePortraits from "./components/SidePortraits.vue";

export default {
  components: { SidePortraits },
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