<template>
    <div class="container mt-5">
      <div class="card shadow-lg p-4 text-center">
        <h2 class="mb-3">Contáctanos</h2>
        <p>Si tienes alguna duda o consulta, escríbenos por WhatsApp.</p>
  
        <div class="contact-info mb-4">
          <p><i class="bi bi-envelope"></i> Email: costumer.mbproyect@gmail.com</p>
          
        </div>
  
        <a 
          :href="'https://wa.me/3233216452?text=Hola,%20necesito%20más%20información'"
          class="btn btn-success btn-lg"
          target="_blank"
        >
          <i class="bi bi-whatsapp"></i> Chatear por WhatsApp
        </a>
      </div>
    </div>
    <br><br>
  </template>
  
  <script>
  export default {
    name: "Contacto",
  };
  </script>
  
  <style scoped>
  .card {
    max-width: 500px;
    margin: auto;
    border-radius: 15px;
  }
  .contact-info p {
    margin: 5px 0;
    font-size: 1.1rem;
  }
  </style>
  