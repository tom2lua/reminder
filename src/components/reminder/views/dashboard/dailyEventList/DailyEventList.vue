<template>
  <div class="dailyEventsContainer">
    <div class="label">Daily Events:</div>
    <div v-if="dailyEvents.length > 0" class="eventsContainer">
      <DailyEventCard v-for="(event) in dailyEvents" :key="event.id" :event="event"></DailyEventCard>
    </div>
    <p v-else>You have no Event daily event yet, create one here</p>
  </div>
</template>

<script>
// import EventCard from '../../calendar/dayDetails/eventCard/EventCard'
import DailyEventCard from '../../../cards/DailyEventCard'
export default {
  name: 'DailyEventList',
  components: {
    // EventCard,
    DailyEventCard
  },
  data() {
    return {
      dailyEvents: []
    }
  },
  methods: {
    initData() {
      this.dailyEvents = this.$store.state.events.events.filter(event => {
        return event.repeatOption === 'Daily'
      })
    }
  },
  created() {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
.label {
  text-align: left;
  font-size: 1.5rem;
  color: $primary-color;
}
.dailyEventsContainer {
  margin: calc(3vh + 10px) 3vh 3vh 0;
}
.eventsContainer {
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
</style>