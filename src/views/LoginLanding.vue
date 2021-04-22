<template>
  <div class="col-12 col-md-11 mt-1 mt-md-2 mt-lg-3 p-md-1">
    <!--//TODO literales-->
    <h3>Hola, {{ user.displayName }}</h3>
    <!--//TODO revisar x q no me está haciendo los cambios-->
    <!--//TODO todo lo que puedes hacer -->
    <p>//TODO blablahblah</p>
  </div>
</template>

<script>
import getUser from "@/utils/auth/getUser"

export default {
  setup() {
    const user = getUser();

    return { user };
  }
};
</script>

<style>
</style>