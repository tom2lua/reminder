<template>
  <b-navbar class="navBarContainer">
    <template slot="brand">
      <b-navbar-item>
        <div class="logo">Reminder</div>
      </b-navbar-item>
    </template>

    <template slot="end">
      <nav class="level">
        <!-- <div class="level-item has-text-centered">
          <div>
            <router-link :to="{name: 'userInfo'}" class="navBarMenu">{{firstName}}</router-link>
          </div>
        </div>-->
        <div class="level-item has-text-centered">
          <div>
            <div v-on:click="logout" class="navBarMenu">Logout</div>
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
      isActive: true,
      firstName: ''
    }
  },
  methods: {
    logout() {
      this.$store.commit('logout')
      localStorage.removeItem('loggedInUser')
      this.$router.push({ name: 'login' })
    }
  },
  created() {
    this.firstName = this.$store.state.authentication.user.firstName
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

  &:hover {
    cursor: pointer;
  }
}
.navbar-menu {
  margin-right: 0px !important;
}
</style>
