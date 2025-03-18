<template>
    <div class="container-fluid p-0">
      <div class="banner">
        <img :src="imageSrc" alt="Banner" class="img-fluid w-100 banner-image">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .banner {
    height: 300px; /* Ajusta la altura según sea necesario */
    overflow: hidden;
  }
  
  .banner-image {
    height: 100%;
    object-fit: cover; /* Asegura que la imagen cubra todo el banner */
  }
  </style>