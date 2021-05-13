<template>
  <div class="p-0 m-0 d-flex justify-content-between">
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
              <form @submit.prevent="submitContract">
                <label for="file" class="form-label">Documento que refleja la firma del contrato:</label>
                <input
                  type="file"
                  class="form-control"
                  @change="handleFile"
                  name="file"
                />
                <div class="mb-3 text-warning">
                  <p v-if="fileError">{{ fileError }}</p>
                </div>
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
                v-for="contract in contracts"
                :key="contract.id"
              >
                <div
                  class="card-body d-flex justify-content-around align-items-center"
                >
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      Firmante: {{ contract.party }}
                    </li>
                    <li class="list-group-item">Gato: 
                      <span v-for="item in contract.cat" :key="item.id" class="me-2">{{ item }}</span> 
                    </li>
                    <li class="list-group-item">
                      Fecha de firma: {{ contract.date }}
                    </li>
                  </ul>
                  <button class="btn btn-primary" style="max-height: 2.5rem">
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
import { ref } from 'vue';
import SidePortraits from "./components/SidePortraits.vue";

export default {
  components: { SidePortraits },
  setup() {
    const fileError = ref('');
    const contracts = [
      {
        id: "2",
        party: "una persona",
        cat: ["anduino"],
        date: new Date().toString(),
      }]

      const handleFile = () => {
        console.log('entra en handlefile')
      }

      const submitContract = () => {
        console.log('entra en envio de contratos')
      }

    return { contracts, handleFile, submitContract, fileError };
  },
};
</script>