<template>
  <div class="calendarContainer">
    <div class="headingContainer">
      <div v-for="(name, index) in dayNames" :key="index" class="dayGridItem">{{name}}</div>
    </div>
    <div class="daysContainer">
      <DayGrid v-for="(day, index) in days" :key="index" :day="day" v-on:select-day="selectDay"></DayGrid>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import DayGrid from './dayGrid/DayGrid'
export default {
  name: 'CalendarTable',
  components: {
    DayGrid
  },
  props: {
    year: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    selectedEventTypes: Array,
    selectedRepeatOptions: Array
  },
  data() {
    return {
      dayNames: [],
      days: []
    }
  },
  methods: {
    setDays() {
      let firstDayOfMonth = new Date(this.year, this.month).getDay()
      if (this.$store.state.settings.settings.firstDayOfWeek == 'Monday') {
        if (firstDayOfMonth == 0) {
          firstDayOfMonth = 6
        } else firstDayOfMonth--
      }
      const daysInMonth = new Date(this.year, this.month + 1, 0).getDate()
      let daySlots = 42
      this.days = []

      for (let i = 1; i <= daySlots; i++) {
        const date = new Date(this.year, this.month, i - firstDayOfMonth)
        const events = this.findEvents(date)

        this.days.push({
          date,
          otherMonths:
            i <= firstDayOfMonth || i > firstDayOfMonth + daysInMonth
              ? true
              : false,
          events: events ? events : null
        })
      }
    },
    findEvents(date) {
      const events = this.$store.state.events.events.filter(event => {
        //Filter repeatOptions and eventTypes:
        if (!this.selectedRepeatOptions.includes(event.repeatOption))
          return false
        if (!this.selectedEventTypes.includes(event.eventType.name))
          return false

        //Exclude Daily Events:
        if (event.repeatOption != 'Daily') {
          const eventDate = new Date(event.date)
          eventDate.setHours(0, 0, 0, 0)

          if (event.repeatOption == 'No Repeat')
            return eventDate.getTime() === date.getTime()
          else {
            if (eventDate.getTime() <= date.getTime())
              return this.checkRepeatOption(date, eventDate, event.repeatOption)
            else return false
          }
        }
        return false
      })
      return events
    },
    checkRepeatOption(date, eventDate, repeatOption) {
      switch (repeatOption) {
        case 'Weekly':
          return date.getDay() === eventDate.getDay()
        case 'Monthly':
          return date.getDate() === eventDate.getDate()
        case 'Annually':
          return (
            date.getDate() === eventDate.getDate() &&
            date.getMonth() === eventDate.getMonth()
          )
        default:
          return false
      }
    },
    selectDay(day) {
      this.$emit('select-day', day)
    },
    setDayNames() {
      if (this.$store.state.settings.settings.firstDayOfWeek == 'Sunday') {
        this.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      } else {
        this.dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    }
  },
  created() {
    this.setDays()
    this.setDayNames()
  },
  watch: {
    month(newValue, oldValue) {
      if (newValue !== oldValue) this.setDays()
    },
    selectedRepeatOptions() {
      this.setDays()
    },
    selectedEventTypes() {
      this.setDays()
    }
  }
}
</script>

<style lang="scss" scoped>
.calendarContainer {
  width: calc(100% - 6vh);
  margin: 0 3vh 3vh 3vh;
  background-color: var(--secondary-color);
}
.headingContainer {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.dayGridItem {
  background-color: var(--secondary-color);
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3vw;
  color: var(--text-color-primary);
  font-weight: bold;
}
.daysContainer {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  gap: 1px;
}
</style>
