<template>
  <div
        v-for="post in posts"
        :key="post.id"
        class="d-flex flex-column p-2 my-2 border"
      >
        <span>
          <UserIcon />
          {{ post.poster }} (
          <span v-if="post.contact" class="small">
            {{ post.contact }}
          </span>
          )
        </span>
        <span>
          {{ post.message }}
        </span>
        <span class="small"> Publicado hace {{ post.createdAt }} </span>
      </div>
</template>

<script>
import { UserIcon } from "@zhuowenli/vue-feather-icons";

export default {
  components: { UserIcon},
  props: ["posts"]
}
</script>

<style>

</style>