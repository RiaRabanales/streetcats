<template>
  <!-- ver: https://vue-i18n.intlify.dev/guide/essentials/scope.html#global-scope-2 //TODO  -->

  <div id="localeDiv">
      <ion-icon :icon="icons.earth" />
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
  </div>
</template>

<script>
import { IonIcon } from '@ionic/vue';
import { earth } from 'ionicons/icons';
import { ref } from 'vue';
//TODO para ver que devuelva iconos con bordes

export default {
  components: { IonIcon },
  setup() {
    const icons = ref({
      earth: earth
    })

    return {
      icons
    }
  }
};
</script>

<style scoped>
#localeDiv {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

/* Para quitar la flecha del select; scoped porque sólo en este bloque */
#localeDiv select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  padding: 0.4rem;
}
#localeDiv select::-ms-expand {
  display: none;
}
#localeDiv select:focus {
  outline: none;
}
</style>