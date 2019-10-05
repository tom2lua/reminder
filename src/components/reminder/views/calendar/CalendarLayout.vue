<template>
  <div>
    <div v-if="showCalendar">
      <MonthPicker :month="month" :year="year" v-on:change-month-and-year="setMonthAndYear"></MonthPicker>
      <CalendarTable :month="month" :year="year" v-on:select-day="setSelectDay"></CalendarTable>
    </div>
    <DayDetail v-else :selectDay="selectDay" v-on:show-calendar="showCalendar = !showCalendar"></DayDetail>
  </div>
</template>

<script>
import MonthPicker from './monthPicker/MonthPicker'
import CalendarTable from './calendarTable/CalendarTable'
import DayDetail from './dayDetails/DayDetails'

export default {
  name: 'CalendarLayout',
  components: {
    MonthPicker,
    CalendarTable,
    DayDetail
  },
  data() {
    return {
      year: '',
      month: '',
      selectDay: null,
      showCalendar: true
    }
  },
  methods: {
    initData() {
      const date = new Date()
      this.year = date.getFullYear()
      this.month = date.getMonth()
    },
    setMonthAndYear(payload) {
      this.year = payload.year
      this.month = payload.month
    },
    setSelectDay(day) {
      this.selectDay = day
      this.showCalendar = false
    }
  },
  created() {
    this.initData()
  }
}
</script>

<style lang="scss">
</style>
