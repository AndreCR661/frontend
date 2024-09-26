// src/main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Importa el router
import vuetify from './plugins/vuetify'; // Importa Vuetify

Vue.config.productionTip = false;

new Vue({
  router, // Usa el router en la instancia principal de Vue
  vuetify, // Usa Vuetify en la instancia principal de Vue
  render: h => h(App),
}).$mount('#app');
