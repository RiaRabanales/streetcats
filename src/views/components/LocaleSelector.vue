<template>
  <!-- ver: https://vue-i18n.intlify.dev/guide/essentials/scope.html#global-scope-2 //TODO  
  /* Para cambiar el background del select; //TODO ver */-->
  
  <div class="locale-changer mt-2 me-2 me-md-3 text-dark">
    <GlobeIcon class="me-1" />
    <select v-model="$i18n.locale" class="bg-light border-0">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<script>
import { GlobeIcon } from "@zhuowenli/vue-feather-icons";

export default {
  components: { GlobeIcon },
};
</script>

<style scoped>
/* Para quitar la flecha del select; scoped porque sólo en este bloque */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select::-ms-expand {
  display: none;
}

select:focus {
  outline: none;
}

</style>