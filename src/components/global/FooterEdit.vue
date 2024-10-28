<template>
  <v-footer padless class="footer-dark">
    <v-card flat tile class="white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>ALLIN CONSULTORES</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.footer-dark {
  background-color: #1b2e55 !important; /* Asegura el color negro */
  color: white;
}
.v-card {
  width: 100%;
  background-color: transparent !important; /* Mantiene el fondo del card transparente */
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      { text: "mdi-facebook", link: "" },
      { text: "mdi-twitter", link: "" },
      { text: "mdi-linkedin", link: "" },
      { text: "mdi-instagram", link: "" },
    ],
  }),
};
</script>
