<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3 class="px-2 px-md-3">{{ $t("nav.help") }}</h3>
      <div class="p-3">
        <p class="content">{{ $t("home.help") }}</p>
      </div>
      <div class="px-3 d-flex flex-row">
        <div class="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
          <Map />
        </div>
        <div class="col-12 col-md-6 col-lg-7">
          <p class="content">{{ $t("home.morehelp") }}</p>
          <p class="content">{{ $t("home.address") }}</p>
        </div>
      </div>
    </div>
    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import SidePortraits from "./components/SidePortraits.vue";
import Map from "./components/Map.vue";

export default {
  components: { SidePortraits, Map },
  //Cuando llegue el momento de desarrollar esto: ver https://www.youtube.com/watch?v=xTbow3FkF0g
};
</script>

<style scoped>
.content {
  text-align: justify;
}
</style>