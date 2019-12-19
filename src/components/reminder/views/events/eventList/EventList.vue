<template>
  <div class="columns">
    <div class="column is-7 is-offset-1">
      <div class="header">My Events</div>
      <router-link :to="{name: 'newEvent'}">
        <b-button type="is-primary" icon-left="plus" size="is-medium">New Event</b-button>
      </router-link>
      <div class="eventContainer">
        <EventCard v-for="(event, index) in eventList" :key="index" :event="event"></EventCard>
        <p class="primaryTextColor">You have {{eventList.length}} event(s)</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '../../../cards/EventCard'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      eventList: []
    }
  },
  computed: {
    ...mapState({
      events: state => state.events.events
    })
  },
  methods: {
    initData() {
      this.eventList = this.$store.state.events.events
    }
  },
  watch: {
    events(newValue) {
      this.eventList = newValue
    }
  },
  created() {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-size: var(--font-size-header);
  margin: 3vh 0;
  color: var(--text-color-primary);
}
.eventContainer {
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 3vh;
}
</style>