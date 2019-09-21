<template>
  <div class="dayGrid">{{day.date}}</div>
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
  background-color: $background-color;
  border: 1px solid $primary-color;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5vw;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: $secondary-color;
  }
}
</style>