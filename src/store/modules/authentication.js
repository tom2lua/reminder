import axios from 'axios'
import router from '../../router/index'
const baseUrl = 'https://backend-tom2lua.herokuapp.com/api'

const getBearerConfig = context => {
  let token = `bearer ${context.rootState.authentication.token}`
  return { headers: { Authorization: token } }
}

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
    },
    updateUser(state, payload) {
      state.user = payload
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
        console.error(error.response)
      }
    },
    async SIGN_UP({ commit, dispatch }, payload) {
      try {
        const response = await axios.post(`${baseUrl}/users`, { ...payload })
        localStorage.setItem('loggedInUser', JSON.stringify(response.data))
        commit('setUser', response.data)
        dispatch('CREATE_USER_SETTINGS')
      } catch (error) {
        console.log(error.response)
      }
    },
    async UPDATE_PROFILE(context, payload) {
      const config = getBearerConfig(context)
      try {
        const response = await axios.put(
          `${baseUrl}/users`,
          { ...payload },
          config
        )
        const userObject = {
          user: response.data,
          token: context.rootState.authentication.token
        }
        localStorage.setItem('loggedInUser', JSON.stringify(userObject))
        router.go(-1)
        context.commit('updateUser', response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
