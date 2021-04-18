<template>
  <h2 class="text-center">Login</h2>
  <form class="loginForm p-3" @submit.prevent="handleLogin">
    <div class="mb-3">
      <label for="email" class="form-label">{{ $t("contact.email") }}:</label>
      <input type="email" v-model="email" class="form-control" name="email" required />
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Contraseña:</label>
      <input type="password" v-model="password" class="form-control" name="password" required />
    </div>

    <div v-if="error" class="mb-3 text-warning"> <!-- //TODO revisar funcionamiento -->
      {{ error }}
    </div>

    <div class="text-center">
      <button 
        v-if="!pending" 
        type="submit" 
        class="btn btn-primary border border-primary border-2 rounded-pill text-center"
      >Login</button>
      <button 
        v-else disabled
        class="btn btn-primary border border-primary border-2 rounded-pill text-center"
      >loading...</button> <!--//TODO literales multilenguaje-->
    </div>
  </form>
</template>

<script>
import useLogin from '@/utils/auth/useLogin'
import { useRouter } from "vue-router";
import { ref } from 'vue';

export default {
  //TODO
  setup() {
    const { login, pending } = useLogin();
    const router = useRouter();

    const email = ref('');
    const password = ref('');
    const error = ref('');

    const handleLogin = async () => {
      try {
        const res = await login(email.value, password.value);
        router.push({ name: "LoginLanding" });
      } catch(err) {
        pending.value = false;
        //Pueden salir bad requests en la consola y no son un error de mi parte:
        //https://stackoverflow.com/questions/39581590/why-do-i-see-a-400-bad-request-in-my-developer-console-when-sign-in-to-fireb
        if (err.code == "auth/user-not-found") {
          error.value = 'Error en el e-mail de usuario.'; //TODO literales de errores
        } else if (err.code == "auth/wrong-password") {
          error.value = 'Contraseña incorrecta.';
        } else {
          console.log(err.code + '  ' + err.message);
          error.value = 'No se ha podido completar el login.';
        }
      }
    };

    return { email, password, handleLogin, error, pending }
  }
};
</script>

<style>
</style>