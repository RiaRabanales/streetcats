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
    <div class="d-flex justify-content-around">
      <button
      type="submit"
      class="mt-1 btn btn-primary border border-primary border-2 rounded-pill text-center"
    >
      Post-it!
    </button>
    <button
      type="reset"
      @click="cancelPost"
      class="mt-1 btn btn-primary border border-primary border-2 rounded-pill text-center"
    >
      Cancelar
    </button>
    </div>
    
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import useCollection from "@/utils/useCollection";
import { timestamp } from "@/config/firebase";

export default {
  setup(props, { emit }) {
    const { addDocument, error } = useCollection("posts");
    const store = useStore();

    const message = ref("");
    const contact = ref("");

    const submitPost = async () => {
      const post = {
        poster: store.state.user.displayName,
        message: message.value,
        contact: contact.value,
        createdAt: timestamp(),
      };

      await addDocument(post);
      if (!error.value) {
        message.value = "";
        contact.value = "";
        emit('hideForm');
      }
    };

    const cancelPost = () => {
      emit('hideForm');
    }

    return { message, contact, submitPost, cancelPost, error };
  },
};
</script>

<style>
</style>