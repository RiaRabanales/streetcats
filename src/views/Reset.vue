<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3>{{ $t("auth.reset") }}</h3>
      <form class="resetForm p-3" @submit.prevent="handleReset">
        <div class="mb-3">
          <label for="email" class="form-label">{{ $t("auth.email") }}:</label>
          <input type="email" v-model="email" class="form-control" name="email" required/>
        </div>

        <div class="text-center">
          <div>
            <button type="submit" class="btn btn-primary border border-primary border-2 rounded-pill text-center">
              {{ $t("auth.send") }}
            </button>
          </div>

          <div class="mb-3 text-warning">
            <p v-if="info">{{ $t("auth.resetinfo") }}</p>
            <p v-if="error">{{ $t("error.general") }}</p>
          </div>

          <router-link class="d-block mt-2 text-dark small" role="button" :to="{ name: 'Register' }" style="text-decoration: none">
            {{ $t("auth.nologin") }}
          </router-link>
        </div>
      </form>
    </div>
    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import { projectAuth } from "@/config/firebase";
import { useRouter } from "vue-router";
import { ref } from "vue";
import SidePortraits from "./components/SidePortraits.vue";

export default {
  components: { SidePortraits },
  setup() {
    const router = useRouter();

    const email = ref("");
    const error = ref(false);
    const info = ref(false);

    const handleReset = async () => {
        error.value = false;
        projectAuth.useDeviceLanguage().sendPasswordResetEmail(email.value)
            .then(() => {
                info.value = true;
                setTimeout(() => { router.push({ name: "Home" }); }, 6000);
            })
            .catch((err) => {
                console.log(err.message);
                error.value = true;
            });
    };

    return { email, info, error, handleReset };
  },
};
</script>