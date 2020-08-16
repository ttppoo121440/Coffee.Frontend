import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/plugins/VueAwesome';
import '@/plugins/VueLoading';
import '@/plugins/VueNotification';
import '@/plugins/VeeValidate';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
