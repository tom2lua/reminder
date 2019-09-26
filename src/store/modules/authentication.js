import axios from 'axios'
import router from '../../router/index'
const baseUrl = 'http://localhost:3003/api'

export default {
  state: {
    authenticated: false,
    user: '',
    token: ''
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token
      state.user = payload.user
      state.authenticated = true
    },
    logout(state) {
      state.authenticated = false
      state.user = ''
      state.token = ''
    }
  },
  actions: {
    async LOG_IN({ commit }, payload) {
      try {
        const response = await axios.post(`${baseUrl}/login`, {
          username: payload.username,
          password: payload.password
        })
        localStorage.setItem('loggedInUser', JSON.stringify(response.data))
        commit('setUser', response.data)
      } catch (error) {
        console.error(error)
      }
    },
    async SIGN_UP({ commit }, payload) {
      try {
        const response = await axios.post(`${baseUrl}/users`, { ...payload })
        commit('setUser', response.data)
        router.push({ name: 'calendar' })
      } catch (error) {
        console.log(error.response)
      }
    }
  }
}
