<template>
  <div>
    <div class="columns formContainer">
      <div class="column is-5 is-offset-1">
        <b-field
          label="Event Name"
          custom-class="has-text-primary"
          :type="eventNameMessObject.type"
          :message="eventNameMessObject.message"
        >
          <b-input v-model="name"></b-input>
        </b-field>
        <b-field label="Location" custom-class="has-text-primary">
          <b-input v-model="location"></b-input>
        </b-field>
        <div class="columns">
          <div class="column is-6">
            <b-field label="Start Time" custom-class="has-text-primary">
              <b-timepicker size="is-small" hour-format="12" v-model="startTime" inline></b-timepicker>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="End Time" custom-class="has-text-primary">
              <b-timepicker
                size="is-small"
                hour-format="12"
                v-model="endTime"
                :min-time="startTime"
                inline
              ></b-timepicker>
            </b-field>
          </div>
        </div>
        <b-field label="Description" custom-class="has-text-primary">
          <b-input v-model="description" type="textarea" />
        </b-field>
        <div class="columns">
          <b-field class="column is-6" label="Repeat" custom-class="has-text-primary">
            <b-select v-model="repeatOption">
              <option v-for="option in repeatOptions" :key="option" :value="option">{{ option }}</option>
            </b-select>
          </b-field>
          <b-field class="column is-6" label="Event Type" custom-class="has-text-primary">
            <b-select v-model="eventType">
              <option
                v-for="option in eventTypes"
                :key="option.id"
                :value="option"
              >{{ option.name }}</option>
            </b-select>
          </b-field>
        </div>

        <div class="buttons">
          <b-button class="button" type="is-primary" v-on:click="createEvent">Create</b-button>
          <b-button type="is-secondary" v-on:click="resetInputs">Reset</b-button>
        </div>
      </div>
      <div class="column is-6">
        <div class="columns is-centered">
          <b-field label="Select a date" custom-class="has-text-primary">
            <b-datepicker v-model="date" :years-range="[0, 10]" :nearby-month-days="true" inline></b-datepicker>
          </b-field>
        </div>
      </div>
    </div>
    <b-notification
      :type="notificationObject.type"
      aria-close-label="Close notification"
      :active.sync="notificationObject.active"
    >{{notificationObject.content}}</b-notification>
  </div>
</template>

<script>
export default {
  name: 'NewEventForm',
  data() {
    return {
      name: '',
      location: '',
      startTime: 0,
      endTime: 0,
      description: '',
      date: new Date(),
      repeatOption: 'No Repeat',
      repeatOptions: ['No Repeat', 'Daily', 'Weekly', 'Monthly', 'Annually'],
      eventType: '',
      eventTypes: [],
      eventNameMessObject: {},
      notificationObject: { active: false }
    }
  },
  methods: {
    createEvent() {
      if (!this.name) {
        this.eventNameMessObject = {
          type: 'is-danger',
          message: 'Please pick a name for this Event'
        }
      } else {
        const eventObject = {
          name: this.name,
          location: this.location,
          startTime: this.startTime,
          endTime: this.endTime,
          description: this.description,
          date: this.date,
          repeatOption: this.repeatOption,
          eventType: this.eventType
        }
        this.$store.dispatch('CREATE_EVENT', eventObject)
        this.notificationObject = {
          active: true,
          content: 'Event created',
          type: 'is-success'
        }
        this.eventNameMessObject = {}
      }
    },
    resetInputs() {
      this.name = ''
      this.location = ''
      this.initTimes()
      this.initData()
      this.description = ''
      this.date = new Date()
      this.repeatOption = 'No Repeat'
    },
    initTimes() {
      this.startTime = this.endTime = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        this.date.getDate(),
        0,
        0,
        0,
        0
      )
    },
    initData() {
      this.eventTypes = this.$store.state.events.eventTypes
      this.eventType = this.eventTypes.find(type => type.name === 'General')
    }
  },
  created() {
    this.initTimes()
    this.initData()
  },
  watch: {
    startTime: function(value) {
      if (value > this.endTime) {
        this.endTime = value
      }
    },
    date: function(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.startTime = new Date(
          newValue.getFullYear(),
          newValue.getMonth(),
          newValue.getDate(),
          this.startTime.getHours(),
          this.startTime.getMinutes(),
          0,
          0
        )
        this.endTime = new Date(
          newValue.getFullYear(),
          newValue.getMonth(),
          newValue.getDate(),
          this.endTime.getHours(),
          this.endTime.getMinutes(),
          0,
          0
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.formContainer {
  min-height: calc(85vh - 9.5vw);
}
.buttons {
  margin-top: 40px;
}
.button {
  margin-right: 10px;
}
</style>
