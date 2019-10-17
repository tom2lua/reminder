<template>
  <div>
    <div class="columns">
      <UserInfo></UserInfo>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
import UserInfo from './userInfo/UserInfo'
export default {
  name: 'UserInfoView',
  components: {
    UserInfo
  }
}
</script>

<style lang="scss" scoped>
.formTitle {
  font-size: 2rem;
  color: $primary-color;
  margin: 3vh 0 2vh 0;
}
.divider {
  height: 2px;
  width: 95%;
  background-color: #c6b2fb;
  margin-left: 2.5%;
  margin-top: 3vh;
}
</style>