<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/icons/logo copy.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">ALLIN</v-list-item-title>
            <v-list-item-subtitle>WEB</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="headerColor"
      :flat="!isScrolled && flat"
      dark
      class="px-15"
      :class="{ expand: !isLoggedIn && flat }"
    >
      <v-toolbar-title>
        <v-img src="@/assets/icons/logo copy.png" max-width="120px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn v-if="!isLoggedIn" text @click="$vuetify.goTo('#hero')">
          <span class="mr-2">Inicio</span>
        </v-btn>
        <v-btn v-if="!isLoggedIn" text @click="$vuetify.goTo('#features')">
          <span class="mr-2">Nosotros</span>
        </v-btn>
        <v-btn v-if="!isLoggedIn" text @click="$vuetify.goTo('#download')">
          <span class="mr-2">Servicios</span>
        </v-btn>
        <v-btn v-if="!isLoggedIn" text @click="$vuetify.goTo('#download')">
          <span class="mr-2">Contactanos</span>
        </v-btn>

        <v-btn
          v-if="!isLoggedIn"
          class="yellow darken-3"
          dark
          style="margin-right: 10px;"
          @click="goToLogin"
        >
          LOGIN
        </v-btn>
        
        <v-btn
          v-else
          class="red darken-3"
          dark
          style="margin-right: 10px;"
          @click="logout"
        >
          LOGOUT
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      isXs: false,
      items: [
        ["mdi-home-outline", "Inicio", "#hero"],
        ["mdi-information-outline", "Nosotros", "#features"],
        ["mdi-wallet-travel", "Servicios", "#download"],
        ["mdi-email-outline", "Contactanos", "#contact"],
      ],
      isLoggedIn: false, // Estado para verificar si el usuario está autenticado
      isScrolled: false // Estado para verificar si se ha hecho scroll
    };
  },
  computed: {
    headerColor() {
      // Cambia el color del header basado en el estado de scroll o autenticación
      if (this.isLoggedIn || this.isScrolled) {
        return '#1d2e55'; // Color sólido al estar logueado o hacer scroll
      }
      return this.color || 'transparent'; // Color transparente por defecto
    }
  },
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: 'Login' });
    },
    logout() {
      localStorage.removeItem('user'); // Elimina el usuario de localStorage
      this.isLoggedIn = false; // Actualiza el estado de autenticación
      this.$router.push({ name: 'Home' }); // Redirige a la página de inicio
    },
    onScroll() {
      // Cambia el estado de `isScrolled` según el desplazamiento de la página
      this.isScrolled = window.scrollY > 50; // Ajusta el valor para cambiar antes o después
    },
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
    checkAuthStatus() {
      const user = JSON.parse(localStorage.getItem('user'));
      this.isLoggedIn = !!user; // Cambia el estado según la existencia de un usuario autenticado
    }
  },
  watch: {
    isXs(value) {
      if (!value && this.drawer) {
        this.drawer = false;
      }
    },
  },
  mounted() {
    this.onResize();
    this.checkAuthStatus(); // Verifica si el usuario está autenticado al cargar el componente
    window.addEventListener("resize", this.onResize, { passive: true });
    window.addEventListener("scroll", this.onScroll, { passive: true }); // Escucha el evento de scroll
  },
  beforeDestroy() {
    // Remueve los listeners cuando el componente se destruye
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
