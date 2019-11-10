<template>
  <div class="column is-8 is-offset-1">
    <p class="header">Event Details</p>
    <table v-if="event">
      <tr>
        <td>Name</td>
        <td>{{event.name}}</td>
      </tr>
      <tr>
        <td>Initial Date</td>
        <td>{{getDateString()}}</td>
      </tr>
      <tr>
        <td>Location</td>
        <td>{{event.location ? event.location : 'N/A'}}</td>
      </tr>
      <tr>
        <td>Time</td>
        <td>{{getTimeString(event.startTime)}} - {{getTimeString(event.endTime)}}</td>
      </tr>
      <tr>
        <td>Description</td>
        <td>{{event.description ? event.description : 'N/A'}}</td>
      </tr>
      <tr>
        <td>Event type</td>
        <td>
          <b-icon
            v-bind:style="{ color: event.eventType.representColor }"
            class="eventTypeIcon"
            pack="fas"
            icon="square"
            size="is-small"
          ></b-icon>
          {{event.eventType.name}}
        </td>
      </tr>
      <tr>
        <td>Repeat</td>
        <td>{{event.repeatOption}}</td>
      </tr>
    </table>
    <div class="buttons">
      <b-button size="is-medium" type="is-primary" v-on:click="modifyEvent">Modify</b-button>
      <!-- <b-button type="is-secondary">Stop Repeat</b-button> -->
      <b-button size="is-medium" type="is-danger" v-on:click="isConfirmModalActive = true">Delete</b-button>
    </div>
    <b-modal :active.sync="isConfirmModalActive" :width="500" scroll="keep">
      <div class="card has-text-centered">
        <div class="card-content modalCardContent">
          <b-icon
            class="warningIcon"
            type="is-primary"
            pack="fas"
            icon="exclamation-triangle"
            size="is-large"
          ></b-icon>
          <p>Warning: This will delete the Event and all of its history</p>
          <p>Cannot be undone</p>
          <b-button size="is-medium" type="is-primary" v-on:click="deleteEvent">Delete Event</b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'EventDetail',
  data() {
    return {
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      event: '',
      isConfirmModalActive: false
    }
  },
  methods: {
    getDateString() {
      const date = new Date(this.event.date)
      return `${date.getDate()}${this.getOrdinalNumber(date.getDate())} ${
        this.monthNames[date.getMonth()]
      }, ${date.getFullYear()}`
    },
    getOrdinalNumber(number) {
      if (number <= 0) return null
      if (number >= 10 && number <= 20) return 'th'
      if (number % 10 === 1) return 'st'
      else if (number % 10 === 2) return 'nd'
      else return 'th'
    },
    getTimeString(inputTime) {
      const time = new Date(inputTime)
      return time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    },
    modifyEvent() {
      this.$router.push({ name: 'modifyEvent', params: { id: this.event.id } })
    },
    deleteEvent() {
      this.$store.dispatch('DELETE_EVENT', { id: this.$route.params.id })
      this.$router.replace({ name: 'events' })
    }
  },
  created() {
    this.event = this.$store.state.events.events.find(
      event => event.id === this.$route.params.id
    )
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin: 3vh 0vh;
  color: $primary-color;
  font-size: $header-font-size;
}
td {
  font-size: $normal-font-size;
  text-align: left;
  padding: 8px 8px 8px 1.5vh;
}
td:first-child {
  font-weight: bold;
}
.eventTypeIcon {
  margin-right: 10px;
}
.buttons {
  margin-top: 40px;
}
.warningIcon {
  text-align: center;
}
.modalCardContent > button {
  margin-top: 3vh;
}
.modalCardContent > span {
  margin-bottom: 3vh;
}
</style> 