import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/AppHome.vue';
import sourceData from '@/data.json';

const routes = [
  // static path to home page
  {
    path: '/',
    name: 'Home',
    component: Home,
    // adding an alias
    alias: '/home'
  },
  // adding a rederict with /start to Home
  { path: '/start', redirect:{name:'Home'}},

  // Dynamic paths with meta requiresauth
  // protected page
  {
    path: '/protected',
    name: 'protected',
    components: {
      default: () => import('@/views/AppProtected.vue'),
      LeftSideBar: () => import('@/components/LeftSideBar.vue'),

    },
    meta: {
      requiresAuth: true,
    }
  },

  // login page path
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/AppLogin.vue')
  },

  // Invoices page
  {
    path: '/invoices',
    name: 'invoices',
    components: {
      default: () => import('@/views/AppInvoices.vue'),
      LeftSideBar: () => import('@/components/LeftSideBar.vue'),
    },
    meta: {
      requiresAuth: true,
    }
  },


  // dynamic paths to every destination in the data.json
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: route => ({
      id: parseInt(route.params.id)
    }),
    // Route guard(per route)
    beforeEnter(to){
      const exist = sourceData.destinations.find(destination => destination.id === +(to.params.id));
      if(!exist) return {
        name: 'NotFound',
        // allows keeping the url while rendering a different page
        params: { pathMatch: to.path.split('/').slice(1) },
        query: to.query,
        hash: to.hash
      };
    },

    // nested route
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
  scrollBehavior (to, from, savedPosition){
    return savedPosition || new Promise(resolve => {
      setTimeout(() => resolve({top: 0, behavior:'smooth'}), 1000);
    });
  }
});

// global navigation guard
router.beforeEach((to) => {
  if(to.meta.requiresAuth && !window.user){
    // ask login if not already logged in
    return {name:'login', query:{redirect: to.fullPath}}; //redirect in case we try to acces a page that needs authorizathion
  }
});
export default router;
