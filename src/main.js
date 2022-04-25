import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import AppLink from '@/components/AppLink.vue';

createApp(App)
// global component AppLink
.component( 'AppLink', AppLink)
.use(router)
.mount('#app');
