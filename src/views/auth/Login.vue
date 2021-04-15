<template>
  <!-- //TODO multilenguaje -->
  <!-- //TODO validar y confirmar contraseña -->
  <h2 class="text-center">Login</h2>
  <form class="loginForm p-3">
    <div class="mb-3">
      <label for="email" class="form-label">{{ $t("contact.email") }}:</label>
      <input type="email" class="form-control" name="email" required />
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Contraseña:</label>
      <input type="password" class="form-control" name="password" required />
    </div>

    <div class="text-center">
      <button type="submit" class="btn btn-primary text-center">Log in</button>
    </div>
  </form>
</template>

<script>
export default {
  //TODO
};
</script>

<style>
</style>