<template>
  <div>
    <div v-if="!loading">
      <div class="columns is-gapless is-centered">
        <div class="column is-8-fullhd mainContainer">
          <NavBar />
          <div class="columns is-gapless contentContainer">
            <SideBar />
            <ViewLayout />
          </div>
          <Footer />
        </div>
      </div>
    </div>
    <b-loading v-else :is-full-page="true" :active.sync="loading"></b-loading>
  </div>
</template>

<script>
import NavBar from './navBar/NavBar'
import SideBar from './sideBar/SideBar'
import ViewLayout from './views/ViewLayout'
import Footer from './footer/Footer'

export default {
  name: 'ReminderLayout',
  props: {
    loading: Boolean
  },
  components: {
    NavBar,
    SideBar,
    ViewLayout,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/abstracts/_variables';
.columns {
  margin-bottom: 0 !important;
}
.mainContainer {
  margin-top: 10vh !important;
  min-height: 90vh;
  background-color: var(--secondary-color);
  position: relative;
}
.contentContainer {
  min-height: calc(100vh - 10vh - 8vw);
}
.divider {
  background-color: var(--primary-color-light);
  height: calc(110vh - 9.5vw);
  width: 2px;
}
</style>
