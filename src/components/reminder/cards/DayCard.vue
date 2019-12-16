<template>
  <div class="columns is-centered dayCardContainer">
    <div class="column is-9">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="cardDay">{{selectDay.getDate()}}</div>
            <div class="cardMonth">{{monthNames[selectDay.getMonth()]}}</div>
            <br />
            <div class="cardContent">{{dayFact}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DayCard',
  props: {
    selectDay: Date
  },
  data() {
    return {
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
    async getFactFromApi() {
      const fact = await axios.get(
        `http://numbersapi.com/${this.selectDay.getMonth() +
          1}/${this.selectDay.getDate()}/date`
      )
      this.dayFact = fact.data
      this.loading = false
    }
  },
  created() {
    this.getFactFromApi()
  }
}
</script>

<style lang="scss" scoped>
.dayCardContainer {
  margin-top: 3vh;
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
  color: var(--text-color-secondary);
}
.cardContent {
  color: var(--text-color-secondary);
}
</style>