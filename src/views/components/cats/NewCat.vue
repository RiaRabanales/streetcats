<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h4>{{ $t('cats.addnew') }}:</h4>

      <form @submit.prevent="submitCat" class="row p-2 p-lg-3 pb-3 mb-3">
        <div class="col-12">
          <label for="name" class="form-label">{{ $t('cats.name') }}:</label>
          <input
            type="text"
            v-model="name"
            class="form-control"
            name="name"
            required
          />
        </div>

        <div class="col-12 py-2 pt-md-3">
          <label class="form-label col-12">{{ $t('cats.status') }}:</label>
          <span class="form-check col-12 d-flex flex-column flex-md-row justify-content-between ms-3">
            <span class="px-3">
              <input class="form-check-input" type="radio" name="streetcat" id="streetcat" value="streetcat" v-model="state" />
              <label class="form-check-label" for="streetcat"> {{ $t('cats.statusstreet') }} </label>
            </span>
            <span class="px-3">
              <input class="form-check-input" type="radio" name="atcenter" id="atcenter" value="atcenter" v-model="state" />
              <label class="form-check-label" for="atcenter"> {{ $t('cats.statuscenter') }} </label>
            </span>
            <span class="px-3">
              <input class="form-check-input" type="radio" name="fostered" id="fostered" value="fostered" v-model="state" />
              <label class="form-check-label" for="fostered"> {{ $t('cats.statusfostered') }} </label>
            </span>
            <span class="px-3">
              <input class="form-check-input" type="radio" name="adopted" id="adopted" value="adopted" v-model="state" />
              <label class="form-check-label" for="adopted"> {{ $t('cats.statusadopted') }} </label>
            </span>
          </span>
        </div>

        <div class="col-12 mb-2 mb-md-3 mx-3 d-flex flex-column-reverse">
          <div class="form-check mx-3">
            <input v-model="neutered" class="form-check-input" type="checkbox" id="neutered" />
            <label class="form-check-label" for="neutered"> {{ $t('cats.neutered') }} </label>
          </div>
          <div v-if="state!=='adopted'" class="form-check mx-3">
              <input v-model="toBeAdopted" class="form-check-input" type="checkbox" id="toBeAdopted" />
              <label class="form-check-label" for="toBeAdopted"> {{ $t('cats.statuslooking') }} </label>
            </div>
        </div>

        <div class="col-12">
          <label for="breed" class="form-label">{{ $t('cats.breed') }}:</label>
          <input type="text" v-model="breed" class="form-control" name="breed" required />
        </div>

        <div class="col-12 col-md-4 pt-1 pt-md-3 mb-2 mb-md-3">
          <div class="form-check d-flex flex-column p-0 m-0">
            <label class="form-label">{{ $t('cats.gender') }}:</label>
            <span class="mx-3 px-3">
              <input class="form-check-input" type="radio" name="gender" id="male" value="male" v-model="gender" />
              <label class="form-check-label" for="male"> {{ $t('cats.male') }} </label>
            </span>
            <span class="mx-3 px-3">
              <input class="form-check-input" type="radio" name="gender" id="female" value="female" v-model="gender" />
              <label class="form-check-label" for="female"> {{ $t('cats.female') }} </label>
            </span>
          </div>
        </div>

        <div class="col-2 col-md-1 pt-1 pt-md-3 text-md-end">
          <label for="image" class="form-label">{{ $t('cats.picture') }}:</label>
        </div>

        <div class="col-10 col-md-7 pt-1 pt-md-3">
          <input
            type="file"
            class="form-control"
            @change="handleImage"
            name="image"
          />
          <div class="mb-3 text-warning">
            <p v-if="imageError">{{ $t('error.filetype') }}</p>
          </div>
        </div>

        <div class="col-12">
          <label for="observations" class="form-label">{{ $t('cats.comments') }}:</label>
          <textarea
            v-model="observations"
            class="form-control"
            id="observations"
            style="height: 3.3rem"
          ></textarea>
        </div>

        <div class="col-12 py-2 mt-2 mt-md-3 border-top border-primary border-3">
          <p class="small text-dark">
             {{ $t('cats.contactstart') }}
            <span v-if="name">{{ name }}</span>
            <span v-else>{{ $t('cats.contactcat') }}</span>
            {{ $t('cats.contactend') }}:
          </p>
        </div>

        <div class="col-12 col-md-6">
          <label for="contactPhone" class="form-label"
            >{{ $t('cats.contactphone') }}:</label
          >
          <input
            type="text"
            v-model="contactPhone"
            class="form-control"
            name="contactPhone"
          />
        </div>

        <div class="col-12 col-md-6">
          <label for="contactMail" class="form-label">{{ $t('cats.contactmail') }}:</label>
          <input
            type="email"
            v-model="contactMail"
            class="form-control"
            name="contactMail"
          />
        </div>
        
        <div class="mb-3 text-warning">
          <p v-if="error">
            {{ error }}
          </p>
        </div>
        <button
          type="submit"
          class="mt-1 mb-3 pb-3 btn btn-primary border border-primary border-2 rounded-pill text-center cat-button"
          style="max-width: 180px"
        >
          {{ $t('cats.save') }}
        </button>
      </form>
    </div>
    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import { ref } from "vue";
import useCollection from "@/utils/useCollection";
import useStorage from "@/utils/useStorage";
import { timestamp } from "@/config/firebase";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import SidePortraits from "@/views/components/SidePortraits.vue";

export default {
  components: { SidePortraits },
  setup() {
    const { addDocument, error } = useCollection("cats");
    const { filePath, url, uploadImage } = useStorage();

    const router = useRouter();
    const store = useStore();

    const name = ref("");
    const breed = ref("");
    const neutered = ref(false);
    const gender = ref('');
    const state = ref('');
    const toBeAdopted = ref(false);
    const observations = ref("");
    const contactPhone = ref("");
    const contactMail = ref("");

    const image = ref(null);
    const imageError = ref(false);
    const imageTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
    const handleImage = (e) => {
      let imageFile = e.target.files[0];

      if (imageFile && imageTypes.includes(imageFile.type)) {
        image.value = imageFile;
        imageError.value = false;
      } else {
        image.value = null;
        imageError.value = true;
      }
    };

    const submitCat = async () => {
      if (image.value) {
        await uploadImage(image.value);
      }

      if (state.value == 'adopted') {
        toBeAdopted.value = false;
      }

      /* Nota: estas características son genéricas; la asocicación establecerá las que quieran. */
      const cat = {
        name: name.value,
        breed: breed.value,
        neutered: neutered.value,
        gender: gender.value,
        state: state.value,
        toBeAdopted: toBeAdopted.value,
        observations: observations.value,
        poster: store.state.user.displayName,
        posterUid: store.state.user.uid,
        contactPhone: contactPhone.value,
        contactMail: contactMail.value,
        createdAt: timestamp(),
        imageUrl: url.value,
      };

      await addDocument(cat)

      if (!error.value) {
        router.push({ name: "Cats" });
      }
    };

    return {
      name,
      breed,
      neutered,
      gender,
      state,
      toBeAdopted,
      observations,
      contactPhone,
      contactMail,
      handleImage,
      submitCat,
      error,
      imageError,
    };
  },
};
</script>

<style scoped>
.cat-button {
  margin: 0 auto;
}
</style>