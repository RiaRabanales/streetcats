<template>
  <h2 class="text-center">{{ $t("contact.title") }}</h2>
  <form class="contactForm p-3" @submit.prevent="sendEmail">
    <label for="name">{{ $t("contact.name") }}</label>
    <input type="text" name="name" required />
    <label for="email">{{ $t("contact.email") }}</label>
    <input type="email" name="email" required />
    <label for="phone">{{ $t("contact.phone") }}</label>
    <input type="email" name="phone" required />
    <label for="message">Message</label>
    <textarea name="message"></textarea>
    <button type="submit" class="btn btn-primary">{{ $t("contact.submit") }}</button>
  </form>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  setup() {
    const sendEmail = (e) => {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          e.target,
          "YOUR_USER_ID"
        )
        .then(
          (result) => {
            console.log("¡EMAIL ENVIADO!", result.status, result.text);
          },
          (error) => {
            console.log("ERROR AL ENVIAR EMAIL...", error);
          }
        );
    };

    return { sendEmail };
  },
};
</script>

<style scoped>
</style>