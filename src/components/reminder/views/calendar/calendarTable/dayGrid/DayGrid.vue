<template>
  <div
    class="dayGrid"
    :class="{ otherMonthGrid: day.otherMonths, haveEvent: day.events.length > 0, todayGrid: isToday() }"
    v-on:click="selectDay(day)"
  >
    <div v-if="day.events.length > 0" class="eventBar">
      <div
        class="eventColor"
        v-for="(type) in uniqueEventTypes"
        :key="type.id"
        :style="{backgroundColor: type.representColor}"
      ></div>
    </div>
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
  },
  data() {
    return {
      icon: '',
      uniqueEventTypes: []
    }
  },
  methods: {
    selectDay(day) {
      this.$emit('select-day', day)
    },
    getIcon() {
      if (this.day.events.length > 1) {
        return 'list-ol'
      }
      return this.day.events[0].eventType.iconClass
    },
    isToday() {
      const today = new Date()
      if (
        today.getFullYear() === this.day.date.getFullYear() &&
        today.getMonth() === this.day.date.getMonth() &&
        today.getDate() === this.day.date.getDate()
      )
        return true
      return false
    },
    initData() {
      this.uniqueEventTypes = []
      if (this.day.events.length > 0) {
        this.day.events.forEach(event => {
          const duplicateEventType = this.uniqueEventTypes.find(type => {
            return type.id === event.eventType.id
          })
          if (!duplicateEventType) {
            this.uniqueEventTypes.push(event.eventType)
          }
        })
      }
    }
  },
  mounted() {
    this.initData()
  },
  watch: {
    day: function() {
      this.initData()
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
  background-color: #e4daff;
  color: rgb(88, 88, 88);
}
.todayGrid {
  font-weight: bold !important;
  border: 3px solid $primary-color;
}
.haveEvent {
  background-color: #f1e0d6;
  color: $primary-color;
}
.dayNumber {
  position: absolute;
  right: 10px;
  bottom: 0;
}
.eventIcon {
  position: absolute;
  top: 11px;
  left: 10px;
  font-size: 1.5rem;
}
.eventBar {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
}
.eventColor {
  background-color: grey;
  flex-grow: 1;
  height: 100%;
}
</style>
