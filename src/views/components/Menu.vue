<template>
<!-- //TODO ver cómo marcar items activos en vue-boots -->
<!-- //TODO cargar esto dinámicamente -->
  <div class="wrapper d-flex flex-column align-items-stretch py-3 mx-0 bg-primary">
    <nav 
      class="menu"
      @mouseenter="hover=true"
      @mouseleave="hover=false"
    >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mt-md-1 mx-0 p-2 text-nowrap">
          <router-link class="nav-link text-light" :to="{ name: 'Home' }">
            <InfoIcon />
            <span v-if="hover" class="menuText mx-2 mx-lg-3">{{ $t('nav.about') }}</span>
          </router-link>
        </li>
        <li class="nav-item mt-md-1 mx-0 p-2 text-nowrap">
          <router-link class="nav-link text-light" :to="{ name: 'Cats' }">
            <CameraIcon class="menuIcon" />
            <span v-if="hover" class="mx-2 mx-lg-3">{{ $t('nav.cats') }}</span>
          </router-link>
        </li>
        <li class="nav-item mt-md-1 mx-0 p-2 text-nowrap">
          <router-link class="nav-link text-light" :to="{ name: 'Help' }">
            <DollarSignIcon class="menuIcon" />
            <span v-if="hover" class="mx-2 mx-lg-3">{{ $t('nav.help') }}</span>
            </router-link>
        </li>
        <li class="nav-item mt-md-1 mx-0 p-2 text-nowrap">
          <router-link class="nav-link text-light" :to="{ name: 'Board' }">
            <MonitorIcon class="menuIcon" />
            <span v-if="hover" class="mx-2 mx-lg-3">{{ $t('nav.board') }}</span>
          </router-link>
        </li>
        <li v-if="isAuth" class="nav-item mt-md-1 mx-0 p-2 text-nowrap">
          <router-link class="nav-link text-light" :to="{ name: 'Docs' }">
            <FolderIcon class="menuIcon" />
            <span v-if="hover" class="mx-2 mx-lg-3">{{ $t('nav.docs') }}</span>
          </router-link>
        </li>
        <li class="nav-item mt-md-1 mx-0 p-2 text-nowrap">
          <router-link class="nav-link text-light" :to="{ name: 'Contact' }">
            <MailIcon class="menuIcon" />
            <span v-if="hover" class="mx-2 mx-lg-3">{{ $t('nav.contact') }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { InfoIcon, CameraIcon, DollarSignIcon, MonitorIcon, FolderIcon, MailIcon } from '@zhuowenli/vue-feather-icons';
import { computed, ref } from 'vue';
import { store } from '@/store/index'

export default {
  components: { InfoIcon, CameraIcon, DollarSignIcon, MonitorIcon, FolderIcon, MailIcon },
  setup() {
    const router = useRouter();
    const hover = ref(false);

    const isAuth = computed(() => {
      return store.state.logged;
    });

    return { router, hover, isAuth };
  },
};
</script>

<style scoped>

.menu ul li:hover {
  background: #3C403D;
}

svg {
  width: 30px;
  height: 30px;
}

</style>