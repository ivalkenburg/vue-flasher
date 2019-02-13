import Vue from 'vue';
import App from './App.vue';
import VueNotificationRenderless from 'vue-notification-renderless';

Vue.use(VueNotificationRenderless);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
