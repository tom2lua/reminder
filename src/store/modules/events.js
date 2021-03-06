import axios from 'axios'
import { ToastProgrammatic as Toast } from 'buefy'
const baseUrl = 'https://backend-tom2lua.herokuapp.com/api'

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
    updateEvent(state, payload) {
      console.log('Updated Event:', payload)
      state.events = state.events.map(event => {
        return event.id === payload.id ? payload : event
      })
    },
    deleteEvent(state, payload) {
      console.log('Event deleted')
      state.events = state.events.filter(event => event.id !== payload)
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
        console.error(error.response)
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
        Toast.open({
          duration: 2500,
          message: `Event ${payload.name} created!`,
          type: 'is-primary',
          queue: true
        })
      } catch (error) {
        console.error(error.response)
        Toast.open({
          duration: 2500,
          message: 'Error occured. Please try again later !!!',
          type: 'is-danger',
          queue: true
        })
      }
    },
    async UPDATE_EVENT(context, payload) {
      const config = getBearerConfig(context)
      try {
        const updatedEvent = await axios.put(
          `${baseUrl}/events/${payload.id}`,
          payload,
          config
        )
        context.commit('updateEvent', updatedEvent.data)
        Toast.open({
          duration: 2500,
          message: `Event ${updatedEvent.data.name} updated!`,
          type: 'is-primary',
          queue: true
        })
      } catch (error) {
        console.error(error)
        Toast.open({
          duration: 2500,
          message: 'Error occured. Please try again later !!!',
          type: 'is-danger',
          queue: true
        })
      }
    },
    async DELETE_EVENT(context, payload) {
      const config = getBearerConfig(context)
      try {
        await axios.delete(`${baseUrl}/events/${payload.id}`, config)

        context.commit('deleteEvent', payload.id)
        Toast.open({
          duration: 2500,
          message: 'Event deleted',
          type: 'is-danger',
          queue: true
        })
      } catch (error) {
        console.error(error)
        Toast.open({
          duration: 2500,
          message: 'Error occured. Please try again later !!!',
          type: 'is-danger',
          queue: true
        })
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
