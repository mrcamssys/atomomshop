<template>
    <div class="container mt-4">
      <div class="row">
        <div v-for="(item, index) in items" :key="index" class="col-md-6 mb-4">
          <div class="card text-white bg-dark">
            <div 
              class="card-img-overlay d-flex flex-column justify-content-between"
              :style="{ backgroundImage: 'url(' + item.image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }"
            >
              <h5 class="card-title p-2 bg-dark bg-opacity-75">{{ item.title }}</h5>
              <div class="p-2 bg-dark bg-opacity-50 text-center">
                <a :href="item.link" class="btn btn-primary" target="_blank">Ver Más</a>
                <a :href="item.extraLink" class="btn btn-secondary ms-2" target="_blank">Detalles</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const items = ref([
    {
      title: 'Ejemplo 1',
      image: 'https://via.placeholder.com/400x300/ff7f7f/333333?text=Imagen+1',
      link: 'https://example.com',
      extraLink: 'https://example.com/details'
    },
    {
      title: 'Ejemplo 2',
      image: 'https://via.placeholder.com/400x300/7f7fff/333333?text=Imagen+2',
      link: 'https://example.com',
      extraLink: 'https://example.com/details'
    },
    {
      title: 'Ejemplo 3',
      image: 'https://via.placeholder.com/400x300/7fff7f/333333?text=Imagen+3',
      link: 'https://example.com',
      extraLink: 'https://example.com/details'
    },
    {
      title: 'Ejemplo 4',
      image: 'https://via.placeholder.com/400x300/f7f77f/333333?text=Imagen+4',
      link: 'https://example.com',
      extraLink: 'https://example.com/details'
    }
  ]);
  </script>
  
  <style scoped>
  .card {
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .card-img-overlay {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  </style>
  