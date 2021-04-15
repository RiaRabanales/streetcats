<template>
  <ion-page>
    <Header />
    <ion-content>
      <div class="main">
        <h2 class="text-center">{{ $t("home.title") }}</h2>
        <div class="home p-3">
          <p class="content text-center">{{ $t("home.content") }}</p>
          <p class="call text-center text-uppercase fw-bolder">
            {{ $t("home.call") }}
          </p>
        </div>
      </div>
      <Footer />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "Home",
  components: { IonPage, IonContent, Header, Footer },
});
</script>

<style>
</style>
