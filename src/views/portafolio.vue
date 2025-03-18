<template>
<div>
  <Banner :imageSrc="imagenActual" />
  <div class="container mt-5">
      <h2 class="text-primary text-center mb-4">Portafolio de Servicios</h2>
      <p class="text-center">
        Aplicamos metodologías especializadas en análisis y diseño de sistemas informáticos, utilizando metodologías de misión crítica y basándonos en los estándares internacionales para lograr la máxima calidad en producto y servicio final.
      </p>
      
      <div class="row">
        <div v-for="service in services" :key="service.title" class="col-md-6 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title text-primary">{{ service.title }}</h5>
              <p class="card-text">{{ service.description }}</p>
              <ul>
                <li v-for="detail in service.details" :key="detail">{{ detail }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>
  </template>
  
  <script>
  import Banner from '../components/Banner.vue';
  export default {
    components: {
        Banner
    },
    methods: {
        cambiarImagen() {
            // Alternar entre imágenes dinámicamente
            this.imagenActual = '/imagenes/banner-portafolio.png' 
        }
    },
    data() {
      return {
        services: [
          {
            title: "Desarrollo de Software",
            description: "Desarrollo de software a medida con arquitectura escalable y adaptable a las necesidades empresariales.",
            details: [
              "Desarrollo de aplicaciones web y móviles.",
              "Integración de sistemas y API.",
              "Implementación de soluciones de inteligencia artificial.",
              "Optimización y modernización de software legado."
            ]
          },
          {
            title: "Corrección y Optimización de Código",
            description: "Análisis, depuración y optimización del código fuente para mejorar su rendimiento, seguridad y estabilidad.",
            details: [
              "Refactorización y mejora de código.",
              "Implementación de patrones de diseño eficientes.",
              "Evaluación de seguridad y auditoría de código.",
              "Reducción de deuda técnica en proyectos de software."
            ]
          },
          {
            title: "Mantenimiento de Computadores y Sistemas",
            description: "Servicio integral de mantenimiento preventivo y correctivo para garantizar la operatividad de los sistemas informáticos.",
            details: [
              "Limpieza física y optimización de rendimiento.",
              "Actualización y reparación de componentes.",
              "Implementación de medidas de seguridad informática.",
              "Respaldo y recuperación de datos."
            ]
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
  }
  .card:hover {
    transform: scale(1.05);
  }
  </style>
  