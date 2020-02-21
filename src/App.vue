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
    }
    this.$store.dispatch('INIT_THEME')
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
    }
  }
}
</script>

<style lang="scss">
@import './customization.scss';

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
