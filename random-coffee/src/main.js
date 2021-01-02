import Vue from 'vue';
import App from './App.vue';
import VueParticlesBg from "particles-bg-vue";
// Plugin cursor
import CursorFx from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
import router from './router';
import Vuex from 'vuex';

// Install cursor
Vue.use(
    CursorFx
);
Vue.use(Vuex);

Vue.config.productionTip = false;
Vue.use(VueParticlesBg);

const store = new Vuex.Store({
  state: {
    user: null,
    token: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  getters: {
    // isLoggedIn(state) {
    //   return !!state.token;
    // }
  },
});

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app');




console.log(`%c ________________________________________
<  Thanks for visiting my project  >
<   viktoriia.zakorchemna@gmail.com   >
 ----------------------------------------
      HAPPY NEW YEAR 
         **
        *o**
       ***o**
      ***o****
     *o****o*o*
         ||
           `, "color: 	orchid; font-size: 16px;");





