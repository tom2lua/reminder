<template>
  <div class="columns">
    <div class="column is-6 settingContainer">
      <p class="title">Settings</p>
      <table>
        <tr>
          <td>
            <b class="infoLabel">First day of the week</b>
          </td>
          <td>
            <p>{{settings.firstDayOfWeek}}</p>
          </td>
        </tr>
        <tr>
          <td>
            <b class="infoLabel">Time Format</b>
          </td>
          <td>
            <p>{{settings.is12HourFormat ? '12' : '24'}}</p>
          </td>
        </tr>
        <tr>
          <td>
            <b class="infoLabel">Notification Enabled:</b>
          </td>
          <td>
            <p>{{settings.isNotiEnabled ? 'Yes' : 'No'}}</p>
          </td>
        </tr>
      </table>
      <router-link class="changeText" :to="{name: 'editSettings'}">Change your settings</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsInfo',
  data() {
    return {
      settings: {}
    }
  },
  methods: {
    initData() {
      this.settings = this.$store.state.settings.settings
    }
  },
  created() {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
.settingContainer {
  margin-left: 6vh;
}
.title {
  font-size: 2rem;
  color: $primary-color;
  margin: 4vh 0 1.5vh 0;
  font-weight: normal;
}
.userInfo {
  font-size: 1.2rem;
  margin-bottom: 10px;
}
.infoLabel {
  width: 30px;
}
.changeText {
  font-size: 1.2rem;
}
table {
  margin-bottom: 1.5vh;
}
tr {
  font-size: 1.2rem;
  margin-bottom: 10px;
}
td,
th {
  text-align: left;
  padding: 8px 8px 8px 1.5vh;
}
</style>