<template>
  <v-app>
    <!-- Header -->
    <Head :color="color" :flat="flat" />

    <!-- Contenido principal de la página de administración -->
    <v-container class="admin-container">
      <h2>Panel de Administración</h2>

      <!-- Botones para acceder a las distintas secciones -->
      <div class="admin-grid">
        <v-btn class="btn-admin" color="primary" @click="ReporteInventario">
          Reporte Inventario
        </v-btn>
        <v-btn class="btn-admin" color="primary" @click="ReporteContabilidad">
          Reporte Contabilidad
        </v-btn>
        <v-btn class="btn-admin" color="primary" @click="GestionUsuarios">
          Gestión de Usuarios
        </v-btn>
        <v-btn class="btn-admin" color="primary" @click="GestionProveedores">
          Proveedores/Proyectos
        </v-btn>
      </div>
    </v-container>

    <!-- Footer -->
    <Foot />
  </v-app>
</template>

<script>
import Head from "@/components/global/HeaderNav.vue";
import Foot from "@/components/global/FooterEdit.vue";

export default {
  components: {
    Head,
    Foot
  },
  data() {
    return {
      color: '#1d2e55',
      flat: false
    };
  },
  methods: {
    ReporteInventario() {
      // Navegar a la página de Reporte de Inventario
      
    },
    ReporteContabilidad() {
      // Navegar a la página de Reporte de Contabilidad
      
    },
    GestionUsuarios() {
      // Navegar a la página de Gestión de Usuarios
      this.$router.push({ name: 'UserManagement' });
    },
    GestionProveedores() {
      // Navegar a la página de Proveedores/Proyectos
      alert('Funcionalidad Proveedores/Proyectos no implementada aún');
    }
  }
};
</script>

<style scoped>
.admin-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.admin-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 800px;
}

.btn-admin {
  padding: 20px;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  text-align: center;
  transition: background-color 0.3s ease;
}

.btn-admin:hover {
  background-color: #394a75;
}
</style>
