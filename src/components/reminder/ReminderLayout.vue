<template>
  <div class="column is-8-fullhd is-full-mobile mainContainer">
    <NavBar></NavBar>
    <div class="columns is-gapless">
      <SideBar></SideBar>
      <div class="column is-narrow">
        <div class="divider"></div>
      </div>
      <ViewLayout></ViewLayout>
    </div>
  </div>
</template>

<script>
import NavBar from './navBar/NavBar'
import SideBar from './sideBar/SideBar'
import ViewLayout from './views/ViewLayout'

export default {
  name: 'ReminderLayout',
  components: {
    NavBar, SideBar, ViewLayout
  },
}
</script>

<style lang="scss" scoped>
@import "../../sass/abstracts/_variables";

.mainContainer {
  margin-top: 10vh !important;
  min-height: 90vh;
  // max-height: 836px;
  background-color: white;
}
.divider {
  background-color: $secondary-color;
  height: calc(90vh - 9.5vw);
  width: 2px;
}
</style>
