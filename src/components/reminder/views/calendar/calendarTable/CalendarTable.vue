<template>
  <div class="calendarContainer">
    <div class="headingContainer">
      <div class="dayGridItem">Monday</div>
      <div class="dayGridItem">Tuesday</div>
      <div class="dayGridItem">Wednesday</div>
      <div class="dayGridItem">Thursday</div>
      <div class="dayGridItem">Friday</div>
      <div class="dayGridItem">Saturday</div>
      <div class="dayGridItem">Sunday</div>
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
  data() {
    return {
      days: [
        {
          date: 1,
        },
        {
          date: 2,
        },
        {
          date: 3,
        },
        {
          date: 4,
        },
        {
          date: 5,
        },
        {
          date: 6,
        },
        {
          date: 7,
        },
        {
          date: 8,
        },
        {
          date: 9,
        },
        {
          date: 10,
        },
        {
          date: 11,
        },
        {
          date: 12,
        },
        {
          date: 13,
        },
        {
          date: 14,
        },
        {
          date: 15,
        },
        {
          date: 16,
        },
        {
          date: 17,
        },
        {
          date: 18,
        },
        {
          date: 19,
        },
        {
          date: 20,
        },
        {
          date: 21,
        },
        {
          date: 22,
        },
        {
          date: 23,
        },
        {
          date: 24,
        },
        {
          date: 25,
        },
        {
          date: 26,
        },
        {
          date: 27,
        },
        {
          date: 28,
        },
        {
          date: 29,
        },
        {
          date: 30,
        },

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.calendarContainer {
  width: calc(100% - 6vh);
  margin: 0 3vh 3vh 3vh;
  padding: 0px 5px 5px 5px;
  background-color: $primary-color;
}
.headingContainer {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.dayGridItem {
  background-color: $primary-color;
  border: 1px solid $primary-color;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3vw;
  color: white;
}
.daysContainer {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
}
</style>

