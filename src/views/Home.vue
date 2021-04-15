<template>
  <ion-page>
    <ion-content>
      <div>
        <h2>{{ $t("home.title") }}</h2>
        <div class="home">
          <p>{{ $t("home.content") }}</p>
          <p>{{ $t("home.call") }}</p>
        </div>

        <div class="patrocinadores">
          <p>{{ $t('home.sponsors') }}:</p>
            <p @click="goTo('https://www.tiergesundheitsberatung.org/')">
              <ion-icon :icon="icons.paw" />
              Tierschutz- und Tiergesundheitsberatung Anja Külkens
            </p>
            <p @click="goTo('https://www.roxybikemallorca.com/')">
              <ion-icon :icon="icons.bicycle" />
              Roxybike Mallorca
            </p>
            <p @click="goTo('https://www.linkedin.com/in/maria-r-gonz%C3%A1lez-555204205/')">
              <ion-icon :icon="icons.ribbon" />
              WebApp by Maria R. Gonzalez
            </p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonIcon } from "@ionic/vue";
import { defineComponent, ref } from "vue";
import Footer from "./components/Footer.vue";
import { paw, bicycle, ribbon } from 'ionicons/icons';

export default defineComponent({
  name: "Home",
  components: { IonPage, IonContent, IonIcon, Footer },
  setup() {
    const icons = ref({
      paw: paw,
      bicycle: bicycle,
      ribbon: ribbon
    })

    return { icons }
  }
});
</script>

<style>
</style>
