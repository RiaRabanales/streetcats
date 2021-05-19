<template>
  <div class="mt-0">
    <div 
      v-for="portrait in randomPortraits" 
      :key="portrait.url" 
      class="d-flex justify-content-end align-items-start px-2 px-lg-3"
      style="height:32%;"
    >
      <img
        :src="portrait.url"
        :alt="portrait.description"
        class="cat-portrait"
      />
    </div>
  </div>
</template>

<script>
import { store } from "@/store/index";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

export default {
  setup() {
    return { randomPortraits: store.getters.getPortraits, hovered: ref(false) };
  }
};
</script>

<style scoped>
.cat-portrait {
  width: 90%;
  height: auto;
  min-width: 150px;
  object-fit: contain;
}

.cat-portrait:hover {
  animation: shake 0.6s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>