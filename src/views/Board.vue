<template>
  <div class="col-12 col-md-11 mt-1 mt-md-2 mt-lg-3 p-md-1">
    <!-- //TODO literales -->
    <h3>{{ $t("nav.board") }}</h3>

    <!--//TODO css , TODO mensaje si no hay nada -->
    <div v-if="computedDocuments">
      <div
        v-for="post in computedDocuments"
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
          publicar nuevo post
        </button>
      </div>
    </transition>

    <transition name="newpost" mode="out-in">
      <div v-if="showNewPostForm" class="m-1 my-md-3">
        <NewPost @hideForm="showNewPostForm = false" />
      </div>
    </transition>
  </div>
</template>

<script>
import getCollection from "@/utils/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, ref, defineAsyncComponent } from "vue";
import { useStore } from "vuex";
import SinglePost from "./components/board/SinglePost.vue";
import {} from "vue";
const NewPost = defineAsyncComponent(() =>
  import("./components/board/NewPost.vue")
);

export default {
  components: { NewPost, SinglePost },
  setup() {
    const showNewPostForm = ref(false);
    const { error, documents } = getCollection("posts");

    //aquí trabajo el formato de fecha si hay docs
    const computedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          //TODO localización del fns
          return { ...doc, createdAt: time };
        });
      }
    });

    return {
      showNewPostForm,
      error,
      computedDocuments,
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