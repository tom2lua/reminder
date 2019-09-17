<template>
  <div id="app">
    <div class="columns is-gapless is-centered">
      <ReminderLayout />
    </div>
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

$tom-color: $primary-color;

$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Import Bulma and Buefy styles
// @import "~bulma";
// @import "~buefy/src/scss/buefy";

html {
  overflow: scroll;
  overflow-x: hidden;
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
  background-color: #9f8fcc;
}
::-webkit-scrollbar {
  display: none;
}
#app {
  font-family: "Ruluko", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
