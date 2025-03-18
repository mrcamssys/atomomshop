import { createRouter, createWebHistory } from 'vue-router';
//import Home from './views/Home.vue';
//import About from './views/About.vue';
import Home from "./views/potada.vue"
//import About from "./components/HelloWorld.vue"
import About from "./views/contacto.vue"

import vision from "./views/Vision.vue"
import mision from "./views/mision.vue"
import portafolio from "./views/portafolio.vue"
import NotFound from './views/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/vision', component: vision },
  { path: '/mision', component: mision },
  { path: '/portafolio', component: portafolio },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound } // Ruta 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
