<template>
  <v-app>
    <Head :color="color" :flat="flat" />

    <v-main class="user-management">
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
        <h2>Gestión de Usuarios</h2>

        <!-- Botón para agregar un nuevo usuario -->
        <v-btn color=#1f2e55 dark class="mb-4" @click="openAddUserDialog">
          Agregar Nuevo Usuario
        </v-btn>

        <!-- Tabla de usuarios -->
        <v-data-table
          :headers="headers"
          :items="users"
          class="elevation-1"
          item-key="id"
        >
          <!-- Slot personalizado para la columna 'actions' -->
          <template #item="{ item }">
          <template v-if="item">
            <v-btn color="primary" icon @click="editUser(item)" v-if="item.role !== 'admin'">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn color="red" icon @click="deleteUser(item)" v-if="item.role !== 'admin'">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </template>
        </v-data-table>

        <!-- Diálogo para agregar o editar usuario -->
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ editMode ? 'Editar Usuario' : 'Agregar Usuario' }}</span>
            </v-card-title>

            <v-card-text>
              <v-form ref="userForm" v-model="valid">
                <v-text-field
                  v-model="form.username"
                  label="Usuario"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="form.email"
                  label="Correo Electrónico"
                  required
                  type="email"
                ></v-text-field>
                <v-text-field
                  v-model="form.password"
                  label="Contraseña"
                  required
                  :type="showPassword ? 'text' : 'password'"
                >
                  <template #append>
                    <v-icon @click="showPassword = !showPassword">
                      {{ showPassword ? "mdi-eye" : "mdi-eye-off" }}
                    </v-icon>
                  </template>
                </v-text-field>
                <v-select
                  v-model="form.role"
                  :items="roles"
                  label="Rol"
                  required
                ></v-select>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDialog">
                Cancelar
              </v-btn>
              <v-btn color="blue darken-1" text @click="saveUser">
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>

    <Foot />
  </v-app>
</template>

<script>
import Head from "@/components/global/HeaderNav.vue";
import Foot from "@/components/global/FooterEdit.vue";
import axios from "@/plugins/axios";

export default {
  components: { Head, Foot },
  data() {
    return {
      dialog: false,
      editMode: false,
      valid: false,
      showPassword: false,
      headers: [
        { text: "Username", value: "username" },
        { text: "Email", value: "email" },
        { text: "Role", value: "role" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      users: [],
      roles: [],
      form: {
        id: null,
        username: "",
        email: "",
        password: "",
        role: "",
      },
    };
  },
  methods: {
    goToAdminPanel() {
      this.$router.push({ name: "Admin" }); // Redirige al panel de administrador
    },
    async fetchUsers() {
      try {
        const response = await axios.get("/users");
        this.users = response.data;
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    },
    async fetchRoles() {
      try {
        const response = await axios.get("/roles");
        this.roles = response.data.map((role) => role.name);
      } catch (error) {
        console.error("Error al obtener roles:", error);
      }
    },
    openAddUserDialog() {
      this.resetForm();
      this.dialog = true;
      this.editMode = false;
    },
    closeDialog() {
      this.dialog = false;
      this.resetForm();
    },
    async saveUser() {
      if (this.$refs.userForm.validate()) {
        try {
          if (this.editMode) {
            await axios.put(`/users/${this.form.id}`, this.form);
            const index = this.users.findIndex((user) => user.id === this.form.id);
            if (index !== -1) this.users.splice(index, 1, { ...this.form });
          } else {
            const response = await axios.post("/users", this.form);
            this.users.push(response.data);
          }
          this.closeDialog();
        } catch (error) {
          console.error("Error al guardar usuario:", error);
        }
      }
    },
    editUser(user) {
      this.form = { ...user };
      this.dialog = true;
      this.editMode = true;
    },
    async deleteUser(user) {
      if (confirm(`¿Estás seguro de que deseas eliminar a ${user.username}?`)) {
        try {
          await axios.delete(`/users/${user.id}`);
          this.users = this.users.filter((u) => u.id !== user.id);
        } catch (error) {
          console.error("Error al eliminar usuario:", error);
        }
      }
    },
    resetForm() {
      this.form = { id: null, username: "", email: "", password: "", role: "" };
      this.showPassword = false;
    },
  },
  async created() {
    await this.fetchUsers();
    await this.fetchRoles();
  },
};
</script>

<style scoped>
.user-management {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

v-main {
  flex: 1;
  padding-top: 64px;
}

h2 {
  margin-bottom: 20px;
}

.elevation-1 {
  margin-bottom: 30px;
}
</style>
