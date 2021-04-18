<template>
  <h2 class="text-center">{{ $t("contact.title") }}</h2>
  <component :is="formComponent" @sentMessage="sentMessage" />
</template>

<script>
import Form from "./components/contact/Form.vue";
import Success from "./components/contact/Success.vue";
import { computed, ref } from 'vue';

export default {
  components: { Form, Success },
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