<template>
  <div>
    <UserInfoView></UserInfoView>
    <SettingsForm></SettingsForm>
  </div>
</template>

<script>
import UserInfoView from '../user/userInfoView/UserInfoView'
// import SettingsInfo from './settingsInfo/SettingsInfo'
import SettingsForm from './settingsForm/SettingsForm'

export default {
  name: 'SettingsLayout',
  components: {
    UserInfoView,
    // SettingsInfo,
    SettingsForm
  }
}
</script>

<style lang="scss"></style>
