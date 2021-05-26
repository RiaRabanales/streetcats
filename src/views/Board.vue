<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3 class="px-2 px-md-3">{{ $t("nav.board") }}</h3>

      <transition name="postSwitch" mode="out-in">
        <div v-if="documents">
          <transition-group tag="div"
            v-for="post in documents"
            :key="post.id"
            class="d-flex flex-column p-2 my-2 border"
            appear
          >
            <SinglePost :post="post" />
          </transition-group>
        </div>
        <div v-else>
          {{ $t("board.empty") }}
        </div>
      </transition>

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
/* Transiciones de formulario de nuevo mensaje */
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

/* Transiciones de la lista de mensajes */
.switchPost-enter-from,
.switchPost-leave-to {
  opacity: 0;
  transform: translateY(20px)
}

.switchPost-enter-active {
  transition: all 0.5s ease;
}

.switchPost-leave-active {
  transition: all 0.3s ease;
}

</style>