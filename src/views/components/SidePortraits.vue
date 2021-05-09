<template>
<!-- //TODO no me coge el d-flex -->
  <div class="pe-0 me-0">
    <img src="@/assets/img/cat02.png" alt="cat" class="cat-portrait d-block ms-2 ms-lg-3 col-10 col-lg-9" />
    <img src="@/assets/img/cat01.png" alt="cat" class="cat-portrait d-block ms-2 ms-lg-3 col-10 col-lg-9" />
    <img src="@/assets/img/cat04.png" alt="cat" class="cat-portrait d-block ms-2 ms-lg-3 col-10 col-lg-9" />
  </div>
</template>

<script>
export default {
  setup() {
    const portraits = [
      { url: "@/assets/img/cat01.png", description: "A white baby!" },
      { url: "@/assets/img/cat02.png", description: "A rescued lady." },
      { url: "@/assets/img/cat03.png", description: "A star!" },
      { url: "@/assets/img/cat04.png", description: "Xafardereta" },
    ];
    //TODO que se carguen de forma dinámica
  },
};
</script>

<style scoped>
.cat-portrait {
    max-height: 25vh;
}
</style>