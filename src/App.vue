<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ReminderLayout msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import ReminderLayout from './components/reminder/ReminderLayout'

export default {
  name: 'app',
  components: {
    ReminderLayout
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
