<template>
  <div class="col-12 col-md-11 mt-1 mt-md-2 mt-lg-3 p-md-1">
    <h3>Login</h3>
    <form class="loginForm p-3" @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="email" class="form-label">{{ $t("contact.email") }}:</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          name="email"
          required
        />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Contraseña:</label>
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
          {{ error }}
        </p>
      </div>

      <div class="text-center">
        <div>
          <button
            type="submit"
            class="btn btn-primary border border-primary border-2 rounded-pill text-center"
          >
            Login
          </button>
        </div>
        <!--//TODO literales multilenguaje-->
        <router-link
          class="mt-2 text-dark small"
          role="button"
          :to="{ name: 'Register' }"
        >
          ¿No tienes cuenta de socio?
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { projectAuth } from "@/config/firebase";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const router = useRouter();

    const email = ref("");
    const password = ref("");
    const error = ref("");

    const handleLogin = async () => {
      error.value = "";
      await projectAuth
        .signInWithEmailAndPassword(email.value, password.value)
        .catch((err) => {
          console.log(err.message);
          error.value = err.message;
          //TODO mostrar el error en pantalla
        });
      router.push({ name: "LoginLanding" });
    };

    return { email, password, handleLogin, error };
  },
};
</script>

<style>
</style>