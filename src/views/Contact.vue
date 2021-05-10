<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3>{{ $t("contact.title") }}</h3>
      <component :is="formComponent" @sentMessage="sentMessage" />
    </div>
    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import Form from "./components/contact/Form.vue";
import Success from "./components/contact/Success.vue";
import SidePortraits from "./components/SidePortraits.vue";
import { computed, ref } from "vue";

export default {
  components: { Form, Success, SidePortraits },
  setup() {
    const sentForm = ref(false);

    const sentMessage = () => {
      sentForm.value = true;
    };

    const formComponent = computed(() => {
      //combino computed con componentes dinámicos https://www.telerik.com/blogs/dynamic-components-vue-component
      if (sentForm.value) {
        return Success; //así devuelvo un componente u otro según si he enviado mensaje antes
      } else {
        return Form;
      }
    });

    return { sentMessage, formComponent };
  },
};
</script>

<style>
</style>