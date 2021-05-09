<template>
  <div class="mt-1 mt-md-2 mt-lg-3 p-md-1">
    <h3 class="text-center text-primary">
      <AlertOctagonIcon />
      404
    </h3>
    <p class="text-center text-dark">{{ $t("nav.404") }}</p>
  </div>
</template>

<script>
import { AlertOctagonIcon } from "@zhuowenli/vue-feather-icons";

export default {
  components: { AlertOctagonIcon }
};
</script>

<style scoped>
svg {
  height: 30px;
  width: 30px;
}
</style>
