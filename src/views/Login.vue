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
import useLogin from '@/utils/firebase/useLogin'
import { ref } from 'vue';

export default {
  //TODO
  setup() {
    const { error, login, pending } = useLogin();

    const email = ref('');
    const password = ref('');

    const handleLogin = async () => {
      const res = await login(email.value, password.value);
    };

    return { email, password, handleLogin, error, pending }
  }
};
</script>

<style>
</style>