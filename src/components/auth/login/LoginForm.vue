<template>
  <div class="formContainer">
    <div class="columns is-gapless is-mobile is-centered">
      <div class="column is-10 is-10-mobile">
        <b-field label="Username" custom-class="has-text-primary">
          <b-input v-model="username"></b-input>
        </b-field>
        <b-field label="Password" custom-class="has-text-primary">
          <b-input type="password" v-model="password" password-reveal></b-input>
        </b-field>
        <p class="has-text-right">
          <router-link :to="{name: 'signUp'}">Forgot your password</router-link>
        </p>
        <b-button v-on:click="login" type="is-primary">Login</b-button>
        <p class="registerText">
          Doesn't have an account yet? Join us
          <router-link :to="{name: 'signUp'}">now!</router-link>
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
    }
  },
  methods: {
    login() {

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
.registerText {
  margin-top: 20px;
}
</style>