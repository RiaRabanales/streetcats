<template>
  <div class="p-0 m-0 d-flex">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3>{{ $t("contracts.title") }}</h3>
      <p>{{ $t("contracts.message") }}</p>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {{ $t("contracts.upload") }}
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <form @submit.prevent="submitContract" class="d-flex flex-wrap">
                <div class="col-12 col-md-6 px-1">
                  <label for="contractParty" class="form-label">{{ $t("contracts.party") }}:</label>
                  <input type="text" v-model="contractParty" class="form-control" name="contractParty" required />
                </div>

                <div class="col-12 col-md-6">
                  <label for="contractCat" class="form-label">{{ $t("contracts.cat") }}:</label>
                  <input type="text" v-model="contractCat" class="form-control" name="contractCat" required />
                </div>

                <div class="col-12 pt-1 pt-md-2">
                  <label for="file" class="form-label">{{ $t("contracts.doc") }}:</label>
                  <input type="file" class="form-control" @change="handleFile" name="file" />
                  <div class="mb-3 text-warning">
                    <p v-if="fileError">{{ fileError }}</p>
                  </div>
                </div>

                <button class="btn btn-outline-dark">{{ $t("contracts.uploadbutton") }}</button>
              </form>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {{ $t("contracts.viewdocs") }}
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body d-flex flex-row flex-wrap justify-content-around">
              <div class="card col-12 col-lg-5 mb-2" v-for="contract in documents" :key="contract.id">
                <div class="card-body d-flex justify-content-around align-items-center">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{ $t("contracts.party") }}: {{ contract.party }}</li>
                    <li class="list-group-item">{{ $t("contracts.cat") }}: {{ contract.cat }}</li>
                    <li class="list-group-item">{{ $t("contracts.date") }}: {{ contract.createdAt.toDate().toLocaleString() }}</li>
                  </ul>
                  <button class="btn btn-primary" style="max-height: 2.5rem" @click="handleDownload(contract.filename)">
                    {{ $t("contracts.download") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SidePortraits class="d-none d-md-block col-2 p1 py-md-2" />
  </div>
</template>

<script>
import { ref } from "vue";
import useCollection from "@/utils/useCollection";
import getCollection from "@/utils/getCollection";
import useStorage from "@/utils/useStorage";
import { projectStorage } from "@/config/firebase";
import { store } from "@/store/index";
import { timestamp } from "@/config/firebase";
import SidePortraits from "./components/SidePortraits.vue";

export default {
  components: { SidePortraits },
  setup() {
    const { addDocument, error } = useCollection("contracts");
    const { url, filePath, uploadFile } = useStorage();
    const { documents } = getCollection("contracts");

    const contractParty = ref("");
    const contractCat = ref("");

    const file = ref(null);
    const fileTypes = ["application/pdf"];
    const fileError = ref("");
    const fileName = ref("");
    const handleFile = (e) => {
      let fileToUpload = e.target.files[0];

      if (fileToUpload && fileTypes.includes(fileToUpload.type)) {
        //TODO literales error
        file.value = fileToUpload;
        fileError.value = "";
        fileName.value = fileToUpload.name;
      } else {
        file.value = null;
        fileError.value = "Error! Wrong file type: needs to be PDF.";
      }
    };

    const submitContract = async () => {

      if (file.value) {
        await uploadFile(file.value);

        const contract = {
          party: contractParty.value,
          cat: contractCat.value,
          uploaderUid: store.state.user.uid,        //Guardo uploader uid pero por ahora no lo uso
          createdAt: timestamp(),
          fileUrl: url.value,
          filename: fileName.value
        };

        await addDocument(contract);

        if (!error.value) {
          //todo revisar este error.value aquí y en NewCat
          contractParty.value = "";
          contractCat.value = "";
          file.value = null;
          url.value = null;
        }
      } else {
        fileError.value = "ERROR! Must upload a file.";
      }
    };

    //TODO unificar con el de docs si hay tiempo
    const handleDownload = async (filename) => {
      projectStorage.ref('contracts/' + filename).getDownloadURL()
        .then((url) => {
          var xhr = new XMLHttpRequest();
          xhr.responseType = "blob";
          xhr.onload = (event) => {
            var blob = xhr.response;
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();   //para q me lo descargue tengo q clicar programáticamente
          };
          xhr.open("GET", url);
          xhr.send();
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    return {
      contractParty,
      contractCat,
      handleFile,
      submitContract,
      fileError,
      documents,
      handleDownload
    };
  },
};
</script>