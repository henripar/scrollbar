import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';

import plausible from './plugins/plausible';

createApp(App)
  .use(plausible, {
    domain: 'scrollbar.app',
    hashMode: true,
    trackLocalhost: false,
  })
  .mount('#app');
