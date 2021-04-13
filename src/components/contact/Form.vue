<template>
  <form class="contactForm p-3" @submit.prevent="sendEmail">
    <div class="mb-3">
      <label for="name" class="form-label">{{ $t("contact.name") }}:</label>
      <input type="text" class="form-control" name="name" required />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">{{ $t("contact.email") }}:</label>
      <input type="email" class="form-control" name="email" required />
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">{{ $t("contact.phone") }}:</label>
      <input
        type="text"
        class="form-control"
        name="phone"
        aria-describedby="phoneWapp"
      />
      <div id="phoneWapp" class="form-text">{{ $t("contact.phoneWapp") }}</div>
    </div>
    <div class="mb-3">
      <label for="message" class="form-label"
        >{{ $t("contact.message") }}:</label
      >
      <textarea class="form-control" name="message"></textarea>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary text-center">
        {{ $t("contact.submit") }}
      </button>
    </div>
  </form>
</template>

<script>
import emailjs from "emailjs-com";
import {
  EMAILJS_SERVICE,
  EMAILJS_TEMPLATE,
  EMAILJS_USER,
} from "@/config/email";

export default {
  setup(props, { emit }) {
    const sendEmail = (e) => {
      emailjs
        .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, e.target, EMAILJS_USER)
        .then(
          (result) => {
            //TODO quitar mis elementos de consola eventualmente
            console.log("¡EMAIL ENVIADO!", result.status, result.text)
            emit('sentMessage', true)
          },
          (error) => {
            console.log("ERROR AL ENVIAR EMAIL...", error)
          }
        );
    };

    return { sendEmail };
  },
};
</script>

<style>
</style>