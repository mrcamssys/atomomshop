<script setup>
import menuPortada from './components/menuPortada.vue';
import HelloWorld from './components/HelloWorld.vue'
import footerPrincipal from './components/footerPrincipal.vue';
</script>

<template>
  <div>
    <menuPortada/>
    <br>
    <HelloWorld />
    <br>
    <footerPrincipal />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
