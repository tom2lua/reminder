import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n'
import authentication from './modules/authentication'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    authentication
  },
  state: {},
  mutations: {},
  actions: {}
})

Vue.use(VuexI18n.plugin, store)

export default store
