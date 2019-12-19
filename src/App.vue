<template>
  <div id="app">
    <router-view :loading="loading" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      loading: true
    }
  },
  created() {
    const userFromLocalStorage = JSON.parse(
      localStorage.getItem('loggedInUser')
    )
    if (userFromLocalStorage) {
      this.$store.commit('setUser', userFromLocalStorage)
      // this.$router.push({ name: 'calendar' })
    }
    this.setCSSVariables()
  },
  computed: {
    ...mapState({
      user: state => state.authentication.user,
      theme: state => state.themes.theme
    })
  },
  watch: {
    async user() {
      if (this.user) {
        await this.initStores()
      }
    }
  },
  methods: {
    async initStores() {
      await this.$store.dispatch('FETCH_EVENTS')
      await this.$store.dispatch('FETCH_EVENT_TYPES')
      await this.$store.dispatch('FETCH_USER_SETTINGS')
      this.loading = false
    },
    setCSSProperty(property, value) {
      if (property[0] != '-') {
        property = '--' + property
      }
      document.documentElement.style.setProperty(property, value)
    },
    setCSSVariables() {
      const theme = this.theme

      this.setCSSProperty('primary-color', theme.primaryColor.base)
      this.setCSSProperty('primary-color-rgb', theme.primaryColor.baseRgb)
      this.setCSSProperty('primary-color-light', theme.primaryColor.light)
      this.setCSSProperty('primary-color-lighter', theme.primaryColor.lighter)
      this.setCSSProperty('secondary-color', theme.secondaryColor)
      this.setCSSProperty('logo-color', theme.logoColor)
      this.setCSSProperty('text-color-primary', theme.textColor.primary)
      this.setCSSProperty('text-color-secondary', theme.textColor.secondary)
      this.setCSSProperty(
        'text-color-secondary-rgb',
        theme.textColor.secondaryRgb
      )
      this.setCSSProperty(
        'calendar-grid-color-thisMonth',
        theme.calendarGridColor.thisMonth
      )
      this.setCSSProperty(
        'calendar-grid-color-notThisMonth',
        theme.calendarGridColor.notThisMonth
      )
      this.setCSSProperty('font-size-normal', theme.fontSize.normal)
      this.setCSSProperty('font-size-header', theme.fontSize.header)
    }
  }
}
</script>

<style lang="scss">
@import './customization.scss';
// @import './sass/sass.scss';

html {
  overflow: scroll;
  overflow-x: hidden;
}
body {
  margin: 0;
}
::-webkit-scrollbar {
  display: none;
}
#app {
  font-family: 'Ruluko', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--primary-color-lighter);
  display: flexbox;
}
</style>
