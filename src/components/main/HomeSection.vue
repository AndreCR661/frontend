<template>
  <section id="home-section">
    <v-parallax dark src="@/assets/img/principal.png" height="750">
      <v-row align="center" justify="space-between" class="full-height">
        <!-- Texto pegado al borde izquierdo -->
        <v-col cols="12" md="6" xl="8" class="text-section">
          <h1 class="display-2 font-weight-bold mb-4">ALLIN CONSULTORES S.A.C.</h1>
          <h1 class="font-weight-light">Trabaja con NOSOTROS</h1>
          <v-btn
            rounded
            large
            dark
            @click="$vuetify.goTo('#carrusel')"
            class="mt-5"
          >
            Empieza con Nosotros
            <v-icon class="ml-2">mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>

        <!-- Widget a la derecha -->
        <v-col cols="12" md="6" xl="4" class="widget-section">
          <!-- Título encima del widget -->
          <h2 class="widget-title">Precio internacional del oro KITCO</h2>
          <TradingViewWidgets />
        </v-col>
      </v-row>
    </v-parallax>
  </section>
</template>

<script>
import TradingViewWidgets from "@/components/main/TradingViewWidgets.vue";

export default {
  components: {
    TradingViewWidgets,
  },
};
</script>

<style scoped>
#home-section {
  position: relative;
  z-index: 0;
}

/* Centrar el texto verticalmente y alinearlo a la izquierda */
.full-height {
  height: 100%; /* Asegura que el contenido ocupe toda la altura disponible */
}

.text-section {
  text-align: left; /* Alinea el texto a la izquierda */
  padding-left: 1rem; /* Agrega un pequeño espacio del borde */
  margin: 0; /* Elimina márgenes extra */
  display: flex;
  flex-direction: column;
}

.v-parallax__image {
  object-fit: cover; /* Asegura que la imagen de fondo se ajuste correctamente */
}

.widget-section {
  display: flex;
  flex-direction: column; /* Asegura que el título y el widget estén apilados verticalmente */
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center; /* Centra el texto del título */
}

.widget-title {
  margin-bottom: 1rem; /* Espacio entre el título y el widget */
  font-size: 1.5rem; /* Ajusta el tamaño del texto */
  font-weight: bold;
  color: #fff; /* Asegura que el texto sea visible en el tema oscuro */
}
</style>
