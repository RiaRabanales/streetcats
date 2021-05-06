<template>
  <div class="col-12 col-md-11 mt-1 mt-md-2 mt-lg-3 p-md-1">
    <h4>Añade un nuevo gatete:</h4>
    <form @submit.prevent="submitCat">
      <!-- //TODO literales -->
      <!-- //TODO aspecto, info (qué hace falta rellenar, qué no) -->
      <label for="name" class="form-label">Nombre del gato:</label>
      <input type="text" v-model="name" class="form-control" name="name" />
      <label for="breed" class="form-label">Raza:</label>
      <input type="text" v-model="breed" class="form-control" name="breed" />
      <label for="contactPhone" class="form-label">Teléfono de contacto:</label>
      <input
        type="text"
        v-model="contactPhone"
        class="form-control"
        name="contactPhone"
      />
      <label for="contactMail" class="form-label">E-mail de contacto:</label>
      <input
        type="email"
        v-model="contactMail"
        class="form-control"
        name="contactMail"
      />
      <div class="mb-3 text-warning">
        <p v-if="error">
          {{ error }}
        </p>
      </div>
      <button
        type="submit"
        class="mt-1 btn btn-primary border border-primary border-2 rounded-pill text-center"
      >
        Publicar gatete
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import useCollection from "@/utils/useCollection";
import { timestamp } from "@/config/firebase";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const user = store.state.user;
    const { addDocument, error } = useCollection("cats");

    const router = useRouter();

    const name = ref("");
    const breed = ref("");
    const contactPhone = ref("");
    const contactMail = ref("");

    const submitCat = async () => {
      const cat = {
        name: name.value,
        breed: breed.value,
        //edad, sexo, esterilizado, enfermedades
        poster: "banana", //user.value.displayName, //TODO porq hasta q no separe user no me lo pilla, ver Newpost
        contactPhone: contactPhone.value,
        contactMail: contactMail.value,
        createdAt: timestamp(),
      };

      await addDocument(cat);
      if (!error.value) {
        //TODO qué hace cuando se añade
        console.log("gatete añadido!");
        router.push({ name: "Cats" });
      }
    };

    return { name, breed, contactPhone, contactMail, submitCat, error };
  },
};
</script>

<style>
</style>