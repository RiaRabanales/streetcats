<template>
  
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
/* quitar la flecha del select */
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