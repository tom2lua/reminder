import axios from 'axios'
import router from '../../router/index'
const baseUrl = 'https://backend-tom2lua.herokuapp.com/api'

const getBearerConfig = context => {
  let token = `bearer ${context.rootState.authentication.token}`
  return { headers: { Authorization: token } }
}

export default {
  state: {
    settings: {},
    localeDateStringOptions: { month: 'long', day: 'numeric', year: 'numeric' }
  },
  mutations: {
    setSettings(state, payload) {
      console.log('Settings:', payload)
      state.settings = payload
    },
    updateSettings(state, payload) {
      console.log('Updated Settings:', payload)
      state.settings = payload
    }
  },
  actions: {
    async FETCH_USER_SETTINGS(context) {
      const config = getBearerConfig(context)
      try {
        const settings = await axios.get(`${baseUrl}/settings`, config)
        context.commit('setSettings', settings.data)
      } catch (error) {
        console.error(error.response)
      }
    },
    async CREATE_USER_SETTINGS(context) {
      const config = getBearerConfig(context)
      const settingsObject = {
        darkMode: false,
        firstDayOfWeek: 'Monday',
        is12HourFormat: true,
        isNotiEnabled: false
      }
      try {
        const settings = await axios.post(
          `${baseUrl}/settings`,
          settingsObject,
          config
        )
        context.commit('setSettings', settings.data)
        router.push({ name: 'dashboard' })
      } catch (error) {
        console.error(error.response)
      }
    },
    async UPDATE_USER_SETTINGS(context, payload) {
      const config = getBearerConfig(context)
      try {
        const updatedSettings = await axios.put(
          `${baseUrl}/settings`,
          payload,
          config
        )
        context.commit('updateSettings', updatedSettings.data)
      } catch (error) {
        console.error(error.response)
      }
    }
  }
}
