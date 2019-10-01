import axios from 'axios'
// import router from '../../router/index'
const baseUrl = 'http://localhost:3003/api'

const getBearerConfig = context => {
  let token = `bearer ${context.rootState.authentication.token}`
  return { headers: { Authorization: token } }
}

export default {
  state: {
    events: [],
    eventTypes: []
  },
  mutations: {
    setEvents(state, payload) {
      console.log('Events:', payload)
      state.events = payload
    },
    setNewEvent(state, payload) {
      console.log('New Event:', payload)
      state.events.push(payload)
    },
    setEventTypes(state, payload) {
      console.log('Event Types:', payload)
      state.eventTypes = payload
    }
  },
  actions: {
    async FETCH_EVENTS(context) {
      const config = getBearerConfig(context)

      try {
        const events = await axios.get(`${baseUrl}/events`, config)
        context.commit('setEvents', events.data)
      } catch (error) {
        console.error(error.response.data.error)
      }
    },
    async CREATE_EVENT(context, payload) {
      const config = getBearerConfig(context)
      try {
        const eventObject = {
          name: payload.name,
          date: payload.date,
          description: payload.description,
          location: payload.location,
          startTime: payload.startTime,
          endTime: payload.endTime,
          repeatOption: payload.repeatOption,
          eventTypeId: payload.eventType.id
        }

        const createdEvent = await axios.post(
          `${baseUrl}/events`,
          eventObject,
          config
        )
        context.commit('setNewEvent', {
          ...createdEvent.data,
          eventType: payload.eventType
        })
      } catch (error) {
        console.error(error.response)
      }
    },
    async FETCH_EVENT_TYPES({ commit }) {
      try {
        const eventTypes = await axios.get(`${baseUrl}/eventTypes`)
        commit('setEventTypes', eventTypes.data)
      } catch (error) {
        console.error(error.response)
      }
    }
  }
}
