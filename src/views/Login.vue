<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3 class="px-2 px-md-3">{{ $t("auth.login") }}</h3>
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
          <label for="password" class="form-label">{{ $t("auth.password") }}:</label>
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
            <span v-if="error == 'general'">{{ $t("error.general") }}</span>
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
          
          <router-link class="d-block mt-2 text-dark small" role="button" :to="{ name: 'Register' }" style="text-decoration:none;">
            {{ $t("auth.nologin") }}
          </router-link>

          <router-link class="d-block text-primary mt-2 text-dark small" role="button" :to="{ name: 'Reset' }" style="text-decoration:none;">
            {{ $t("auth.reset") }}
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
          console.log('(Error ' + err.code + ') ' + err.message);
          console.log(err.code)
          if (err.code = "auth/user-not-found") {
            error.value = "nouser";
          } else if (err.code = "auth/wrong-password") {
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