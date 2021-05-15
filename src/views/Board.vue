<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <!-- //TODO literales -->
      <h3>{{ $t("nav.board") }}</h3>

      <!--//TODO css , TODO mensaje si no hay nada -->
      <div v-if="documents">
        <div
          v-for="post in documents"
          :key="post.id"
          class="d-flex flex-column p-2 my-2 border"
        >
          <SinglePost :post="post" />
        </div>
      </div>

      <transition name="buttonpost" mode="out-in">
        <div
          v-if="logged && !showNewPostForm"
          class="d-flex justify-content-center"
        >
          <button
            @click="showNewPostForm = true"
            class="add-btn mt-3 btn btn-primary border border-primary border-2 rounded-pill text-center"
          >
            {{ $t("board.new") }}
          </button>
        </div>
      </transition>

      <transition name="newpost" mode="out-in">
        <div v-if="showNewPostForm" class="m-1 my-md-3">
          <NewPost @hideForm="showNewPostForm = false" />
        </div>
      </transition>
    </div>

    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import getCollection from "@/utils/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, ref, defineAsyncComponent } from "vue";
import { useStore } from "vuex";
import SinglePost from "./components/board/SinglePost.vue";
import SidePortraits from "./components/SidePortraits.vue";
import {} from "vue";
const NewPost = defineAsyncComponent(() =>
  import("./components/board/NewPost.vue")
);

export default {
  components: { NewPost, SinglePost, SidePortraits },
  setup() {
    const showNewPostForm = ref(false);
    const { error, documents } = getCollection("posts");

    return {
      showNewPostForm,
      error,
      documents,
      logged: computed(() => useStore().state.logged),
    };
  },
};
</script>

<style scoped>
/* Animaciones de formulario de nuevo mensaje */
.newpost-enter-from,
.newpost-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.newpost-enter-active,
.newpost-leave-active {
  transition: all 0.5s ease;
}

.buttonpost-enter-from,
.buttonpost-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.buttonpost-enter-active,
.buttonpost-leave-active {
  transition: all 0.3s ease;
}
</style>