import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n'
import authentication from './modules/authentication'
import events from './modules/events'
import settings from './modules/settings'
import themes from './modules/themes'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    authentication,
    events,
    settings,
    themes
  }
})

Vue.use(VuexI18n.plugin, store)

export default store
