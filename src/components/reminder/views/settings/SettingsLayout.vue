<template>
  <div>
    <UserInfo></UserInfo>
    <div class="divider"></div>
    <SettingsForm></SettingsForm>
  </div>
</template>

<script>
import UserInfo from '../user/userInfo/UserInfo'
import SettingsForm from './settingsForm/SettingsForm'

export default {
  name: 'SettingsLayout',
  components: {
    UserInfo,
    SettingsForm
  }
}
</script>

<style lang="scss" scoped>
.divider {
  height: 2px;
  width: 95%;
  background-color: #c6b2fb;
  margin-left: 2.5%;
  margin-top: 3vh;
}
</style>
