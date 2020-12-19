import Vue from 'vue';
import App from './App.vue';
import VueParticlesBg from "particles-bg-vue";
// Plugin cursor
import CursorFx from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
import router from './router'

// Install cursor
Vue.use(
    CursorFx
);

Vue.config.productionTip = false;
Vue.use(VueParticlesBg);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


console.log(`%c ________________________________________
<  Thanks for visiting my project  >
<   viktoriia.zakorchemna@gmail.com   >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----- |
                ||     ||`, "color: 	orchid; font-size: 16px;");



