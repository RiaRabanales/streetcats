import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import 'bootstrap';
import '@/scss/custom.scss';

//createApp(App).use(i18n).use(router).mount('#app')

//Aquí creo la aplicación y la monto en el DOM cuando ya tengo conexión a firebase
import { projectAuth } from './config/firebase';

let app;
projectAuth.onAuthStateChanged(user => {
    if (!app) {
        app = createApp(App).use(store).use(i18n).use(router).mount('#app');
    }
    store.dispatch('handleUser', user);
    //con esto actualizo mi usuario en el store cuando hay cambios
});