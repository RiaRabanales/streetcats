<template> 
  <div class="m-0 p-3 bg-light border-bottom border-3 border-primary d-flex justify-content-between">
    <p class="d-none d-sm-block h3 ms-3 ps-md-3 text-dark">
      Streetcats Artà
    </p>
    <div class="d-flex p-0 m-0 justify-content-end">
      <LocaleSelector />
      <div v-if="user">
        <button 
          type="button"
          class="btn btn-outline-dark border border-dark border-2 rounded-pill me-1 me-md-2 me-lg-3"
          @click="handleLogout"
        >
          Logout
        </button> <!--//TODO literales -->
      </div>
      <div v-else>
        <button
          type="button"
          class="btn btn-outline-dark border border-dark border-2 rounded-pill me-1 me-md-2 me-lg-3"
          @click="$router.push('loginlanding')"
        >
          {{ $t('nav.login') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useLogout from "@/utils/auth/useLogout";
import getUser from "@/utils/auth/getUser";
import LocaleSelector from "./LocaleSelector.vue";

export default {
  components: { LocaleSelector },
  setup() {
    const { user } = getUser(); //para mostrar unas cosas u otras según si está logeado o no
    const { logout } = useLogout();
    const router = useRouter();

    const handleLogout = async () => {
      await logout();
      router.push({ name: "Login" });
    };

    return { handleLogout, user, router };
  },
};
</script>


<style>
</style>