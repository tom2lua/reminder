<template>
  <div>
    <div v-if="showCalendar">
      <CalendarFilter
        v-on:input-event-types="inputEventTypes"
        v-on:input-repeat-option="inputRepeatOption"
      ></CalendarFilter>
      <MonthPicker :month="month" :year="year" v-on:change-month-and-year="setMonthAndYear"></MonthPicker>
      <CalendarTable
        :month="month"
        :year="year"
        v-on:select-day="setSelectDay"
        :selectedEventTypes="selectedEventTypes"
        :selectedRepeatOptions="selectedRepeatOptions"
      ></CalendarTable>
    </div>
    <DayDetail v-else :selectDay="selectDay" v-on:show-calendar="showCalendar = !showCalendar"></DayDetail>
  </div>
</template>

<script>
import CalendarFilter from './calendarFilter/CalendarFilter'
import MonthPicker from './monthPicker/MonthPicker'
import CalendarTable from './calendarTable/CalendarTable'
import DayDetail from './dayDetails/DayDetails'

export default {
  name: 'CalendarLayout',
  components: {
    MonthPicker,
    CalendarTable,
    DayDetail,
    CalendarFilter
  },
  data() {
    return {
      year: '',
      month: '',
      selectDay: null,
      showCalendar: true,
      selectedEventTypes: [],
      selectedRepeatOptions: []
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
    },
    inputEventTypes(eventTypes) {
      this.selectedEventTypes = eventTypes
    },
    inputRepeatOption(repeatOptions) {
      this.selectedRepeatOptions = repeatOptions
    }
  },
  created() {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
</style>
