<template>
    <div class="container text-center mt-5">
      <div class="not-found">
        <h1 class="display-1 fw-bold text-danger animate__animated animate__fadeInDown">404</h1>
        <h2 class="text-secondary animate__animated animate__fadeInUp">¡Oops! Página no encontrada</h2>
        <p class="text-muted animate__animated animate__fadeInUp animate__delay-1s">
          La página que buscas no existe o fue movida. Pero no te preocupes, puedes volver al inicio. 😊
        </p>
        <i class="bi bi-exclamation-triangle display-3 text-warning animate__animated animate__pulse animate__infinite"></i>
        <br />
        <router-link to="/" class="btn btn-primary mt-4 animate__animated animate__fadeInUp animate__delay-2s">
          <i class="bi bi-house-door"></i> Volver al Inicio
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound",
  };
  </script>
  
  <style scoped>
  .not-found {
    padding: 50px 20px;
    max-width: 600px;
    margin: auto;
  }
  </style>
  