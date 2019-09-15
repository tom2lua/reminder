<template>
  <div class="container mainContainer">
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from './navBar/NavBar'

export default {
  name: 'ReminderLayout',
  components: {
    NavBar,
  },
}
</script>

<style lang="scss" scoped>
.mainContainer {
  margin-top: 10vh;
  width: 80vw;
  height: 90vh;
  min-height: 836px;
  background-color: white;
}
</style>
