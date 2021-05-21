<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3>{{ $t("auth.login") }}</h3>
      <form class="loginForm p-3" @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">{{ $t("auth.email") }}:</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            name="email"
            required
          /> 
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">{{ $t("auth.name") }}:</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            name="password"
            required
          />
        </div>

        <div class="mb-3 text-warning">
          <p v-if="error">
            <span v-if="error == 'nouser'">{{ $t("error.nouser") }}</span>
            <span v-if="error == 'nopassword'">{{ $t("error.nopassword") }}</span>
            <span v-if="error == 'general'">{{ $t("error.general") }}</span>    <!-- //TODO revisar -->
          </p>
        </div>

        <div class="text-center">
          <div>
            <button
              type="submit"
              class="btn btn-primary border border-primary border-2 rounded-pill text-center"
            >
              {{ $t("auth.enter") }}
            </button>
          </div>
          
          <router-link class="mt-2 text-dark small" role="button" :to="{ name: 'Register' }">
            {{ $t("auth.nologin") }}
          </router-link>
        </div>
      </form>
    </div>

    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import { projectAuth } from "@/config/firebase";
import { useRouter } from "vue-router";
import { ref } from "vue";
import SidePortraits from "./components/SidePortraits.vue";

export default {
  components: { SidePortraits },
  setup() {
    const router = useRouter();

    const email = ref("");
    const password = ref("");
    const error = ref("");

    const handleLogin = async () => {
      error.value = "";
      let user = await projectAuth.signInWithEmailAndPassword(email.value, password.value)
        .catch((err) => {
          console.log(err.message);
          if (err.message = "There is no user record corresponding to this identifier. The user may have been deleted.") {
            error.value = "nouser";
          } else if (err.message = "The password is invalid or the user does not have a password.") {
            error.value = "nopassword";
          } else {
            error.value = "general";
          }
        });
      router.push({ name: "LoginLanding" });
    };

    return { email, password, handleLogin, error };
  },
};
</script>

<style>
</style>