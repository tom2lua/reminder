import axios from 'axios'
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
		}
	},
	actions: {
		async LOG_IN({ commit }, payload) {
			try {
				const response = await axios.post(`${baseUrl}/login`, {
					username: payload.username,
					password: payload.password
				})
				commit('setUser', response.data)
			} catch (error) {
				console.error(error)
			}
		}
	}
}
