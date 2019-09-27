<template>
  <div class="dayGrid" :class="{otherMonthGrid: day.otherMonths}">
    <div class="dayNumber">{{ day.date.getDate() }}</div>
  </div>
</template>

<script>
export default {
  name: 'DayGrid',
  props: {
    day: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.dayGrid {
  background-color: white;
  height: 3.7vw;
  position: relative;
  font-size: 1.5vw;
  color: $primary-color;
  border: 1px solid $primary-color;
  border-collapse: collapse;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: $background-color;
  }
}
.otherMonthGrid {
  background-color: rgb(202, 202, 202);
}
.dayNumber {
  position: absolute;
  right: 10px;
  bottom: 0;
  font-weight: bold;
}
</style>
