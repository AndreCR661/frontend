<template>
  <section class="pb-8 contact-section" id="contact">
    <!-- Título fuera del contenedor -->
    <h1 class="contact-title">CONTÁCTENOS</h1>

    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10" class="contact-content">
          <v-row justify="space-around">
            <v-col cols="12" sm="5" class="contact-details">
              <h3>TELÉFONO</h3>
              <p>961 853 953</p>
              <p>951 216 491</p>
            </v-col>
            <v-col cols="12" sm="5" class="contact-details">
              <h3>CORREO</h3>
              <p>consultasallin85@gmail.com</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/svg/borderWavesBlue.svg"/>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-image: url('@/assets/img/contact.webp'); /* Imagen de fondo */
  background-size: cover; /* Ajusta la imagen al tamaño del contenedor */
  background-position: center 70%; /* Centra la imagen */
  background-repeat: no-repeat;
  padding: 10rem 0rem; /* Ajuste de padding para dar espacio al título */
}

.contact-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(27, 66, 117, 0.5); /* Capa semi-transparente */
  z-index: 1;
}

/* Estilos para el título */
.contact-title {
  position: absolute;
  top: 3rem; /* Ajusta según la distancia que quieras del borde superior */
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
  text-align: center;
  z-index: 2; /* Asegura que esté encima de la capa de fondo */
}

.contact-content {
  position: relative;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente oscuro */
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  z-index: 2; /* Para asegurar que esté encima de la capa de fondo */
}

.contact-details {
  color: white;
}

.contact-details h3 {
  color: #ccc;
  margin-bottom: 0.5rem;
}

.contact-details p {
  margin: 0;
  font-size: 1.1rem;
  color: white;
}
</style>


