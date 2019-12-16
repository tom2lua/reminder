<template>
  <div v-if="selectDay && loading === false" class="dayDetailContainer">
    <div class="returnText" v-on:click="returnToCalendar">&lt; Return to Calendar</div>
    <div class="columns is-centered">
      <div class="column is-5">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="cardDay">{{date.getDate()}}</div>
              <div class="cardMonth">{{monthNames[date.getMonth()]}}</div>
              <br />
              <div>{{dayFact}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="eventsLabel">Events for this day:</div>
    <div v-if="selectDay.events.length > 0">
      <div class="eventsContainer">
        <EventCard v-for="(event, index) in selectDayNoDailyEvents" :key="index" :event="event"></EventCard>
      </div>
    </div>
    <div v-else class="noEventText">You have no events for this day yet</div>
  </div>
</template>

<script>
import EventCard from './eventCard/EventCard'
import axios from 'axios'

export default {
  name: 'DayDetails',
  components: {
    EventCard
  },
  props: {
    selectDay: Object
  },
  data() {
    return {
      selectDayNoDailyEvents: [],
      date: '',
      dayFact: '',
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
      loading: true
    }
  },
  methods: {
    returnToCalendar() {
      this.$emit('show-calendar')
    },
    async getFactFromApi() {
      const fact = await axios.get(
        `http://numbersapi.com/${this.date.getMonth() +
          1}/${this.date.getDate()}/date`
      )
      this.dayFact = fact.data
      this.loading = false
    },
    initData() {
      this.date = new Date(this.selectDay.date)
      this.selectDayNoDailyEvents = this.selectDay.events.filter(event => {
        return event.repeatOption !== 'Daily'
      })
    }
  },
  created() {
    this.initData()
    this.getFactFromApi()
  }
}
</script>

<style lang="scss" scoped>
.dayDetailContainer {
  margin: 3vh 3vh;
}
.cardDay {
  font-size: 9vw;
  text-align: center;
  color: var(--text-color-primary);
  line-height: 90%;
}
.cardMonth {
  font-size: 3vw;
  text-align: center;
}
.returnText {
  font-size: 1.3vw;
  text-decoration: underline;
  color: var(--text-color-primary);
  margin-bottom: 3vh;
}
.returnText:hover {
  cursor: pointer;
}
.noEventText {
  margin-left: 2vh;
}
.eventsLabel {
  font-size: 1.5vw;
  margin: 2vh;
  color: var(--text-color-primary);
  font-weight: bold;
}
.eventsContainer {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
</style>