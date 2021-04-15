<template>
  <ion-footer>
    <ion-grid>
      <ion-row>
        <ion-col>
          <p class="fw-bolder mb-0 pb-0">
            {{ $t('footer.findus') }}: 
            <ion-icon :icon="icons.ribbon" /> facebook
            <ion-icon :icon="icons.ribbon" /> instagram
          </p>
        </ion-col>
        <ion-col>
          <p>
            <ion-icon :icon="icons.ribbon" />
            Maria R. Gonzalez &#169;2021
          </p>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-footer>
</template>

<script>
import { IonFooter, IonGrid, IonRow, IonCol, IonIcon } from "@ionic/vue";
import { ribbon } from 'ionicons/icons';
//TODO falta ver cómo hago los imports de los iconos con los logos
import { ref } from 'vue';

export default {
  components: { IonFooter, IonGrid, IonRow, IonCol, IonIcon },

  setup() {
    const icons = ref({
      ribbon: ribbon
    })

    //router sólo hace routing en mi app; para links al exterior uso vanilla js; //TODO ver con ionic
    const goTo = (url) => {
      location.replace(url);
    }

    return { icons, goTo }
  },
};
</script>
