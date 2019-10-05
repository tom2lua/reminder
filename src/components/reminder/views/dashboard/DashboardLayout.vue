<template>
  <div class="columns is-gapless">
    <div class="column is-6">
      <DayCard :selectDay="new Date()"></DayCard>
    </div>
    <div class="column is-6">
      <DailyEventList></DailyEventList>
      <IncomingEventList></IncomingEventList>
    </div>
  </div>
</template>

<script>
import DayCard from '../../cards/DayCard'
import DailyEventList from './dailyEventList/DailyEventList'
import IncomingEventList from './incomingEventList/IncomingEventList'

export default {
  name: 'DashboardLayout',
  components: {
    DayCard,
    DailyEventList,
    IncomingEventList
  }
}
</script>

<style lang="scss" scoped>
</style>