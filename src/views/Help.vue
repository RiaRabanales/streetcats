<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3>{{ $t("nav.help") }}</h3>
    </div>
    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import SidePortraits from "./components/SidePortraits.vue";

export default {
  components: { SidePortraits }
  //ver https://www.youtube.com/watch?v=xTbow3FkF0g
};
</script>

<style>
</style>