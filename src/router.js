import { createRouter, createWebHistory } from 'vue-router';
//import Home from './views/Home.vue';
//import About from './views/About.vue';
import Home from "./views/potada.vue"
import About from "./components/HelloWorld.vue"
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
