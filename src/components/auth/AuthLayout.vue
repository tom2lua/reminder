<template>
  <div class="authContainer">
    <div class="logo">Reminder</div>
    <div class="columns is-gapless is-centered">
      <div class="column is-full-mobile is-half-tablet is-5-desktop is-4-widescreen is-3-fullhd">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style lang="scss" scoped>
.authContainer {
  display: block;
  background-color: var(--primary-color-lighter);
  height: 100vh;
  width: 100vw;
}
.logo {
  text-align: center;
  color: var(--text-color-primary);
  font-size: 5vw;
  padding: 5vh 0;
}
</style>
