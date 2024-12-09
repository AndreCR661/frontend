<template>
  <v-app>
    <Head :color="color" :flat="flat" />
    <!-- Botón para regresar al panel del administrador -->
    <v-main class="gestion-p">
      <v-container>
        <v-btn
          class="mb-4"
          color="#1f2e55"
          dark
          @click="goToAdminPanel"
        >
          <v-icon left>mdi-arrow-left</v-icon>
          Volver al Panel de Administración
        </v-btn>
        <!-- Título de la sección -->
        <h2>Gestión de Proveedores y Proyectos</h2>

        <!-- Tabla de proveedores y proyectos -->
          <v-data-table
            :headers="headers"
            :items="items"
            item-value="id"
            class="elevation-1"
          >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Proveedores y Proyectos</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="openDialog">Agregar Nuevo</v-btn>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn color="warning" small @click="editItem(item)">Editar</v-btn>
            <v-btn color="error" small @click="deleteItem(item)">Eliminar</v-btn>
          </template>
        </v-data-table>
      </v-container>

      <!-- Diálogo para agregar o editar -->
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">
              {{ dialogTitle }}
            </span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <!-- Selección entre Proveedor o Proyecto -->
              <v-select
                v-model="editedItem.type"
                :items="['Proveedor', 'Proyecto']"
                label="Tipo"
                required
                @change="resetFields"
              ></v-select>

              <!-- Campos según el tipo -->
              <v-text-field
                v-model="editedItem.name"
                label="Nombre"
                required
              ></v-text-field>
              <v-text-field
                v-model="editedItem.email"
                label="Correo Electrónico"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-if="editedItem.type === 'Proyecto'"
                v-model="editedItem.direction"
                label="Dirección"
                required
              ></v-text-field>
              <v-text-field
                v-if="editedItem.type === 'Proyecto'"
                v-model="editedItem.ruc"
                label="RUC"
                type="number"
                required
              ></v-text-field>
              <v-textarea
                v-if="editedItem.type === 'Proyecto'"
                v-model="editedItem.description"
                label="Descripción"
                rows="4"
              ></v-textarea>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="saveItem">Guardar</v-btn>
            <v-btn color="grey darken-1" text @click="closeDialog">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>

    <Foot />
  </v-app>
</template>

<script>
import Head from "@/components/global/HeaderNav.vue";
import Foot from "@/components/global/FooterEdit.vue";
//import axios from "@/plugins/axios";

export default {
  components: { Head, Foot },
  data() {
    return {
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Tipo', value: 'type' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      items: [], // Lista de proveedores y proyectos
      dialog: false,
      editedIndex: -1,
      editedItem: {
        type: '',
        name: '',
        email: '',
        direction: '',
        ruc: null,
        description: '',
      },
      defaultItem: {
        type: '',
        name: '',
        email: '',
        direction: '',
        ruc: null,
        description: '',
      },
    };
  },
  computed: {
    dialogTitle() {
      return this.editedIndex === -1 ? 'Agregar Nuevo' : 'Editar';
    },
  },
  methods: {
    // Navegar de regreso al panel del administrador
    goToAdminPanel() {
      this.$router.push({ name: "Admin" }); // Redirige al panel de administrador
    },
    // Resetear campos según el tipo seleccionado
    resetFields() {
      if (this.editedItem.type === 'Proveedor') {
        this.editedItem = { ...this.defaultItem, type: 'Proveedor' };
      }
    },
    // Abrir el diálogo
    openDialog() {
      this.editedItem = { ...this.defaultItem };
      this.editedIndex = -1;
      this.dialog = true;
    },
    // Cerrar el diálogo
    closeDialog() {
      this.dialog = false;
    },
    // Guardar el nuevo o editar
    saveItem() {
      if (this.editedIndex === -1) {
        // Crear un nuevo item (llamada al backend)
        this.addNewItem(this.editedItem);
      } else {
        // Editar un item existente (llamada al backend)
        this.updateItem(this.editedItem);
      }
      this.dialog = false;
    },
    // Simular la creación
    addNewItem(item) {
      // Aquí haces la llamada a tu backend
      this.items.push({ ...item, id: this.items.length + 1 });
    },
    // Simular la actualización
    updateItem(item) {
      Object.assign(this.items[this.editedIndex], item);
    },
    // Editar un item
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
    },
    // Eliminar un item
    deleteItem(item) {
      if (confirm('¿Estás seguro de eliminar este registro?')) {
        // Aquí haces la llamada al backend para eliminar
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
