import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/AppHome.vue';

const routes = [
  // static path to home page
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // dynamic paths to every destination in the data.json
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: route => ({
      id: parseInt(route.params.id)
    }),
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/DestinationExperience.vue'),
        props: route => ({
          ...route.params,
          id: parseInt(route.params.id),
        })
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
