<template>
  <div class="border-top border-5 border-primary">
    <nav class="navbar navbar-expand-sm navbar-light bg-light p-md-2">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="d-none d-md-block nav-item h3 me-2 text-dark">
              Streetcats Artà
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home' }"
                >
                <span class="d-md-none">Streetcats Artà </span>
                <span class="d-none d-md-block">{{ $t('nav.about') }}</span>
                </router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Help' }"
                >{{ $t('nav.help') }}</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Contact' }"
                >{{ $t('nav.contact') }}</router-link
              >
            </li>
          </ul>
        </div>
        <button
          type="button"
          class="btn btn-outline-dark border border-dark border-2 rounded-pill"
          @click="$router.push('login')"
        >
          {{ $t('nav.login') }}
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    return { router };
  },
};
</script>

<style scoped>
</style>