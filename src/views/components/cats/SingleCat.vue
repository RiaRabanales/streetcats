<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">

      <h3>{{ $t('cats.details') }}</h3>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="cat">
        <div class="d-flex justify-content-between">
          <div class="cat-img col-3 col-md-4 mt-md-2 pt-2">
            <img :src="cat.imageUrl" alt="cat.name" class="cat-photo" style="max-height:66vh;" />
          </div>
          <div class="cat-details flex-grow-1 d-flex flex-column justify-content-between">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><span class="text-secondary">{{ $t('cats.name') }}:</span> <span class="fw-bold">{{ cat.name }}</span></li>
              <li class="list-group-item"><span class="text-secondary">{{ $t('cats.gender') }}: </span>
                <span v-if="cat.gender=='male'"> {{ $t('cats.male') }} </span>
                <span v-if="cat.gender=='female'"> {{ $t('cats.female') }} </span>
              </li>
              <li class="list-group-item" v-if="cat.breed"><span class="text-secondary">{{ $t('cats.breed') }}:</span> {{ cat.breed }}</li>
              <li class="list-group-item"><span class="text-secondary">{{ $t('cats.neutered') }}: </span>
                <CheckIcon v-if="cat.neutered" class="text-primary" />
                <XIcon v-else class="text-dark" />
              </li>
              <li class="list-group-item"><span class="text-secondary">{{ $t('cats.status') }}: </span>
                <span v-if="cat.state=='streetcat'"> {{ $t('cats.statusstreet') }} </span>
                <span v-if="cat.state=='atcenter'"> {{ $t('cats.statuscenter') }} </span>
                <span v-if="cat.state=='fostered'"> {{ $t('cats.statusfostered') }} </span>
                <span v-if="cat.state=='adopted'"> {{ $t('cats.statusadopted') }} </span>
              </li>
              <li v-if="cat.state!=='adopted'" class="list-group-item"><span class="text-secondary">{{ $t('cats.statuslooking') }}: </span>
                <CheckIcon v-if="cat.toBeAdopted" class="text-primary" />
                <XIcon v-else class="text-dark" />
              </li>
              <li class="list-group-item" v-if="cat.observations"><span class="text-secondary">{{ $t('cats.comments') }}:</span> {{ cat.observations }}</li>
            </ul>
            <p class="cat-contact mt-2 mt-md-3 mx-1 mx-md-2 small text-dark">
              {{ $t('cats.contact') }} {{ cat.poster }}
              <span v-if="cat.contactMail || cat.contactPhone">
                (
                  <span v-if="cat.contactMail" class="px-1"><MailIcon /> {{ cat.contactMail }}</span>
                  <span v-if="cat.contactPhone" class="px-1"><PhoneCallIcon /> {{ cat.contactPhone }}</span>
                )
              </span>
            </p>
            <div class="d-flex justify-content-end">
              <button
                v-if="ownerMatch"
                @click="deleteCat"
                class="mt-3 btn btn-primary p-2 text-center"
              >
                {{ $t('cats.delete') }}
              </button>
              <router-link :to="{ name: 'Cats' }" class="mt-3 mx-2 btn btn-primary p-2 text-center">
                {{ $t('cats.more') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import getDocument from "@/utils/getDocument";
import useStorage from "@/utils/useStorage";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { store } from "@/store/index";
import { projectFirestore } from "@/config/firebase";
import { MailIcon, PhoneCallIcon, CheckIcon, XIcon } from "@zhuowenli/vue-feather-icons";
import SidePortraits from "@/views/components/SidePortraits.vue";

export default {
  props: ["id"], //esto es la id del gato
  components: { MailIcon, PhoneCallIcon, CheckIcon, XIcon, SidePortraits },
  setup(props) {
    const router = useRouter();

    // toma el objeto document pero le cambia el nombre a gato
    const { error, document: cat } = getDocument("cats", props.id);

    const ownerMatch = computed(() => {
      if (store.state.logged) {
        return store.state.user.uid === cat.value.posterUid;
      };
      return false;
    });

    const deleteImage = useStorage();

    const deleteCat = async () => {
      let catRef = projectFirestore.collection("cats").doc(props.id);
      await deleteImage(cat.value.imageUrl);
      // Primero borro la imagen de storage y luego borro la referencia del gato de la base de datos
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