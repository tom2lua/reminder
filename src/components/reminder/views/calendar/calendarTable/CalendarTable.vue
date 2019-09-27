<template>
  <div class="calendarContainer">
    <div class="headingContainer">
      <div v-for="(name, index) in dayNames" :key="index" class="dayGridItem">{{name}}</div>
    </div>
    <div class="daysContainer">
      <DayGrid v-for="(day, index) in days" :key="index" :day="day"></DayGrid>
    </div>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      days: []
    }
  },
  methods: {
    setDays() {
      const firstDayOfMonth = new Date(this.year, this.month).getDay()
      const daysInMonth = new Date(this.year, this.month + 1, 0).getDate()
      const daySlots = 42
      this.days = []
      for (let i = 1; i <= daySlots; i++) {
        this.days.push({
          date: new Date(this.year, this.month, i - firstDayOfMonth),
          otherMonths:
            i <= firstDayOfMonth || i > firstDayOfMonth + daysInMonth
              ? true
              : false
        })
      }
    }
  },
  created() {
    this.setDays()
  },
  watch: {
    month(newValue, oldValue) {
      if (newValue !== oldValue) this.setDays()
    }
  }
}
</script>

<style lang="scss" scoped>
.calendarContainer {
  width: calc(100% - 6vh);
  margin: 0 3vh 3vh 3vh;
  background-color: white;
}
.headingContainer {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.dayGridItem {
  background-color: white;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3vw;
  color: $primary-color;
  font-weight: bold;
}
.daysContainer {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  gap: 1px;
}
</style>
