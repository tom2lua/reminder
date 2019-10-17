<template>
  <div class="columns">
    <div class="column is-7 is-offset-1">
      <div class="header">My Events</div>
      <router-link :to="{name: 'newEvent'}">
        <b-button type="is-primary" icon-left="plus" size="is-medium">New Event</b-button>
      </router-link>
      <div class="eventContainer">
        <EventCard v-for="(event, index) in events" :key="index" :event="event"></EventCard>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '../../../cards/EventCard'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  methods: {
    initData() {
      this.events = this.$store.state.events.events
    }
  },
  created() {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-size: $header-font-size;
  margin: 3vh 0;
  color: $primary-color;
}
.eventContainer {
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 3vh;
}
</style>