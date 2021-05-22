<template>
  <div class="d-flex justify-content-between">
    <div>
      <UserIcon />
      {{ post.poster }}
      <span v-if="post.contact" class="small"> ({{ post.contact }}) </span>
    </div>
    <Trash2Icon v-if="ownerMatch" @click="deletePost" role="button" />
  </div>
  <span>
    {{ post.message }}
  </span>
  <span class="small"> {{ $t('board.published') }}: {{ post.createdAt.toDate().toLocaleString() }} </span>
</template>

<script>
import { computed } from "vue";
import { store } from "@/store/index";
import { projectFirestore } from "@/config/firebase";
import { UserIcon, Trash2Icon } from "@zhuowenli/vue-feather-icons";

export default {
  components: { UserIcon, Trash2Icon },
  props: ["post"],
  setup(props) {
    const ownerMatch = computed((posterUid) => {
      if (store.state.logged) {
        return store.state.user.uid === props.post.posterUid;
      } 
      return false;
    });

    const deletePost = async () => {
      let postRef = projectFirestore.collection("posts").doc(props.post.id);
      await postRef.delete().catch((err) => console.log(err.message));
    };

    return { ownerMatch, deletePost };
  },
};
</script>

<style>
</style>