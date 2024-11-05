<template>
  <section class="carrusel-section" id="section">
    <v-carousel hide-delimiter-background height="500px">
      <!-- carrusel Items -->
      <v-carousel-item
        v-for="(slide, index) in slides"
        :key="index"
        :src="slide.img"
      >
        <!-- Capa azul translúcida -->
        <div class="blue-overlay"></div>

        <!-- Título centrado en la parte superior del carrusel -->
        <h1 class="carrusel-title">{{ slide.title }}</h1>

        <!-- Contenido con fondo semitransparente -->
        <div class="carrusel-content-overlay">
          <p class="carrusel-subtitle">{{ slide.subtitle }}</p>
        </div>

        <!-- Botón de acción centrado en la parte inferior -->
        <div class="carrusel-button-container">
          <v-btn
            color="warning"
            dark
            rounded
            large
            @click="navigateTo(slide.link)"
            class="carrusel-button"
          >
            VER MÁS
            <v-icon class="ml-2">mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  name: "CustomCarousel",
  data() {
    return {
      slides: [
        {
          img: require('@/assets/carrusel/carrusel1.jpg'),
          title: "ACTIVACIÓN DE REINFO",
          subtitle: "¡Activa tu REINFO con nosotros! Solo necesitas tu DNI y te ayudamos con el resto.",
          link: "/"
        },
        {
          img: require('@/assets/carrusel/carrusel1.jpg'),
          title: "ELABORACIÓN DE IGAFONES",
          subtitle: "Realiza tus igafones correctivos y preventivos sin complicaciones.",
          link: "/"
        },
        {
          img: require('@/assets/carrusel/carrusel1.jpg'),
          title: "TRASLADO",
          subtitle: "¡Realiza el traslado de tu concesión de manera rápida y sencilla con nosotros! Nos encargamos de todo el proceso para que cumplas con la normativa sin complicaciones",
          link: "/"
        },
        {
          img: require('@/assets/carrusel/carrusel1.jpg'),
          title: "CAMBIO DE PERSONA JURIDICA A NATURAL",
          subtitle: "Cambia de oersona natural a jurídica con nosotros en solo 30 días habiles. Simplificamos todo el proceso para que puedas operar bajo una empresa formal sin complicaciones.",
          link: "/"
        },
        {
          img: require('@/assets/carrusel/carrusel1.jpg'),
          title: "ÁREA CONTABLE",
          subtitle: "Nuestro equipo de contadores especializados asegura un control exhaustivo de tus finanzas, garantizando que cumplas con todas las normativas fiscales y tributarias.",
          link: "/"
        },
        {
          img: require('@/assets/carrusel/carrusel1.jpg'),
          title: "RECONSTRUCCIÓN CONTABLE",
          subtitle: "Nuestro equipo de contadores especializados asegura un control exhaustivo de tus finanzas, garantizado que cumplas con todas las normativas fiscales y tributarias.",
          link: "/"
        }
        // Añade más slides si es necesario
      ]
    };
  },
  methods: {
    navigateTo(link) {
      this.$router.push(link);
    }
  }
};
</script>

<style scoped>
:root {
  --overlay-height: auto; /* Permite que el overlay se ajuste dinámicamente */
}


.carrusel-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Overlay azul */
.blue-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(27, 66, 117, 0.5);
  z-index: 1;
}

/* Estilo del título */
.carrusel-title {
  font-family: 'Roboto Slab', serif;
  position: absolute;
  font-weight: 700;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  font-weight: bold;
  z-index: 2;
  margin: 0;
}

/* Contenido con fondo semitransparente */
.carrusel-content-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 800px;
  color: white;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  height: var(--overlay-height); /* Usar altura dinámica */
}


.carrusel-subtitle {
  font-family: 'Roboto Slab', serif;
  font-size: 2rem;
  line-height: 1.6;
}

/* Contenedor del botón */
.carrusel-button-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: calc(var(--overlay-height) + 10rem); /* Coloca el botón 2rem debajo */
  z-index: 2;
}

/* Estilo del botón */
.carrusel-button {
  font-family: 'Roboto Slab', serif;
  font-weight: bold;
  
}
</style>
