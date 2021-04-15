<template>
  <ion-app>
    <IonSplitPane content-id="main">
      <Menu />
      <ion-router-outlet id="main"></ion-router-outlet>
    </IonSplitPane>
    <Footer />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from "./views/components/Menu.vue"
import Footer from "./views/components/Footer.vue"

export default defineComponent({
  name: 'App',
  components: { IonApp, IonRouterOutlet, IonSplitPane, Menu, Footer}
});
</script>

<style>
</style>
