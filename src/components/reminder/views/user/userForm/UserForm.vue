<template>
  <div class="column is-5 is-offset-1">
    <ValidationObserver ref="observer" v-slot="{ passes }">
      <p class="formTitle">Edit your profile</p>
      <BInputWithValidation
        rules="required|alpha_spaces"
        type="text"
        label="First Name"
        v-model="firstName"
      />
      <BInputWithValidation
        rules="required|alpha_spaces"
        type="text"
        label="Last Name"
        v-model="lastName"
      />
      <b-field label="Birthday" custom-class="has-text-primary">
        <b-datepicker
          icon="calendar-today"
          :max-date="new Date()"
          v-model="birthday"
          :date-formatter="(date) => date.toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' })"
        ></b-datepicker>
      </b-field>
      <BInputWithValidation rules="required|email" type="text" label="Email" v-model="email" />
      <div class="buttons">
        <b-button type="is-primary" v-on:click="passes(editUserProfile)">Confirm</b-button>
        <b-button type="is-secondary" v-on:click="cancelEdit">Cancel</b-button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import BInputWithValidation from '../../../../inputs/BInputWithValidation'
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'UserForm',
  components: {
    BInputWithValidation,
    ValidationObserver
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      birthday: null,
      email: ''
    }
  },
  methods: {
    editUserProfile() {
      this.$store.dispatch('UPDATE_PROFILE', {
        firstName: this.firstName,
        lastName: this.lastName,
        birthday: this.birthday,
        email: this.email
      })
    },
    setLocaleDateStringForCalendar() {
      var options = { year: 'numeric', month: 'long', day: 'numeric' }
      return event.toLocaleDateString('en-EN', options)
    },
    cancelEdit() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.formTitle {
  font-size: 2rem;
  color: $primary-color;
  margin: 4vh 0 2vh 0;
}
.buttons {
  margin-top: 40px;
}
</style>