<template>
  <div class="column is-3 sideBar">
    <SideBarLink label="New Event" link="newEvent"></SideBarLink>
    <SideBarLink label="Calendar" link="calendar"></SideBarLink>
    <SideBarLink label="Settings" link="settings"></SideBarLink>
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
.sideBar {
  border-right: 2px solid $secondary-color;
}
</style>
