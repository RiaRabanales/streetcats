<template>
  <div class="my-2 col-sm-10 col-md-8 my-2 my-md-3 align-self-center text-dark small d-flex justify-content-between">
    <div class="d-flex flex-column">
      <p class="fw-bolder mb-0 pb-0">{{ $t('footer.sponsors') }}:</p>
      <p @click="goTo('https://www.tiergesundheitsberatung.org/')" class="p-0 m-0 mt-1" role="button">
        <HeartIcon />
        Tierschutz- und Tiergesundheitsberatung Anja Külkens
      </p>
      <p @click="goTo('https://www.roxybikemallorca.com/')" class="p-0 m-0 mt-1" role="button">
        <SmileIcon />
        Roxybike Mallorca
      </p>
      <p @click="goTo('https://www.linkedin.com/in/maria-r-gonz%C3%A1lez-555204205/')" class="p-0 m-0 mt-1" role="button">
        <StarIcon />
        WebApp by Maria R. Gonzalez
      </p>
    </div>
    
    <div class="d-flex flex-column">
      <p class="fw-bolder mb-0 pb-0">{{ $t('footer.findus') }}:</p>
      <p @click="goTo('https://www.facebook.com/Streetcats-Arta-Asociaci%C3%B3n-Animalistas-1414576338758248/')" class="p-0 m-0 mt-1" role="button">
        <FacebookIcon />
        facebook
      </p>
      <p class="p-0 m-0 mt-1" role="button">
        <TwitterIcon />
        twitter
      </p>
      <p class="p-0 m-0 mt-1" role="button">
        <InstagramIcon />
        instagram
      </p>
    </div>

    <div class="d-flex flex-column">
      <p class="fw-bolder" role="button">{{ $t('footer.cookies') }}</p>
      <p class="fw-bolder mb-0 pb-0">Maria R. Gonzalez &#169;2021</p>
      <p @click="goTo('https://github.com/RiaRabanales/streetcats')" class="p-0 m-0 mt-1" role="button">
        <GithubIcon />
        github
      </p>
    </div>
  </div>
</template>

<script>
import { HeartIcon, SmileIcon, StarIcon, FacebookIcon, InstagramIcon, TwitterIcon, GithubIcon } from "@zhuowenli/vue-feather-icons";

export default {
  components: { HeartIcon, SmileIcon, StarIcon, FacebookIcon, InstagramIcon, TwitterIcon, GithubIcon },

  setup() {

    //router sólo hace routing en mi app; para links al exterior uso vanilla js
    const goTo = (url) => {
      location.replace(url);
    }

    return { goTo }
  }
};
</script>
