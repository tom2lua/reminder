<template>
  <div class="column is-3">
    <SideBarLink label="New Event" :isActive="true"></SideBarLink>
    <SideBarLink label="Calendar"></SideBarLink>
    <SideBarLink label="Settings"></SideBarLink>
  </div>
</template>

<script>
import SideBarLink from './SideBarLink'
export default {
  name: 'SideBar',
  components: {
    SideBarLink
  }
}
</script>

<style lang="scss" scoped>
</style>