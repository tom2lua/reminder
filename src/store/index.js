import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n'
import authentication from './modules/authentication'
import events from './modules/events'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    authentication,
    events
  },
  state: {},
  mutations: {},
  actions: {}
})

Vue.use(VuexI18n.plugin, store)

export default store
