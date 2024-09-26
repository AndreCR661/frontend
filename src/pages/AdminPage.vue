<template>
    <v-app>
      <!-- Header que siempre estará arriba -->
      <Head :color="color" :flat="flat" />
  
      <!-- Contenido principal con botones -->
      <div class="admin-content">
        <div class="admin-grid">
          <button class="btn-admin" @click="irAInventario">Reporte Inventario</button>
          <button class="btn-admin" @click="irAContabilidad">Reporte Contabilidad</button>
          <button class="btn-admin" @click="irAUsuarios">Gestión de Usuarios</button>
          <button class="btn-admin" @click="irAProveedores">Proveedores/Proyectos</button>
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
      <!-- Footer que siempre estará al fondo de la página -->
        <Foot/>
    </v-app>
  </template>
  
  <script>
  import Head from "@/components/NavigationEdit.vue";
  import Foot from "@/components/FooterEdit.vue";
  
  export default {
    components: {
      Head,
      Foot,
    },
    data: () => ({
        fab: null,
        color: "",
        flat: null,
    }),
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
    methods: {
      irAInventario() {
        // Lógica para ir a Inventario
      },
      irAContabilidad() {
        // Lógica para ir a Contabilidad
      },
      irAUsuarios() {
        // Lógica para ir a Gestión de Usuarios
      },
      irAProveedores() {
        // Lógica para ir a Proveedores/Proyectos
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
  /* Estilos del contenedor general */
  .admin-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Asegura que el footer esté al fondo */
  }
  
  /* Contenido principal que crece */
  .admin-content {
    background-image: url("~@/assets/img/bgMain.png");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  /* Estilo de la cuadrícula para los botones */
  .admin-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Dos columnas */
    grid-template-rows: repeat(2, 1fr); /* Dos filas */
    gap: 20px;
    justify-items: center;
    width: 80%; /* Ajusta el ancho de la cuadrícula */
  }
  
  .btn-admin {
    background-color: #fca311;
    color: white;
    border: none;
    padding: 40px 80px; /* Aumenta el tamaño de los botones */
    font-size: 24px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .btn-admin:hover {
    background-color: #ffb703;
  }
  
  </style>
  