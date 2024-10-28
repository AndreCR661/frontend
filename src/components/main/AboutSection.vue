<template>
  <section class="pb-8 about-section" id="contact">
    <h1 class="about-title">SOBRE NOSOTROS</h1>
    <div class="about-overlay">
      <div class="about-content">
        <p>
          Allin Consultores S.A.C. es una consultora minera especializada en brindar soluciones integrales a empresas del sector minero. 
          Ofrecemos servicios de asesoría técnica, cumplimiento normativo, y gestión de proyectos para asegurar la eficiencia operativa y el éxito de tus
          actividades mineras. Nuestro equipo de expertos te acompaña en cada etapa, desde la planificación hasta la ejecución, garantizando el cumplimiento 
          de todas las regulaciones y optimizando tus procesos.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
  background-image: url('@/assets/img/carrusel1.jpg'); /* Ruta de tu imagen */
  background-size: cover;
  background-position: center; /* Ajuste para mostrar más de la parte inferior */
 
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(27, 66, 117, 0.5); /* Capa semi-transparente */
  z-index: 1;
}

.about-overlay {
  background-color:rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 800px; /* Limita el ancho del contenido */
  color: white;
  margin-bottom: 2rem;
  margin-top: 2rem;
  z-index: 2;
}

.about-title {
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

.about-content p {
  font-size: 1rem;
  line-height: 1.6;
}

</style>
