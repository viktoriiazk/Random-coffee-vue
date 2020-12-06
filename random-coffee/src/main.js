import Vue from 'vue';
import App from './App.vue';
import VueParticlesBg from "particles-bg-vue";
 // Plugin cursor
 import CursorFx from '@luxdamore/vue-cursor-fx';
 import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';

 // Install cursor
 Vue.use(
     CursorFx
 );

Vue.config.productionTip = false;
Vue.use(VueParticlesBg);

new Vue({
  render: h => h(App),
}).$mount('#app');

