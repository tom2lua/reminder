<template>
  <div class="formContainer">
    <div class="columns is-gapless is-mobile is-centered">
      <div class="column is-10 is-10-mobile">
        <b-field label="Username" custom-class="has-text-primary">
          <b-input v-model="username"></b-input>
        </b-field>
        <b-field label="Password" custom-class="has-text-primary">
          <b-input type="password" v-model="password"></b-input>
        </b-field>
        <b-field label="Re-type Password" custom-class="has-text-primary">
          <b-input type="password" v-model="retypePassword"></b-input>
        </b-field>
        <b-field label="Email" custom-class="has-text-primary">
          <b-input v-model="email"></b-input>
        </b-field>
        <b-button type="is-primary">Sign Up</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data() {
    return {
      username: '',
      password: '',
      retypePassword: '',
      email: '',
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