<template>
  <div class="col-12 col-md-11 mt-1 mt-md-2 mt-lg-3 p-md-1">
    <!-- //TODO literales -->
    <h3>Tablón de Anuncios</h3>

    <!--//TODO css , TODO mensaje si no hay nada -->
    <div v-if="computedDocuments">
      <ListPosts :posts="computedDocuments" />
    </div>

    <button
      v-if="logged && !showNewPostForm"
      @click="showNewPostForm = true"
      class="add-btn mt-3 btn btn-primary border border-primary border-2 rounded-pill text-center"
    >
      publicar nuevo post
    </button>
    <!-- //TODO animaciones -->
    <div v-if="showNewPostForm" class="m-1 my-md-3">
      <NewPost />
      <!--//TODO emit para que al publicar nuevo post showNewPostForm se haga falso -->
    </div>
  </div>
</template>

<script>
import NewPost from "./components/board/NewPost.vue";
import ListPosts from "./components/board/ListPosts.vue";
import getCollection from "@/utils/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, ref } from "vue";
import { useStore } from "vuex";

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

    return {
      showNewPostForm,
      error,
      computedDocuments,
      logged: computed(() => useStore().state.logged),
    };
  },
};
</script>

<style>
</style>