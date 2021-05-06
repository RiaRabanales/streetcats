<template>
  <div
    class="m-0 p-3 bg-light border-bottom border-3 border-primary d-flex justify-content-between"
  >
    <p class="d-none d-sm-block h3 ms-3 ps-md-3 text-dark">Streetcats Artà</p>
    <div class="d-flex p-0 m-0 justify-content-end">
      <LocaleSelector />
      <div v-if="logged">
        <button
          type="button"
          class="btn btn-outline-dark border border-dark border-2 rounded-pill me-1 me-md-2 me-lg-3"
          @click="handleLogout"
        >
          Logout
        </button>
        <!--//TODO literales -->
      </div>
      <div v-else>
        <button
          type="button"
          class="btn btn-outline-dark border border-dark border-2 rounded-pill me-1 me-md-2 me-lg-3"
          @click="$router.push('loginlanding')"
        >
          {{ $t("nav.login") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { projectAuth } from '@/config/firebase';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import LocaleSelector from './LocaleSelector.vue';

export default {
  components: { LocaleSelector },
  setup() {
    const store = useStore();
    const error = ref(null);
    const router = useRouter();

    const handleLogout = async () => {
        projectAuth.signOut()
        .catch(err => {
          console.log(err.message);
          error.value = err.message;
        });
        router.push({ name: 'Home' });
    };

    return { 
      handleLogout, 
      router,
      logged: computed(() => store.state.logged)
    };
  },
};
</script>


<style>
</style>