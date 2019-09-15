<template>
  <div id="app">
    <ReminderLayout />
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

<style lang="scss">
@import "./sass/abstracts/_variables.scss";
@import "~bulma/sass/utilities/_all";

body {
  margin: 0;
  background-color: #9f8fcc;
  overflow: hidden;
}
body::-webkit-scrollbar {
  display: none;
}
#app {
  font-family: "Ruluko", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-color;
}
</style>
