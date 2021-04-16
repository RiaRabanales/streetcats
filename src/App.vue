<template>
  <ion-app>
    <Header />
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
import Header from "./views/components/Header.vue"
import Menu from "./views/components/Menu.vue"
import Footer from "./views/components/Footer.vue"

export default defineComponent({
  name: 'App',
  components: { IonApp, IonRouterOutlet, IonSplitPane, Header, Menu, Footer}
});
</script>

<style>
ion-split-pane {
  --border: none;
  --side-max-width: 20vw;
}
</style>
