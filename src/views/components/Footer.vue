<template>
  <div class="app-footer bg-primary pt-3 px-2 px-md-3 text-white d-flex justify-content-around align-items-center">  

    <p>
      <span class="fw-bolder me-1">{{ $t('footer.findus') }} </span>
      <span @click="goTo('https://www.facebook.com/Streetcats-Arta-Asociaci%C3%B3n-Animalistas-1414576338758248/')" role="button">
      <FacebookIcon /> facebook
      </span>
      <span @click="goTo('https://www.instagram.com/')" role="button">
      <InstagramIcon /> instagram
      </span>
    </p>

    <p role="button">{{ $t('footer.cookies') }}</p>

    <p @click="goTo('https://github.com/RiaRabanales/streetcats')" role="button">
      &#169;2021
      <span class="fw-bolder"> Ria R. Gonzalez </span>
      <GithubIcon />
    </p>

  </div>
</template>

<script>
import { FacebookIcon, InstagramIcon, GithubIcon } from "@zhuowenli/vue-feather-icons";

export default {
  components: { FacebookIcon, InstagramIcon, GithubIcon },

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
.app-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>