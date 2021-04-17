<template>
<!-- //TODO ver cómo marcar items activos en vue-boots -->
<!-- //TODO cargar esto dinámicamente -->
  <div 
    @mouseover="hover=true"
    @mouseleave="hover=false"
    class="wrapper d-flex flex-column align-items-stretch py-3 mx-0 bg-primary"
    >
      <nav>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mt-md-1 mx-0 p-3 text-nowrap">
              <router-link class="nav-link text-light" :to="{ name: 'Home' }">
                <InfoIcon />
                <span v-if="hover" class="mx-2">{{ $t('nav.about') }}</span>
                </router-link>
            </li>
            <li class="nav-item mt-md-1 mx-0 p-3 text-nowrap">
              <router-link class="nav-link text-light" :to="{ name: 'Help' }">
                <ShoppingCartIcon />
                <span v-if="hover" class="mx-2">{{ $t('nav.help') }}</span>
                </router-link>
            </li>
            <li class="nav-item mt-md-1 mx-0 p-3 text-nowrap">
              <router-link class="nav-link text-light" :to="{ name: 'Contact' }">
                <MailIcon />
                <span v-if="hover" class="mx-2">{{ $t('nav.contact') }}</span>
              </router-link>
            </li>
          </ul>
      </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { InfoIcon, ShoppingCartIcon, MailIcon } from "@zhuowenli/vue-feather-icons";
import { ref } from 'vue';

export default {
  components: { InfoIcon, ShoppingCartIcon, MailIcon },
  setup() {
    const router = useRouter();

    const hover = ref(false);

    return { router, hover };
  },
};
</script>

<style scoped>

nav ul li:hover {
  background: #3C403D;
}
</style>