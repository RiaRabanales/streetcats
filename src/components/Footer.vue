<template>
  <footer>
    <ion-grid>
      <ion-row>
        <ion-col>
          <div>
            <p>{{ $t('footer.sponsors') }}:</p>
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
        </ion-col>
        <ion-col>
          <div>
            <p class="fw-bolder mb-0 pb-0">{{ $t('footer.findus') }}:</p>
            <p @click="goTo('https://www.facebook.com/Streetcats-Arta-Asociaci%C3%B3n-Animalistas-1414576338758248/')">
              <ion-icon :icon="icons.facebookLogo" />
              facebook
            </p>
            <p>
              <ion-icon :icon="icons.twitterLogo" />
              twitter
            </p>
            <p>
              <ion-icon :icon="icons.instagramLogo" />
              instagram
            </p>
          </div>
        </ion-col>
        <ion-col>
          <div>
            <p>{{ $t('footer.cookies') }}</p>
            <p>Maria R. Gonzalez &#169;2021</p>
            <p @click="goTo('https://github.com/RiaRabanales/streetcats')">
              <ion-icon :icon="icons.githubLogo" />
              github
            </p>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </footer>
</template>

<script>
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
import { IonIcon } from '@ionic/vue';
import { paw, bicycle, ribbon } from 'ionicons/icons';
//TODO falta ver cómo hago los imports de los iconos con los logos
import { ref } from 'vue';

export default {
  components: { IonGrid, IonRow, IonCol, IonIcon },

  setup() {
    const icons = ref({
      paw: paw,
      bicycle: bicycle,
      ribbon: ribbon
    })

    //router sólo hace routing en mi app; para links al exterior uso vanilla js; //TODO ver con ionic
    const goTo = (url) => {
      location.replace(url);
    }

    return { icons, goTo }
  },
};
</script>
