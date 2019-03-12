import Vue from 'vue';
import router from './router';
import './registerServiceWorker';

// @ts-ignore
import App from './components/app.vue';

import './assets/css/global.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
