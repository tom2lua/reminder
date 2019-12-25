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
          <b-dropdown aria-role="list">
            <div class="navBarMenu" slot="trigger">
              <span>Theme</span>
            </div>

            <b-dropdown-item v-for="(theme, index) in themes" :key="index" aria-role="listitem">
              <div class="dropdownItemContainer" v-on:click="changeTheme(theme.name)">{{theme.name}}</div>
            </b-dropdown-item>
            <!-- <b-dropdown-item aria-role="listitem">
              <div class="dropdownItemContainer" v-on:click="changeTheme('retro')">Retro</div>
            </b-dropdown-item>
            <b-dropdown-item aria-role="listitem">
              <div class="dropdownItemContainer" v-on:click="changeTheme('coffee')">Coffee</div>
            </b-dropdown-item>-->
          </b-dropdown>
        </div>

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
import { mapState } from 'vuex'
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
    },
    changeTheme(theme) {
      this.$store.dispatch('SET_THEME', theme)
    }
  },
  created() {
    this.firstName = this.$store.state.authentication.user.firstName
  },
  computed: {
    ...mapState({
      themes: state => state.themes.themes
    })
  }
}
</script>

<style lang="scss">
.navBarContainer {
  height: 8vw;
  border-bottom: 2px solid var(--primary-color-light);
  width: 100%;
  background-color: var(--secondary-color);
}
.logo {
  font-size: 3vw;
  margin-left: 3.5vw;
  color: var(--text-color-primary);
}
.navBarMenu {
  font-size: 1.5vw;
  width: 10vw;
  color: var(--text-color-primary);

  &:hover {
    cursor: pointer;
  }
}
.navbar-menu {
  margin-right: 0px !important;
}
// .dropdown-item {
//   color: var(--text-color-secondary);
//   height: 50px;
// }
.dropdownItemContainer {
  color: var(--text-color-secondary);
  height: 35px;
  display: flex;
  align-items: center;
}
</style>
