<template>
  <div class="columns monthLabel">
    <span class="column arrowIcon is-1" v-on:click="changeMonth(-1)">
      <b-icon pack="fas" icon="angle-left" size="is-small"></b-icon>
    </span>
    <span class="column is-10">{{monthNames[month]}} {{year}}</span>
    <span class="column arrowIcon is-1" v-on:click="changeMonth(1)">
      <b-icon pack="fas" icon="angle-right" size="is-small"></b-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MonthPicker',
  props: {
    month: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      localYear: this.year,
      localMonth: this.month,
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
      ]
    }
  },
  methods: {
    changeMonth(value) {
      this.localMonth += value
      if (this.localMonth > 11) {
        this.localMonth = 0
        this.changeYear(1)
      } else if (this.localMonth < 0) {
        this.changeYear(-1)
        this.localMonth = 11
      }
      this.$emit('change-month-and-year', {
        year: this.localYear,
        month: this.localMonth
      })
    },
    changeYear(value) {
      this.localYear += value
    }
  }
}
</script>

<style lang="scss" scoped>
.monthLabel {
  font-size: 2.5vw;
  margin: 0 0 1vh 0;
  text-align: center;
  color: $primary-color;
}
.arrowIcon:hover {
  cursor: pointer;
}
.arrowIcon {
  transform: scale(0.7, 0.7);
}
.arrowIcon:first-child {
  padding-left: 50px;
}
.arrowIcon:last-child {
  padding-right: 50px;
}
</style>