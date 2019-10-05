<template>
  <div class="incomingEventContainer">
    <div class="label">Incoming Events:</div>
    <div v-if="futureEvents.length > 0" class="eventsContainer">
      <FutureEventCard v-for="event in futureEvents" :key="event.id" :event="event"></FutureEventCard>
    </div>
    <p v-else>You have no Event yet, create one here</p>
  </div>
</template>

<script>
/* eslint-disable */
import FutureEventCard from '../../../cards/FutureEventCard'

export default {
  name: 'IncomingEventList',
  components: {
    FutureEventCard
  },
  data() {
    return {
      today: new Date(),
      futureEvents: '',
      showEventRange: 'Next Week',
      showEventRangeOptions: [
        'This Week',
        'Next Week',
        'This Month',
        'Next Month'
      ]
    }
  },
  methods: {
    setFutureEvents(dateRange) {
      this.futureEvents = this.$store.state.events.events.filter(event => {
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
          return (
            this.today.getDate() <= eventDate.getDate() &&
            eventDate.getDate() <= endDate.getDate() &&
            this.today.getMonth() <= eventDate.getMonth() &&
            eventDate.getMonth() <= endDate.getMonth()
          )
        case 'No Repeat':
          return (
            this.today.getDate() <= eventDate.getDate() &&
            eventDate.getDate() <= endDate.getDate() &&
            this.today.getMonth() <= eventDate.getMonth() &&
            eventDate.getMonth() <= endDate.getMonth() &&
            this.today.getFullYear() <= eventDate.getFullYear() &&
            eventDate.getFullYear() <= endDate.getFullYear()
          )
        default:
          return false
      }
    }
  },
  created() {
    this.setFutureEvents()
  }
}
</script>

<style lang="scss" scoped>
.label {
  text-align: left;
  font-size: 1.5rem;
  color: $primary-color;
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
</style>