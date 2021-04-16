<template>
  <ion-menu content-id="main">
    <ion-content>
      <ion-list v-for="(p, i) in appPages" :key="i">
        <ion-item
          router-direction="root"
          :router-link="p.url"
          lines="none"
          detail="false"
          class="hydrated"
        >
          <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
          <ion-label>{{ p.title }}</ion-label>
        </ion-item>
        <!-- <ion-item>{{ $t('nav.contact') }}</ion-item> -->
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
  IonContent,
  IonTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import {
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
} from "ionicons/icons";

export default {
  components: {
    IonContent,
    IonTitle,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu
  },
  setup() {
    const selectedIndex = ref(0);
    const appPages = [
      {
        title: "About us",  //TODO ver cómo hago para traducciones en menú
        url: "/home",
        iosIcon: heartOutline,
        mdIcon: heartSharp,
      },
      {
        title: "Help",
        url: "/help",
        iosIcon: mailOutline,
        mdIcon: mailSharp,
      },
      {
        title: "Contact us",
        url: "/contact",
        iosIcon: paperPlaneOutline,
        mdIcon: paperPlaneSharp,
      },
    ];

    return { appPages };
  },
};
</script>

<style>
</style>