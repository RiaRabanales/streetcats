<template>
  <!-- //TODO multilenguaje -->
  <!-- //TODO validar y confirmar contraseña -->
  <h2 class="text-center">Registro</h2>
  <form class="registerForm p-3">
    <div class="mb-3">
      <label for="name" class="form-label">{{ $t("contact.name") }}:</label>
      <input type="text" class="form-control" name="name" required />
    </div>
    <div class="mb-3 d-flex">
      <div class="col-8 pe-1">
        <label for="email" class="form-label">{{ $t("contact.email") }}:</label>
        <input type="email" class="form-control" name="email" required />
      </div>
      <div class="col-4">
        <label for="phone" class="form-label">{{ $t("contact.phone") }}:</label>
        <input type="text" class="form-control" name="phone" />
      </div>
    </div>
    <div class="mb-3 d-flex">
      <div class="col-6 pe-1">
        <label for="password" class="form-label">Contraseña:</label>
        <input type="password" class="form-control" name="password" required />
      </div>
      <div class="col-6">
        <label for="password2" class="form-label"
          >Confirma la constraseña:</label
        >
        <input type="password" class="form-control" name="password2" />
      </div>
    </div>

    <div class="text-center">
      <button type="submit" class="btn btn-primary text-center">Regístrate</button>
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