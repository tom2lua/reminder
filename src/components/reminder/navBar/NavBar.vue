<template>
  <b-navbar class="navBarContainer">
    <template slot="brand">
      <b-navbar-item>
        <div class="logo">Reminder</div>
      </b-navbar-item>
    </template>

    <template slot="end">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <div class="navBarMenu">Nguyen</div>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <div class="navBarMenu">Logout</div>
          </div>
        </div>
      </nav>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="scss">
.navBarContainer {
  height: 8vw;
  border-bottom: 2px solid $secondary-color;
  width: 100%;
}
.logo {
  font-size: 3vw;
  margin-left: 3.5vw;
  color: $primary-color;
}
.navBarMenu {
  font-size: 1.5vw;
  width: 10vw;
  color: $primary-color;
}
.navbar-menu {
  margin-right: 0px !important;
}
</style>
