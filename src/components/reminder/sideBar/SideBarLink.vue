<template>
  <p class="sideBarLink" :class="{ active: isActive }">{{label}}</p>
</template>

<script>
export default {
  name: 'SideBarLink',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    label: String,
    link: String,
  }
}
</script>

<style lang="scss" scoped>
@import "../../../sass/abstracts/_variables";

.sideBarLink {
  display: flex;
  align-items: center;
  height: 4.3vw;
  font-size: 1.7vw;
  padding-left: 2vw;
}
.sideBarLink:first-child {
  margin-top: 2vw;
}
.sideBarLink:hover {
  background-color: $secondary-color;
  color: white;
  cursor: pointer;
}
.active {
  background-color: $secondary-color;
  color: white;
}
</style>