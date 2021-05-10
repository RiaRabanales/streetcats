<template>
  <div class="p-0 m-0 d-flex justify-content-between">
  <!-- //TODO literales multilenguaje -->
  <!-- //TODO validar y confirmar contraseña -->
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3>Registro</h3>
      <form @submit.prevent="register" class="registerForm p-3">
        <div class="mb-3">
          <label for="displayName" class="form-label"
            >{{ $t("contact.name") }}:</label
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
          <label for="email" class="form-label">{{ $t("contact.email") }}:</label>
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
            <label for="password" class="form-label">Contraseña:</label>
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
              >Confirma la constraseña:</label
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
            <!-- //TODO faltan errores de auth -->
          </p>
        </div>

        <div class="text-center">
          <div>
            <button
              type="submit"
              class="btn btn-primary border border-primary border-2 rounded-pill text-center"
            >
              Regístrate
            </button>
            <!-- //TODO replantearme pendings -->
          </div>
          <!--//TODO literales multilenguaje-->
          <router-link
            class="mt-2 text-dark small"
            role="button"
            :to="{ name: 'Login' }"
          >
            ¿Ya tienes cuenta de socio?
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
          const res = await projectAuth.createUserWithEmailAndPassword(
            email.value,
            password.value
          );
          //TODO ver por q no me funciona; creo q si me lo pilla pero no me lo engancha en la store a tiempo
          await res.user.updateProfile({ displayName });
        } catch (err) {
          console.log(err.message);
          error.value = err.message;
        }
        router.push({ name: "LoginLanding" });
      } else {
        error.value = "Las contraseñas no coinciden."; //TODO literales
      }
    };

    //TODO falta adaptar a sendVerificationEmail
    //TODO falta password reset mail https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email

    return { displayName, email, password, password2, error, register };
  },
};
</script>

<style>
</style>