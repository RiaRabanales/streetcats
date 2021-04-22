<template>
  <form @submit.prevent="submitPost">
    <!-- //TODO literales -->
    <!-- //TODO aspecto -->
    <label for="message" class="form-label"
      >Deja tu mensaje en el tablón:</label
    >
    <textarea
      v-model="message"
      class="form-control"
      name="message"
      required
    ></textarea>
    <label for="contact" class="form-label"
      >Si quieres, deja un número de teléfono o email de contacto:</label
    >
    <input type="text" v-model="contact" class="form-control" name="contact" />
    <div class="mb-3 text-warning">
      <p v-if="error">
        {{ error }}
      </p>
    </div>
    <button
      type="submit"
      class="mt-1 btn btn-primary border border-primary border-2 rounded-pill text-center"
    >
      Post-it!
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "@/utils/auth/getUser";
import useCollection from "@/utils/collections/useCollection";
import { timestamp } from "@/config/firebase";

export default {
  setup() {
    const { user } = getUser;
    const { addDocument, error } = useCollection("posts");

    const message = ref("");
    const contact = ref("");

    const submitPost = async () => {
      const post = {
        poster: "banana", //user.value.displayName, //TODO porq hasta q no separe user no me lo pilla
        message: message.value,
        contact: contact.value,
        createdAt: timestamp(),
      };

      await addDocument(post);
      if (!error.value) {
        message.value = "";
        contact.value = "";
      }
    };

    return { message, contact, submitPost, error };
  },
};
</script>

<style>
</style>