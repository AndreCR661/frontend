<template>
    <v-app>
    <Head :color="color" :flat="flat" />
    <div class="inventario">
      <h2>Inventario de Proyectos</h2>
  
      <!-- Barra de búsqueda -->
      <div class="busqueda">
        <input type="text" placeholder="Buscar por Razón Social" v-model="buscar" />
        <button class="btn-generar-reporte">Generar Reporte</button>
      </div>
  
      <!-- Tabla de Proyectos -->
      <table class="tabla-inventario">
        <thead>
          <tr>
            <th>Razón Social</th>
            <th>RUC</th>
            <th>Email</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="proyecto in proyectosFiltrados" :key="proyecto.id" @click="verDetalles(proyecto)">
            <td>{{ proyecto.razon_social }}</td>
            <td>{{ proyecto.ruc }}</td>
            <td>{{ proyecto.email }}</td>
            <td>{{ proyecto.direccion }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- Detalles de Proyecto -->
      <div v-if="proyectoSeleccionado" class="detalles-proyecto">
        <h3>Detalles del Proyecto</h3>
        <table class="tabla-detalles">
          <thead>
            <tr>
              <th>Nombre del Producto</th>
              <th>Estado</th>
              <th>Cantidad Enviada</th>
              <th>Cantidad Recibida</th>
              <th>Fecha de Recepción</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="producto in proyectoSeleccionado.productos" :key="producto.id">
              <td>{{ producto.nombre }}</td>
              <td>
                <select v-model="producto.estado">
                  <option>Enviado</option>
                  <option>Recibido</option>
                </select>
              </td>
              <td>{{ producto.cantidad_enviada }}</td>
              <td><input v-model="producto.cantidad_recibida" /></td>
              <td>{{ producto.fecha_recepcion }}</td>
              <td><input v-model="producto.observaciones" /></td>
            </tr>
          </tbody>
        </table>
        <button @click="guardarCambios" class="btn-guardar">Guardar Cambios</button>
        <button @click="volver" class="btn-volver">Retroceder</button>
      </div>
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
        proyectos: [
          // Ejemplo de datos de proyectos
        ],
        proyectoSeleccionado: null,
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
      proyectosFiltrados() {
        return this.proyectos.filter(proyecto =>
          proyecto.razon_social.toLowerCase().includes(this.buscar.toLowerCase())
        );
      }
    },
    methods: {
      verDetalles(proyecto) {
        this.proyectoSeleccionado = proyecto;
      },
      guardarCambios() {
        // Lógica para guardar cambios
      },
      volver() {
        this.proyectoSeleccionado = null;
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
  /* Estilos generales */
.inventario {
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

.btn-generar-reporte {
  background-color: #fca311;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.btn-generar-reporte:hover {
  background-color: #ffb703;
}

/* Tabla de inventario */
.tabla-inventario, .tabla-detalles {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.tabla-inventario th, .tabla-inventario td,
.tabla-detalles th, .tabla-detalles td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.tabla-inventario tr:hover, .tabla-detalles tr:hover {
  background-color: #f1f1f1;
}

/* Botones */
.btn-guardar, .btn-volver {
  background-color: #00509e;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.btn-guardar:hover, .btn-volver:hover {
  background-color: #003f7e;
}

  </style>
  