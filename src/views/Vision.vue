<template>
    <div>
        <Banner :imageSrc="imagenActual" />
        <div class="container mt-5">
            <div class="card shadow">
                <div class="card-body">
                    <h1 class="card-title text-primary">Nuestra Visión</h1>

                    <p>Ser un referente en soluciones tecnológicas innovadoras, ofreciendo productos y servicios que
                        transformen digitalmente a las empresas y organizaciones. Nos esforzamos por contribuir a un
                        mundo más eficiente, seguro y sostenible mediante el uso de tecnologías avanzadas y metodologías
                        ágiles.</p>

                    <p>Buscamos fortalecer el ecosistema tecnológico promoviendo la educación digital, la automatización
                        inteligente y el desarrollo de software de alta calidad que impulse el crecimiento de nuestros
                        clientes.</p>

                    <ul class="list-group mt-3">
                        <li class="list-group-item">Nos esforzamos por contribuir a un mundo más eficiente, seguro y
                            sostenible mediante el uso de tecnologías avanzadas y metodologías ágiles.</li>
                        <li class="list-group-item">Buscamos fortalecer el ecosistema tecnológico promoviendo la
                            educación
                            digital.</li>
                        <li class="list-group-item">Fomentamos la automatización inteligente en procesos empresariales.
                        </li>
                        <li class="list-group-item">Desarrollamos software de alta calidad que impulse el crecimiento de
                            nuestros clientes.</li>
                    </ul>
                    <br>
                </div>
            </div>
        </div>
        <br>
    </div>

</template>

<script>
import Banner from '../components/Banner.vue';

export default {
    name: "VisionSection",

    components: {
        Banner
    },
    methods: {
        cambiarImagen() {
            // Alternar entre imágenes dinámicamente
            this.imagenActual = '/imagenes/banner-vision.webp'
        }
    }
};
</script>

<style scoped></style>
