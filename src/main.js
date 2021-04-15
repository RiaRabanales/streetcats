import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue';

import App from './App.vue'
import router from './router'

import i18n from './i18n'

/* Core CSS para Ionic */
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Utilidades opcionales para Ionic */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Mi CSS propio */
import '@/theme/custom.css';

const app = createApp(App)
  .use(IonicVue)
  .use(i18n)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
