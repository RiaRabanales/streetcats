<template>
  <ion-header class="ion-no-border">
    <ion-toolbar>
      <ion-title>Streetcats Artà</ion-title>
      <LocaleSelector />
      <ion-button shape="round" fill="outline" @click="$router.push('login')">
        <!-- //TODO: ver cómo hago esta llamada al router programática -->
        {{ $t('nav.login') }}
      </ion-button>
    </ion-toolbar>
  </ion-header>

</template>

<script>
import LocaleSelector from "./LocaleSelector.vue";
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

export default {
  components: { LocaleSelector, IonContent, IonHeader, IonTitle, IonToolbar, IonButton }

};
</script>


<style>
</style>