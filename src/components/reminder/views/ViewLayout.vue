<template>
  <div class="column is-9">
    <router-view class="viewContainer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'ViewLayout'
}
</script>

<style lang="scss" scoped>
.viewContainer {
  margin-bottom: 13vh;
}
</style>
