<template>
<!-- //TODO ver cómo marcar items activos en vue-boots -->
  <div class="wrapper d-flex flex-column align-items-stretch">
      <nav>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home' }">
                {{ $t('nav.about') }}
                </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Help' }">
                {{ $t('nav.help') }}
                </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Contact' }">{{ $t('nav.contact') }}</router-link>
            </li>
          </ul>
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

<style>
</style>