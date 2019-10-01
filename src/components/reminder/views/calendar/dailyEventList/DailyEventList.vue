<template>
  <div v-if="dailyEvents.length > 0" class="dailyEventsContainer">
    <div class="label">Daily Events:</div>
    <div></div>
    <div class="eventsContainer">
      <EventCard
        v-for="(event) in dailyEvents"
        :key="event.id"
        :event="event"
        :isDailyEventCard="true"
      ></EventCard>
    </div>
  </div>
</template>

<script>
import EventCard from '../dayDetails/eventCard/EventCard'
export default {
  name: 'DailyEventList',
  components: {
    EventCard
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
  text-align: center;
  font-size: 2rem;
  color: $primary-color;
}
.dailyEventsContainer {
  margin: 3vh;
}
.eventsContainer {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
</style>