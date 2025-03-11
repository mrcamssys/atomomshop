<template>
    <div id="carouselExample" class="carousel slide carousel-fade">
      
      <div class="carousel-inner">
        <div v-for="(item, index) in items" :key="index" class="carousel-item" :class="{ active: index === 0 }">
          <div 
            class="carousel-image text-white text-center"
            :style="{ backgroundImage: 'url(' + item.image + ')' }"
          >
          <div class="container">
            <div class="overlay p-4">
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
              <a :href="item.link" class="btn btn-primary" target="_blank">Ver Más</a>
            </div>
          </div>
            
          </div>
        </div>
      </div>
  
      <!-- Controles del carrusel -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Lista de imágenes desde "public/"
  const items = ref([
    {
      title: 'Consultoría en Tecnología y Desarrollo de Software',
      description: 'Optimiza tu negocio con soluciones digitales a medida. Brindamos servicios de desarrollo de software, implementación de sistemas y consultoría en TI para maximizar la eficiencia y seguridad de tus procesos empresariales.',
      image: '/imagenes/portada/ejp1.webp',
      link: '#'
    },
    {
      title: 'Diseño Especializado',
      description: 'Soluciones innovadoras para proyectos de alto impacto. Nuestro equipo de ingenieros ofrece servicios de diseño estructural, modelado 3D y planificación técnica para garantizar la calidad y viabilidad de tus proyectos.',
      image: '/imagenes/portada/ejp2.webp',
      link: '#'
    },
    {
      title: 'Transformación Digital y Automatización',
      description: 'Integramos tecnología avanzada para potenciar tu empresa. Ofrecemos consultoría en transformación digital, automatización de procesos y soluciones en la nube para mejorar la productividad y competitividad de tu negocio.',
      image: '/imagenes/portada/ejp3.webp',
      link: '#'
    }
  ]);
  
  // Iniciar el carrusel cuando el componente se monta
  onMounted(() => {
    const carouselElement = document.getElementById('carouselExample');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 5000, // Cambia cada 3 segundos
        ride: 'carousel'
      });
    }
  });
  </script>
  
  <style scoped>
  /* Efecto de transición progresiva */
  .carousel-item {
    transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
    opacity: 0;
    transform: scale(0.98);
  }
  
  /* Imagen activa con transición */
  .carousel-item.active {
    opacity: 1;
    transform: scale(1);
  }
  
  .carousel-image {
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 1.5s ease-in-out;
  }
  
  .overlay {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
  }
  </style>
  