<template>
  <ion-page>
    <ion-content>
      <h2 class="text-center">{{ $t("contact.title") }}</h2>
      <component :is="formComponent" @sentMessage="sentMessage" />
    </ion-content>
  </ion-page>
</template>

<script>
import Form from "./components/contact/Form.vue";
import Success from "./components/contact/Success.vue";
import { computed, ref } from 'vue';
import { IonPage, IonContent } from "@ionic/vue";

export default {
  components: { Form, Success, IonPage, IonContent },
  setup() {
    const sentForm = ref(false);

    const sentMessage = () => {
      sentForm.value = true
    }

    const formComponent = computed(() => {
      //combino computed con componentes dinámicos https://www.telerik.com/blogs/dynamic-components-vue-component
      if (sentForm.value) {
        return Success  //así devuelvo un componente u otro según si he enviado mensaje antes
      } else {
        return Form
      }
    })

    return { sentMessage, formComponent };
  },
};
</script>

<style>
</style>