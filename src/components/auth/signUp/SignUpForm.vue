<template>
  <div class="formContainer">
    <div class="columns is-gapless is-mobile is-centered">
      <div class="column is-10 is-10-mobile">
        <ValidationObserver ref="observer" v-slot="{ passes }">
          <BInputWithValidation
            rules="required|alpha_num|min:6,Username|unique:username"
            type="text"
            label="Username"
            v-model="username"
          />
          <BInputWithValidation
            rules="required|min:8,Password"
            type="password"
            label="Password"
            vid="password"
            v-model="password"
          />
          <BInputWithValidation
            rules="required|confirmed:password"
            name="Password"
            type="password"
            label="Confirm Password"
            v-model="confirmPassword"
          />
          <BInputWithValidation
            rules="required|email|unique:email"
            type="email"
            label="Email"
            v-model="email"
          />

          <b-button class="signUpButton" type="is-primary" v-on:click="passes(signUp)">Sign Up</b-button>
        </ValidationObserver>
        <div class>
          Already have an account? Login
          <router-link :to="{name: 'login'}">here</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BInputWithValidation from '../../inputs/BInputWithValidation'
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'SignUpForm',
  components: {
    BInputWithValidation,
    ValidationObserver
  },
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      email: ''
    }
  },
  methods: {
    signUp() {
      this.$store.dispatch('SIGN_UP', {
        username: this.username,
        password: this.password,
        email: this.email
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.formContainer {
  padding: 20px 0;
  display: block;
  background-color: white;
}
.columns {
  margin: 0;
}
.signUpButton {
  margin: 30px 0px 20px 0px;
}
</style>
