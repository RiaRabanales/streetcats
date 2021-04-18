<template>
  <h2 class="text-center text-primary">
      <AlertOctagonIcon />
      404
    </h2>
  <p class="text-center text-dark">{{ $t("nav.404") }}</p>
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
