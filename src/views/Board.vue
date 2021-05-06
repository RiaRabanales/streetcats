<template>
  <div class="col-12 col-md-11 mt-1 mt-md-2 mt-lg-3 p-md-1">
    <div class="d-flex justify-content-between">
      <!-- //TODO literales -->
      <h3>Tablón de Anuncios</h3>
      <button
        @click="showNewPostForm = true"
        v-if="!showNewPostForm"
        class="mt-1 btn btn-light btn-outline-primary border border-primary border-2 rounded-pill text-center"
      >
        publicar nuevo post
      </button>
    </div>

    <!-- //TODO q solo usuarios puedan postear -->
    <div v-if="showNewPostForm" class="m-1 my-md-3">
      <NewPost />
      <!--//TODO emit para que al publicar nuevo post showNewPostForm se haga falso -->
    </div>

    <!--//TODO css , TODO mensaje si no hay nada -->
    <div v-if="computedDocuments">
      <ListPosts :posts="computedDocuments" />
    </div>
  </div>
</template>

<script>
import NewPost from "./components/board/NewPost.vue";
import ListPosts from "./components/board/ListPosts.vue";
import getCollection from "@/utils/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, ref } from "vue";

export default {
  components: { NewPost, ListPosts },
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

    return { showNewPostForm, error, computedDocuments };
  },
};
</script>

<style>
</style>