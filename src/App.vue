<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    const userFromLocalStorage = JSON.parse(
      localStorage.getItem('loggedInUser')
    )
    if (userFromLocalStorage) {
      this.$store.commit('setUser', userFromLocalStorage)
      this.$router.push({ name: 'calendar' })
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
