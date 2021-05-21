<template>
  <div class="p-0 m-0 d-flex justify-content-between">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3>{{ $t('nav.docs') }}</h3>
      <p>{{ $t('docs.message') }}</p>
      <div v-for="document in documents" :key="document.id" class="d-flex flex-wrap">
        <div class="card col-12 col-md-4 col-lg-3 mb-2">
          <div class="card-body d-flex flex-column align-items-center justify-content-between">
            <h5 class="card-title">{{ document.name }}</h5>
            <p class="card-text">{{ $t('docs.language') }}:
              <span v-if="document.language=='es'"> {{ $t('lang.es') }}</span>
              <span v-if="document.language=='en'"> {{ $t('lang.en') }}</span>
              <span v-if="document.language=='ca'"> {{ $t('lang.ca') }}</span>
              <span v-if="document.language=='de'"> {{ $t('lang.de') }}</span>
            </p>
            <button
              @click="handleDownload(document.url, document.filename, document.type)"
              class="btn btn-primary border border-primary border-2 rounded-pill text-center"
            >
              {{ $t('docs.download') }} .{{ document.type }}
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
        name: "Neutering guide",
        filename: "neutering",
        language: "en",
        type: "pdf",
        url: "gs://streetcats-f248d.appspot.com/docs/neutering.pdf",
      },
      {
        name: "Ejemplo de contrato de adopción",
        filename: "ejemplocontratoadopcion",
        language: "es",
        type: "pdf",
        url: "gs://streetcats-f248d.appspot.com/docs/ejemplocontratoadopcion.pdf",
      },
    ];

    const handleDownload = async (docUrl, docFilename, docType) => {
      projectStorage.ref('docs/' + docFilename + '.' + docType).getDownloadURL()
        .then((url) => {
          var xhr = new XMLHttpRequest();
          xhr.responseType = "blob";
          xhr.onload = (event) => {
            var blob = xhr.response;
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = docFilename + '.' + docType;
            link.click();   //para q me lo descargue tengo q clicar programáticamente
          };
          xhr.open("GET", url);
          xhr.send();
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    return { documents, handleDownload };
  },
};
</script>