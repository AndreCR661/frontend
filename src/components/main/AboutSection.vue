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
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem; /* Ajuste para evitar que el contenido toque el título */
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

.about-title {
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  position: absolute;
  top: 1rem; /* Ajusta la distancia desde el borde superior */
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
  text-align: center;
  z-index: 2; /* Asegura que esté encima de la capa de fondo */
  margin: 0; /* Elimina cualquier margen que agregue espacio innecesario */
}

.about-overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 800px;
  color: white;
  margin-top: 3rem; /* Ajusta el margen superior para separar del título */
  z-index: 2;
}

.about-content p {
  font-size: 1rem;
  line-height: 1.6;
}


</style>
