<template>
  <router-link class="sideBarLink" :class="{ active: isActive }" :to="{ name: link }">{{ label }}</router-link>
</template>

<script>
export default {
  name: 'SideBarLink',
  props: {
    label: String,
    link: String
  },
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    if (this.$route.fullPath.includes(this.link)) this.isActive = true
  },
  watch: {
    $route() {
      if (this.$route.fullPath.includes(this.link)) this.isActive = true
      else this.isActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
.sideBarLink {
  display: flex;
  align-items: center;
  height: 4.3vw;
  font-size: 1.7vw;
  padding-left: 2vw;
  color: var(--text-color-primary);
}
.sideBarLink:first-child {
  margin-top: 2vw;
}
.sideBarLink:hover {
  background-color: var(--primary-color-lighter);
  color: white;
  cursor: pointer;
}
.active {
  background-color: var(--primary-color-light);
  color: white;
}
</style>
