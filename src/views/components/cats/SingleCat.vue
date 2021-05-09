<template>
  <div class="col-12 col-md-11 mt-1 mt-md-2 mt-lg-3 p-md-1">
    <!-- //TODO literales -->
    <h3>Detalles del gatete</h3>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="cat">
      <div class="d-flex justify-content-between">
        <div class="cat-img col-3 col-md-4 mt-md-2 pt-2">
          <img :src="cat.imageUrl" alt="cat.name" class="cat-photo" />
        </div>
        <div class="cat-details flex-grow-1">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Nombre: {{ cat.name }}</li>
            <li class="list-group-item">Raza: {{ cat.breed }}</li>
          </ul>
          <p class="cat-contact mt-2 mt-md-3 mx-1 mx-md-2 small text-dark">
            Para más detalles, contacta con {{ cat.poster }}
            <span v-if="cat.contactMail || cat.contactPhone">
              (
                <span v-if="cat.contactMail" class="px-1"><MailIcon /> {{ cat.contactMail }}</span>
                <span v-if="cat.contactPhone" class="px-1"><PhoneCallIcon /> {{ cat.contactPhone }}</span>
              )
            </span>
          </p>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button
          v-if="ownerMatch"
          @click="deleteCat"
          class="mt-3 btn btn-primary p-2 text-center"
        >
          Borrar
        </button>
        <router-link
          :to="{ name: 'Cats' }"
          class="mt-3 mx-2 btn btn-primary p-2 text-center"
        >
          Otros gatos
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import getDocument from "@/utils/getDocument";
import useStorage from "@/utils/useStorage";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { store } from "@/store/index";
import { projectFirestore } from "@/config/firebase";
import { MailIcon, PhoneCallIcon } from "@zhuowenli/vue-feather-icons";

export default {
  props: ["id"], //esto es la id del gato
  components: { MailIcon, PhoneCallIcon },
  setup(props) {
    const { deleteImage } = useStorage();
    const router = useRouter();

    // toma el objeto document pero le cambia el nombre a gato
    const { error, document: cat } = getDocument("cats", props.id);

    const ownerMatch = computed(() => {
      return store.state.user.uid === cat.value.posterUid;
    });

    const deleteCat = async () => {
      let catRef = projectFirestore.collection("cats").doc(props.id);
      await deleteImage(cat.value.imageUrl);
      //TODO revisar por q no me borra la imagen
      await catRef.delete()
        .then(router.push({ name: "Cats" }))
        .catch((err) => {
          console.log(err.message);
          error.value = err.message;
        });
    };

    return { error, cat, ownerMatch, deleteCat };
  },
};
</script>

<style scoped>
.cat-photo {
  max-width: 100%;
}
</style>