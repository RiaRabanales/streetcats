<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3>Documentos</h3>
      <!-- //TODO literales -->
      <p>
        En esta sección podrás descargarte diferentes documentos relativos al
        cuidado, la adopción y la acogida de nuestros gatitos.
      </p>
      <div v-for="document in documents" :key="document.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ document.name }}</h5>
            <p class="card-text">Idioma: {{ document.language }}</p>
            <button
              @click="handleDownload(document.url, document.name, document.type)"
              class="btn btn-primary border border-primary border-2 rounded-pill text-center"
            >
              Download {{ document.type }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import { projectStorage } from "@/config/firebase";
import SidePortraits from "./components/SidePortraits.vue";

export default {
  components: { SidePortraits },
  setup() {
    const documents = [
      {
        name: "neutering",
        language: "en",
        type: "pdf",
        url: "gs://streetcats-f248d.appspot.com/docs/neutering.pdf",
      },
    ];

    const handleDownload = async (docUrl, docName, docType) => {

      projectStorage.ref('docs/' + docName + '.' + docType).getDownloadURL()
        .then((url) => {
          var xhr = new XMLHttpRequest();
          xhr.responseType = "blob";
          xhr.onload = (event) => {
            var blob = xhr.response;
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = docName + '.' + docType;
            link.click(); //para q me lo dercargue tengo q clicar programáticamente
          };
          xhr.open("GET", url);
          xhr.send();
        })
        .catch((error) => {
          // Handle any errors //TODO ver https://firebase.google.com/docs/storage/web/download-files#:~:text=To%20download%20a%20file%2C%20first,an%20object%20in%20Cloud%20Storage.
        });
    };

    return { documents, handleDownload };
  },
};
</script>

<style>
</style>