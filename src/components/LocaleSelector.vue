<template>
<!-- ver: https://vue-i18n.intlify.dev/guide/essentials/scope.html#global-scope-2 //TODO -->
  <div class="locale-changer align-self-end mt-2 me-2">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
        <img src="" alt="">
        {{ locale }}
        </option>
    </select>
  </div>
</template>

<script>
export default {
  //TODO temas banderas
}
</script>

<style>

</style>