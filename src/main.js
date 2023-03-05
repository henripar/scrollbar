import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';

import plausible from './plugins/plausible';

const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};

createApp(App)
  .use(plausible, {
    domain: 'scrollbar.app',
    hashMode: true,
    trackLocalhost: false,
  })
  .directive('click-outside', clickOutside)
  .mount('#app');
