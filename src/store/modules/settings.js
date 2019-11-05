import axios from 'axios'
const baseUrl = 'http://localhost:3003/api'

const getBearerConfig = context => {
  let token = `bearer ${context.rootState.authentication.token}`
  return { headers: { Authorization: token } }
}

export default {
  state: {
    settings: {}
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
        console.error(error.response.data.error)
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
        console.error(error.response.data.error)
      }
    }
  }
}
