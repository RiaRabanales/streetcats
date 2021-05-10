<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3 class="text-center text-primary">
        <AlertOctagonIcon />
        404
      </h3>
      <p class="text-center text-dark">{{ $t("nav.404") }}</p>
    </div>
    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import { AlertOctagonIcon } from "@zhuowenli/vue-feather-icons";
import SidePortraits from "./components/SidePortraits.vue";

export default {
  components: { AlertOctagonIcon, SidePortraits }
};
</script>

<style scoped>
svg {
  height: 30px;
  width: 30px;
}
</style>
