<template>
    <v-app>
      <!-- Barra de navegación -->
      <navigation :color="color" :flat="flat" />
  
      <v-main class="home-page pt-0">
        <!-- Sección inicial -->
        <HomeSection />
  
        <!-- Secciones adicionales -->
        <carrusel />
        <about />
        <!-- <contact /> -->
      </v-main>
  
      <!-- Botón flotante para ir arriba -->
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
  
      <!-- Pie de página -->
      <foote />
    </v-app>
  </template>
  
  <script>
  import navigation from "@/components/global/HeaderNav.vue";
  import foote from "@/components/global/FooterEdit.vue";
  import HomeSection from "@/components/main/HomeSection.vue";
  import about from "@/components/main/AboutSection";

  import carrusel from "@/components/main/CarruselSection.vue";
  
  export default {
    name: "HomePage",
    components: {
      navigation,
      foote,
      HomeSection,
      about,
      carrusel,
    },
    data: () => ({
      fab: null,
      color: "",
      flat: null,
    }),
    created() {
      const top = window.pageYOffset || 0;
      if (top <= 60) {
        this.color = "transparent";
        this.flat = true;
      }
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
    methods: {
      onScroll(e) {
        if (typeof window === "undefined") return;
        const top = window.pageYOffset || e.target.scrollTop || 0;
        this.fab = top > 60;
      },
      toTop() {
        this.$vuetify.goTo(0);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Fondo general */
  .v-main {
    background-image: url("~@/assets/img/bgMain.png");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  
  .home-page {
    display: flex;
    flex-direction: column;
  }
  </style>
  