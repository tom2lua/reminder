<template>
  <div class="incomingEventContainer">
    <div class="label">Incoming Events:</div>
    <b-field label="Show Events till" custom-class="secondaryTextColor">
      <b-select v-model="showEventRange" class="selectInput">
        <option
          v-for="option in showEventRangeOptions"
          :value="option"
          :key="option"
        >
          {{ option }}
        </option>
      </b-select>
    </b-field>
    <div v-if="futureEvents.length > 0" class="eventsContainer">
      <FutureEventCard
        v-for="event in futureEvents"
        :key="event.id"
        :event="event"
      ></FutureEventCard>
    </div>
    <p v-else class="secondaryTextColor">You have no event in this range yet</p>
  </div>
</template>

<script>
/* eslint-disable */
import FutureEventCard from '../../../cards/FutureEventCard'
import { mapState } from 'vuex'

export default {
  name: 'IncomingEventList',
  components: {
    FutureEventCard
  },
  data() {
    return {
      today: '',
      futureEvents: '',
      showEventRange: 'This Week',
      showEventRangeOptions: [
        'This Week',
        'Next Week',
        'This Month',
        'Next Month'
      ]
    }
  },
  methods: {
    setFutureEvents() {
      this.futureEvents = this.events.filter(event => {
        return this.isInShowRange(event)
      })
    },
    isInShowRange(event) {
      const eventDate = new Date(event.date)
      const endDate = new Date()
      endDate.setHours(0, 0, 0, 0)
      switch (this.showEventRange) {
        case 'This Week':
          //set endDate to Saturday, last day of week
          endDate.setDate(endDate.getDate() + 6 - endDate.getDay())
          if (eventDate.getTime() <= endDate.getTime())
            return this.checkRepeatOption(
              endDate,
              eventDate,
              event.repeatOption
            )
          else return false
        case 'Next Week':
          //set endDate to next Saturday, last day of next week
          endDate.setDate(endDate.getDate() + 13 - endDate.getDay())
          if (eventDate.getTime() <= endDate.getTime())
            return this.checkRepeatOption(
              endDate,
              eventDate,
              event.repeatOption
            )
          else return false
        case 'This Month':
          endDate.setMonth(this.today.getMonth() + 1)
          endDate.setDate(0)
          if (eventDate.getTime() <= endDate.getTime())
            return this.checkRepeatOption(
              endDate,
              eventDate,
              event.repeatOption
            )
          else return false
        case 'Next Month':
          endDate.setMonth(this.today.getMonth() + 2)
          endDate.setDate(0)
          if (eventDate.getTime() <= endDate.getTime())
            return this.checkRepeatOption(
              endDate,
              eventDate,
              event.repeatOption
            )
          else return false
      }
    },
    checkRepeatOption(endDate, eventDate, repeatOption) {
      switch (repeatOption) {
        case 'Weekly':
          if (this.showEventRange == 'This Week') {
            return eventDate.getDay() < this.today.getDay() ? false : true
          }
          return true
        case 'Monthly':
          return (
            this.today.getDate() <= eventDate.getDate() &&
            eventDate.getDate() <= endDate.getDate()
          )
        case 'Annually':
          eventDate.setFullYear(endDate.getFullYear())
          return (
            this.today.getTime() <= eventDate.getTime() &&
            eventDate.getTime() <= endDate.getTime()
          )
        case 'No Repeat':
          return (
            this.today.getTime() <= eventDate.getTime() &&
            eventDate.getTime() <= endDate.getTime()
          )
        default:
          return false
      }
    },
    initToday() {
      let today = new Date()
      today.setHours(0, 0, 0, 0)
      this.today = new Date(today)
    }
  },
  computed: {
    ...mapState({
      events: state => state.events.events
    })
  },
  created() {
    this.initToday()
    this.setFutureEvents()
  },
  watch: {
    showEventRange() {
      this.setFutureEvents()
    },
    events() {
      this.setFutureEvents()
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  text-align: left;
  font-size: 1.5rem;
  color: var(--text-color-primary);
}
.eventsContainer {
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
.incomingEventContainer {
  margin: calc(3vh + 10px) 3vh 3vh 0;
}
.selectInput select {
  color: var(--text-color-secondary);
}
</style>