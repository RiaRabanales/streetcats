<template>
  <ion-header class="ion-no-border">
    <ion-content>
      <LocaleSelector />
      Aquí va el header con sus imágenes
    </ion-content>
    <ion-toolbar>
      <ion-title>Streetcats Artà</ion-title>
    </ion-toolbar>
  </ion-header>

</template>

<script>
/*
import Navbar from "./Navbar.vue";
import LocaleSelector from "./LocaleSelector.vue";

export default {
  components: { Navbar, LocaleSelector },
};
*/
import LocaleSelector from "./LocaleSelector.vue";
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';


export default {
  components: { LocaleSelector, IonContent, IonHeader, IonTitle, IonToolbar }
};
</script>


<style>
.cabecera {
  min-height: 20vh;
}
</style>