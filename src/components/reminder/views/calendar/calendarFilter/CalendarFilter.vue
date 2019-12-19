<template>
  <b-collapse :open="false">
    <b-icon class="filterIcon" slot="trigger" pack="fa" icon="caret-down"></b-icon>
    <div class="filterContainer">
      <div class="columns">
        <div class="column is-5">
          <p class="filterTitle">Event Type</p>
          <div class="eventTypeContainer">
            <b-checkbox
              v-for="(type, index) in eventTypes"
              :key="index"
              v-model="selectedEventTypes"
              :native-value="type.name"
              :value="true"
              :type="type.cssClass"
            >{{type.name}}</b-checkbox>
          </div>
        </div>
        <div class="column is-5">
          <p class="filterTitle">Repeat Option</p>
          <div class="eventTypeContainer">
            <b-checkbox
              v-for="(option, index) in repeatOptions"
              :key="index"
              v-model="selectedRepeatOptions"
              :native-value="option"
              :value="true"
            >{{option}}</b-checkbox>
          </div>
        </div>
      </div>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'CalendarFilter',
  data() {
    return {
      eventTypes: [],
      repeatOptions: ['No Repeat', 'Weekly', 'Monthly', 'Annually'],
      selectedEventTypes: [],
      selectedRepeatOptions: ['No Repeat', 'Weekly', 'Monthly', 'Annually']
    }
  },
  methods: {
    initData() {
      this.eventTypes = this.$store.state.events.eventTypes
      this.selectedEventTypes = this.$store.state.events.eventTypes.map(
        type => {
          return type.name
        }
      )
      this.$emit('input-event-types', this.selectedEventTypes)
      this.$emit('input-repeat-option', this.selectedRepeatOptions)
    }
  },
  created() {
    this.initData()
  },
  watch: {
    selectedEventTypes() {
      this.$emit('input-event-types', this.selectedEventTypes)
    },
    selectedRepeatOptions() {
      this.$emit('input-repeat-option', this.selectedRepeatOptions)
    }
  }
}
</script>

<style lang="scss" scoped>
.filterIcon {
  position: relative;
  margin: 20px 0 0 30px;
  padding: 15px;
  border-radius: 5px;
  background-color: var(--text-color-primary);
  color: var(--text-color-secondary);
  font-size: 20px;
}
.filterContainer {
  margin: 10px 30px 0px 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--primary-color);
}
.filterTitle {
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--text-color-secondary);
}
.eventTypeContainer {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
.b-checkbox.checkbox,
.checkbox {
  margin-left: 0 !important;
  color: var(--text-color-secondary);
}
</style>