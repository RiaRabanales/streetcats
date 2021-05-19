<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <!-- //TODO validar y confirmar contraseña -->
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3>{{ $t("auth.register") }}</h3>
      <form @submit.prevent="register" class="registerForm p-3">
        <div class="mb-3">
          <label for="displayName" class="form-label"
            >{{ $t("auth.name") }}:</label
          >
          <input
            v-model="displayName"
            type="text"
            class="form-control"
            name="displayName"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label"
            >{{ $t("auth.email") }}:</label
          >
          <input
            v-model="email"
            type="email"
            class="form-control"
            name="email"
            required
          />
        </div>
        <div class="mb-3 d-flex">
          <div class="col-6 pe-1">
            <label for="password" class="form-label">{{ $t("auth.password") }}:</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              name="password"
              required
            />
          </div>
          <div class="col-6">
            <label for="password2" class="form-label"
              >{{ $t("auth.password2") }}:</label
            >
            <input
              v-model="password2"
              type="password"
              class="form-control"
              name="password2"
            />
          </div>
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
              {{ $t("auth.doregister") }}
            </button>
          </div>
          <router-link
            class="mt-2 text-dark small"
            role="button"
            :to="{ name: 'Login' }"
          >
            {{ $t("auth.noregister") }}
          </router-link>
        </div>
      </form>
    </div>
    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import { projectAuth } from "@/config/firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { store } from '@/store/index'
import SidePortraits from "./components/SidePortraits.vue";

export default {
  components: { SidePortraits },
  setup() {
    const router = useRouter();

    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const password2 = ref("");
    //TODO documentar q no puedo añadir phone xq no existe en auth

    const error = ref("");

    const register = async () => {
      if (password.value == password2.value) {
        error.value = "";
        try {
          const userCredentials = await projectAuth.createUserWithEmailAndPassword(email.value, password.value);
          const user = userCredentials.user;
          await user.updateProfile({ displayName: displayName.value });
          store.commit({
            type: "setDisplayName",
            data: displayName.value,
          });
        } catch (err) {
          console.log(err.message);
          error.value = err.message;
        };
        router.push({ name: "LoginLanding" });
      } else {
        error.value = "Las contraseñas no coinciden."; //TODO literales
      }
    };

    //TODO falta adaptar a sendVerificationEmail y falta password reset mail https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email

    return { displayName, email, password, password2, error, register };
  },
};
</script>

<style>
</style>