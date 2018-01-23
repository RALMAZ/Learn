// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';

import Framework7 from 'framework7';
import axios from 'axios';
import languages from '../src/scripts/lang.js';

Vue.config.productionTip = false;
Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    token: '',
    langCurrent: 'en',
    lang: {}
  },
  mutations: {
    addLangLine (lang) {
      this.lang = lang;
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});


store.commit('addLangLine', languages);
