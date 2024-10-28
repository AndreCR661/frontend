<template>
  <v-app>
  <Head :color="color" :flat="flat" />
  <div class="contabilidad">
    <h2>Voucher de Contabilidad</h2>

    <!-- Barra de búsqueda -->
    <div class="busqueda">
      <input type="text" placeholder="Buscar por N° de Serie" v-model="buscar" />
      <button class="btn-crear-boucher">Crear Boucher</button>
      <button class="btn-generar-reporte">Generar Reporte</button>
    </div>

    <!-- Tabla de Bouchers -->
    <table class="tabla-bouchers">
      <thead>
        <tr>
          <th>Tipo</th>
          <th>N° de Serie</th>
          <th>Tipo de Documento</th>
          <th>Estado</th>
          <th>Fecha de Creación</th>
          <th>Mostrar Detalle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="boucher in bouchersFiltrados" :key="boucher.id">
          <td>{{ boucher.tipo }}</td>
          <td>{{ boucher.serie }}</td>
          <td>{{ boucher.tipo_documento }}</td>
          <td>{{ boucher.estado }}</td>
          <td>{{ boucher.fecha_creacion }}</td>
          <td><button class="btn-detalle" @click="mostrarDetalle(boucher)">Ver Detalle</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <v-scale-transition>
            <v-btn
            fab
            v-show="fab"
            v-scroll="onScroll"
            dark
            fixed
            bottom
            right
            color="secondary"
            @click="toTop"
            >
            <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
    </v-scale-transition>
    <Foot/>
    </v-app>
</template>

<script>
import Head from "@/components/global/HeaderNav.vue";
import Foot from "@/components/global/FooterEdit.vue";
export default {
  components: {
    Head,
    Foot,
  },
  data() {
    return {
      buscar: '',
      bouchers: [
        // Ejemplo de datos de bouchers
      ]
    };
  },
  watch: {
  fab(value) {
      if (value) {
          this.color = "secondary";
          this.flat = false;
      } else {
          this.color = "transparent";
          this.flat = true;
      }
    },
  },
  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
        this.color = "transparent";
        this.flat = true;
    }
  },
  computed: {
    bouchersFiltrados() {
      return this.bouchers.filter(boucher =>
        boucher.serie.toLowerCase().includes(this.buscar.toLowerCase())
      );
    }
  },
  methods: {
    mostrarDetalle(boucher) {
      console.log(boucher)
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  }
};
</script>

<style scoped>
.contabilidad {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el footer esté al fondo */
  background-image: url("~@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  
  /* Ajuste de padding */
  padding: 20px; /* Ajusta el espaciado alrededor */
  padding-top: 80px; /* Espaciado solo en la parte superior para separar de la cabecera */
}

h2 {
  font-size: 28px;
  color: #333;
  text-align: center;
}

/* Barra de búsqueda */
.busqueda {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-crear-boucher, .btn-generar-reporte {
  background-color: #fca311;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
}

.btn-crear-boucher:hover, .btn-generar-reporte:hover {
  background-color: #ffb703;
}

/* Tabla de Bouchers */
.tabla-bouchers {
  width: 100%;
  border-collapse: collapse;
}

.tabla-bouchers th, .tabla-bouchers td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.tabla-bouchers tr:hover {
  background-color: #f1f1f1;
}

/* Botón detalle */
.btn-detalle {
  background-color: #00509e;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-detalle:hover {
  background-color: #003f7e;
}
</style>
