<template>
  <div class="formContainer">
    <div class="columns is-gapless is-mobile is-centered">
      <div class="column is-10 is-10-mobile">
        <b-field label="Username" custom-class="primaryTextColor">
          <b-input v-model="username"></b-input>
        </b-field>
        <b-field label="Password" custom-class="primaryTextColor">
          <b-input v-model="password" type="password"></b-input>
        </b-field>
        <p class="has-text-right">
          <b-notification
            :active.sync="notiActive"
            type="is-danger"
            aria-close-label="Close notification"
            role="alert"
          >{{ notiMessage }}</b-notification>
          <router-link :to="{ name: 'signUp' }" class="link">Forgot your password</router-link>
        </p>
        <b-button type="is-primary" @click="login">Login</b-button>
        <p class="registerText">
          Doesn't have an account yet? Join us
          <router-link :to="{ name: 'signUp' }" class="link">now</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      notiMessage: '',
      notiActive: false
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('LOG_IN', {
        username: this.username,
        password: this.password
      })
      if (!this.$store.state.authentication.authenticated) {
        this.notiMessage = 'Wrong Username or Password'
        this.notiActive = true
      } else {
        this.$router.push({ name: 'calendar' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.formContainer {
  padding: 20px 0;
  display: block;
  background-color: var(--secondary-color);
}
.columns {
  margin: 0;
}
.registerText {
  margin-top: 20px;
  color: var(--text-color-secondary);
}
.link {
  color: var(--text-color-primary);
}
.link:hover {
  color: var(--text-color-secondary);
}
</style>
