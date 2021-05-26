<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="m-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3 class="px-2 px-md-3">{{ $t("nav.about") }}</h3>
      <div class="home p-3">
        <p class="content">{{ $t("home.content") }}</p>
        <p class="call text-uppercase fw-bolder pb-lg-3">{{ $t("home.call") }}</p>

        <div class="border-top border-3 border-primary my-3"></div>

        <div class="m-2 mt-3 p-1 pt-lg-3">
          <p class="fw-bolder">{{ $t('home.sponsors') }}:</p>
          <div class="mt-2 d-flex flex-column justify-content-around flex-wrap">
            <p @click="goTo('https://www.roxybikemallorca.com/')" class="p-0 m-0 mt-1 mx-2" role="button">
              <SmileIcon class="mx-2 mx-lg-3" />
              <span class="fw-bolder">Roxybike</span> Mallorca
            </p>
            <p @click="goTo('https://www.tiergesundheitsberatung.org/')" class="p-0 m-0 mt-1 mx-2" role="button">
              <HeartIcon class="mx-2 mx-lg-3" />
              Tierschutz- und Tiergesundheitsberatung <span class="fw-bolder">Anja Külkens</span>
            </p>
            <p @click="goTo('https://www.linkedin.com/in/maria-r-gonz%C3%A1lez-555204205/')" class="p-0 m-0 mt-1 mx-2" role="button">
              <StarIcon class="mx-2 mx-lg-3" />
              <span class="fw-bolder">Ria R. Gonzalez</span> Webapps
            </p>
            <p @click="goTo('https://www.freepik.com/vectors/frame')" class="p-0 m-0 mt-1 mx-2" role="button">
              <LayersIcon class="mx-2 mx-lg-3" />
              Vectors by <span class="fw-bolder">Starline</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import { HeartIcon, SmileIcon, StarIcon, LayersIcon } from "@zhuowenli/vue-feather-icons";
import SidePortraits from "./components/SidePortraits.vue";

export default {
  components: { HeartIcon, SmileIcon, StarIcon, LayersIcon, SidePortraits },

  setup() {

    //router sólo hace routing en mi app; para links al exterior uso vanilla js
    const goTo = (url) => {
      location.replace(url);
    }

    return { goTo }
  }
};
</script>

<style scoped>
.content {
  text-align: justify;
}
.call {
  text-align: center;
}
</style>