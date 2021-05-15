<template>
  <div class="p-0 m-0 d-flex">
    <div class="mt-1 mt-md-2 mt-lg-3 p-md-1 col-12 col-md-9 col-lg-10">
      <h3>Repositorio de contratos</h3>
      <!-- //TODO literales -->
      <p>
        En esta sección puedes almacenar los contratos de acogida y adopción
        firmados.
      </p>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Subir nuevo contrato
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
                  <label for="contractParty" class="form-label"
                    >Firmante:</label
                  >
                  <input
                    type="text"
                    v-model="contractParty"
                    class="form-control"
                    name="contractParty"
                  />
                </div>

                <div class="col-12 col-md-6">
                  <label for="contractCat" class="form-label"
                    >Gato adoptado/acogido:</label
                  >
                  <input
                    type="text"
                    v-model="contractCat"
                    class="form-control"
                    name="contractCat"
                  />
                </div>

                <div class="col-12 pt-1 pt-md-2">
                  <label for="file" class="form-label"
                    >Documento que refleja la firma del contrato:</label
                  >
                  <input
                    type="file"
                    class="form-control"
                    @change="handleFile"
                    name="file"
                  />
                  <div class="mb-3 text-warning">
                    <p v-if="fileError">{{ fileError }}</p>
                  </div>
                </div>

                <button class="btn btn-outline-dark">Subir</button>
              </form>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Ver todos los contratos guardados
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div
                class="card"
                v-for="contract in documents"
                :key="contract.id"
              >
                <div
                  class="card-body d-flex justify-content-around align-items-center"
                >
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      Firmante: {{ contract.party }}
                    </li>
                    <li class="list-group-item">Gato: {{ contract.cat }}</li>
                    <li class="list-group-item">
                      Fecha de firma: {{ contract.createdAt.toDate().toLocaleString() }}
                    </li>
                  </ul>
                  <button class="btn btn-primary" style="max-height: 2.5rem">
                    <!-- //TODO que se descargue al clicar -->
                    Descargar
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
import { store } from "@/store/index";
import { timestamp } from "@/config/firebase";
import SidePortraits from "./components/SidePortraits.vue";

export default {
  components: { SidePortraits },
  setup() {
    const { addDocument, error } = useCollection("contracts");
    const { url, filePath, uploadFile } = useStorage();
    const { documents } = getCollection("contracts");

    console.log(documents)

    const contractParty = ref("");
    const contractCat = ref("");

    const file = ref(null);
    const fileTypes = ["application/pdf"];
    const fileError = ref("");
    const handleFile = (e) => {
      let fileToUpload = e.target.files[0];

      if (fileToUpload && fileTypes.includes(fileToUpload.type)) {
        //TODO literales error
        file.value = fileToUpload;
        fileError.value = "";
      } else {
        file.value = null;
        fileError.value = "Error! Wrong file type: needs to be PDF.";
      }
    };

    const submitContract = async () => {
      if (file.value) {
        await uploadFile(file.value);

        //Guardo uploader uid pero por ahora no lo uso
        const contract = {
          party: contractParty.value,
          cat: contractCat.value,
          uploaderUid: store.state.user.uid,
          createdAt: timestamp(),
          fileUrl: url.value,
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

    return {
      contractParty,
      contractCat,
      handleFile,
      submitContract,
      fileError,
      documents
    };
  },
};
</script>