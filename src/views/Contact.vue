<template>
  <h2 class="text-center">{{ $t("contact.title") }}</h2>
  <Success v-if="sentForm" />
  <Form v-else />
</template>

<script>
import Form from "@/components/contact/Form.vue";
import Success from "@/components/contact/Success.vue";

export default {
  components: { Form, Success },
  setup() {
    const sentForm = false;
    return { sentForm };
  },
};
</script>

<style>
</style>