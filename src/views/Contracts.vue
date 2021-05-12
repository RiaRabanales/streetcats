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


                
                //TODO COMPLETAAAAR
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
              <div class="card" for="contract in contracts" :key="contract.id">
                <div class="card-body">
                    <!--//TODO añadir botón de descarga -->
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Firmante: {{ contract.party }}</li>
                    <li class="list-group-item">Gato: {{ contract.cat }}</li> <!--plantear como lista, en un contrato puede haber varios gatos-->
                    <li class="list-group-item">Fecha de firma: {{ contract.date }}</li>
                  </ul>
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
import SidePortraits from "./components/SidePortraits.vue";

export default {
  components: { SidePortraits },
  setup() {
    const contracts = [];
    return { contracts };
  },
};
</script>