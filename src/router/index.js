import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/AppHome.vue';
import About from '@/views/About.vue';
import Brazil from '@/views/DestinationBrazil.vue';
import Hawaii from '@/views/DestinationHawaii.vue';
import Jamaica from '@/views/DestinationJamaica.vue';
import Panama from '@/views/DestinationPanama.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/brazil',
    name: 'Brazil',
    component: Brazil
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: Hawaii
  },
  {
    path: '/jamaica',
    name: 'Jamica',
    component: Jamaica
  },
  {
    path: '/panama',
    name: 'Panama',
    component: Panama
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
