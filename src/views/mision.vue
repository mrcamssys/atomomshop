<template>
  <div>
    <!-- Banner con imagen dinámica -->
    <Banner :imageSrc="imagenActual" />

    <div class="container mt-5">
      <div class="card shadow">
        <div class="card-body">
          <h1 class="card-title text-primary">Nuestra Misión</h1>

          <div class="mb-4">
            <p v-for="(item, index) in misionText" :key="index" class="text-muted">
              {{ item }}
            </p>
          </div>

          <div class="card bg-light p-3">
            <h5 class="text-secondary">Principios Claves</h5>
            <ul class="list-group list-group-flush">
              <li v-for="(aspecto, index) in principios" :key="index" class="list-group-item">
                {{ aspecto }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Botón para cambiar la imagen -->
    <div class="container text-center mt-4">
      <button @click="cambiarImagen" class="btn btn-outline-primary">Cambiar Imagen</button>
    </div>

    <br>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';

export default {
  components: {
    Banner
  },
  data() {
    return {
      imagenActual: '/imagenes/portada/ejp1.webp', // Imagen inicial del banner
      misionText: [
        "Somos una empresa comprometida con la excelencia en el desarrollo de software, mantenimiento de sistemas informáticos y optimización tecnológica.",
        "Brindamos soluciones innovadoras que potencian la eficiencia y competitividad de nuestros clientes, integrando herramientas digitales avanzadas con estrategias de crecimiento sostenible.",
        "Nuestro equipo de profesionales altamente capacitados y respaldados por plataformas tecnológicas de vanguardia nos permite generar un impacto significativo en la transformación digital de empresas y organizaciones.",
        "Promovemos la modernización tecnológica a través del uso de software especializado, garantizando accesibilidad, seguridad y mejora continua en los procesos empresariales y gubernamentales.",
        "Creemos en la responsabilidad social de nuestra compañía, por ello todas nuestras actividades se orientan a este fin. Todas nuestras actividades se basan en los siguientes aspectos:"
      ],
      principios: [
        "Comunicación abierta, honesta y transparente con los clientes.",
        "Diseño de soluciones en conjunto con el cliente.",
        "Transferencia de conocimiento para evitar dependencia del cliente.",
        "Innovación en productos y servicios específicos para cada necesidad.",
        "Trabajo en red y alianzas estratégicas.",
        "Confidencialidad absoluta de la información."
      ]
    };
  },
  methods: {
    cambiarImagen() {
      // Alternar entre imágenes dinámicamente
      this.imagenActual = '/imagenes/banner-mision.webp'
    }
  }
};
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
