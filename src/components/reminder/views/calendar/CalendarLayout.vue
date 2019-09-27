<template>
  <div>
    <MonthPicker :month="month" :year="year" v-on:change-month-and-year="setMonthAndYear"></MonthPicker>
    <CalendarTable :month="month" :year="year"></CalendarTable>
  </div>
</template>

<script>
import MonthPicker from './monthPicker/MonthPicker'
import CalendarTable from './calendarTable/CalendarTable'

export default {
  name: 'CalendarLayout',
  components: {
    MonthPicker,
    CalendarTable
  },
  data() {
    return {
      year: '',
      month: ''
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
    }
  },
  created() {
    this.initData()
  }
}
</script>

<style lang="scss">
</style>
