<template>
  <h2 class="text-center">Sobre Nosotros</h2>
  <div class="home p-3">
    <p class="content text-center">{{ $t("home.content") }}</p>
    <p class="call text-center text-uppercase fw-bolder pb-lg-3">{{ $t("home.call") }}</p>

    <div class="border-top border-3 border-primary my-3"></div>

    <div class="m-3 p-1 pt-lg-3">
      <p class="fw-bolder text-center">{{ $t('home.sponsors') }}:</p>
      <div class="d-flex justify-content-around flex-wrap">
        <p @click="goTo('https://www.roxybikemallorca.com/')" class="p-0 m-0 mt-1 mx-2" role="button">
          <SmileIcon />
          Roxybike Mallorca
        </p>
        <p @click="goTo('https://www.tiergesundheitsberatung.org/')" class="p-0 m-0 mt-1 mx-2" role="button">
          <HeartIcon />
          Tierschutz- und Tiergesundheitsberatung Anja Külkens
        </p>
        <p @click="goTo('https://www.linkedin.com/in/maria-r-gonz%C3%A1lez-555204205/')" class="p-0 m-0 mt-1 mx-2" role="button">
          <StarIcon />
          Maria R. Gonzalez Webapps
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { HeartIcon, SmileIcon, StarIcon } from "@zhuowenli/vue-feather-icons";

export default {
  components: { HeartIcon, SmileIcon, StarIcon },

  setup() {

    //router sólo hace routing en mi app; para links al exterior uso vanilla js
    const goTo = (url) => {
      location.replace(url);
    }

    return { goTo }
  }
};
</script>
