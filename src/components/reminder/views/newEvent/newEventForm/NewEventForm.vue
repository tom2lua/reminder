<template>
  <div>
    <div class="columns formContainer">
      <div class="column is-5 is-offset-1">
        <b-field label="Event Name" custom-class="has-text-primary">
          <b-input v-model="eventName" />
        </b-field>
        <b-field label="Location" custom-class="has-text-primary">
          <b-input v-model="eventName"></b-input>
        </b-field>
        <div class="columns">
          <div class="column is-6">
            <b-field label="Start Time" custom-class="has-text-primary">
              <b-clockpicker
                v-model="eventStartTime"
                placeholder="Select..."
                icon="clock"
                hour-format="12"
              />
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="End Time" custom-class="has-text-primary">
              <b-clockpicker
                v-model="eventEndTime"
                placeholder="Select..."
                icon="clock"
                hour-format="12"
              />
            </b-field>
          </div>
        </div>
        <b-field label="Description" custom-class="has-text-primary">
          <b-input v-model="eventDescription" type="textarea" />
        </b-field>
        <b-field label="Repeat" custom-class="has-text-primary">
          <b-select v-model="eventRepeat">
            <option
              v-for="option in eventRepeatOptions"
              :key="option"
              :value="option"
              >{{ option }}</option
            >
          </b-select>
        </b-field>
        <div class="buttons">
          <b-button class="button" type="is-primary">Create</b-button>
          <b-button type="is-secondary">Reset</b-button>
        </div>
      </div>
      <div class="column is-5">
        <b-field label="Select a date" custom-class="has-text-primary">
          <b-datepicker
            v-model="eventDate"
            :years-range="[0, 10]"
            :nearby-month-days="true"
            inline
          ></b-datepicker>
        </b-field>
        <b>
          {{ eventDate.getDate() }}.{{ eventDate.getMonth() }}.{{
            eventDate.getFullYear()
          }}
        </b>
      </div>
    </div>
    <div class="columns"></div>
  </div>
</template>

<script>
export default {
	name: 'NewEventForm',
	data() {
		return {
			eventName: '',
			eventLocation: '',
			eventStartTime: new Date(),
			eventEndTime: new Date(),
			eventPeople: { name: 'Tom', id: 1 },
			eventDescription: '',
			eventDate: new Date(),
			eventRepeat: 'No Repeat',

			eventRepeatOptions: [
				'No Repeat',
				'Daily',
				'Weekly',
				'Monthly',
				'Annually'
			]
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
