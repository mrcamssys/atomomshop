<template>
  <div class="maintenance-container">
    <div class="maintenance-card">
      <img src="/imagenes/logo.png" alt="Logo" class="logo" />
      <h1>Estamos en mantenimiento</h1>
      <p>Volveremos pronto con mejoras para ti.</p>
      <div class="loading-spinner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaintenancePage",
};
</script>

<style scoped>
.maintenance-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #1F1F1F; /* Color extraído del manual de marca */
}

.maintenance-card {
  text-align: center;
  background: #F2F2F2; /* Color extraído del manual de marca */
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.logo {
  width: 150px;
  margin-bottom: 1rem;
}

h1 {
  color: #E63946; /* Color extraído del manual de marca */
  font-size: 2rem;
}

p {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #E63946; /* Color extraído del manual de marca */
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
