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
  },
  computed: {
    ...mapState({
      user: state => state.authentication.user
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
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';

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
  background-color: $background-color;
  display: flexbox;
}
</style>
