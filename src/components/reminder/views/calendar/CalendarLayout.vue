<template>
  <div>
    <div class="monthLabel">January, 2019</div>
    <CalendarTable></CalendarTable>
  </div>
</template>

<script>
import CalendarTable from './calendarTable/CalendarTable'
export default {
  name: 'CalendarLayout',
  components: {
    CalendarTable
  }
}
</script>

<style lang="scss">
.monthLabel {
  font-size: 2vw;
  margin: 2vh 0 2vh 3vh;
  color: $primary-color;
}
</style>
