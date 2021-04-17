<template>
  <div class="d-flex p-0 m-0 justify-content-between">
    <p class="d-none d-md-block nav-item h3 me-2 text-dark">
      Streetcats Artà
    </p>
    <div class="d-flex p-0 m-0 justify-content-end">
    <LocaleSelector />
      <button
        type="button"
        class="btn btn-outline-dark border border-dark border-2 rounded-pill"
        @click="$router.push('login')"
      >
        {{ $t('nav.login') }}
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import LocaleSelector from "./LocaleSelector.vue";

export default {
  components: { LocaleSelector },
  setup() {
    const router = useRouter();

    return { router };
  },
};
</script>


<style>
</style>