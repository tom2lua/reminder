<template>
  <div class="columns">
    <div class="column is-6 settingsContainer">
      <p class="formTitle">Settings</p>
      <table>
        <tr>
          <td>
            <b class="settingLabel secondaryTextColor"
              >First day of the week:</b
            >
          </td>
          <td>
            <b-field>
              <b-radio-button v-model="firstDayOfWeek" native-value="Monday">
                <span
                  class="radioInputs"
                  :class="{ active: firstDayOfWeek == 'Monday' }"
                  >Monday</span
                >
              </b-radio-button>
              <b-radio-button v-model="firstDayOfWeek" native-value="Sunday">
                <span
                  class="radioInputs"
                  :class="{ active: firstDayOfWeek == 'Sunday' }"
                  >Sunday</span
                >
              </b-radio-button>
            </b-field>
          </td>
        </tr>
        <tr>
          <td>
            <b class="settingLabel secondaryTextColor">Hour Format:</b>
          </td>
          <td>
            <b-field>
              <b-radio-button v-model="is12HourFormat" :native-value="true">
                <span class="radioInputs" :class="{ active: is12HourFormat }"
                  >12</span
                >
              </b-radio-button>
              <b-radio-button v-model="is12HourFormat" :native-value="false">
                <span class="radioInputs" :class="{ active: !is12HourFormat }"
                  >24</span
                >
              </b-radio-button>
            </b-field>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsForm',
  data() {
    return {
      firstDayOfWeek: null,
      is12HourFormat: null,
      isNotiEnabled: null
    }
  },
  methods: {
    initData() {
      this.firstDayOfWeek = this.$store.state.settings.settings.firstDayOfWeek
      this.is12HourFormat = this.$store.state.settings.settings.is12HourFormat
      this.isNotiEnabled = this.$store.state.settings.settings.isNotiEnabled
    },
    updateUserSettings() {
      this.$store.dispatch('UPDATE_USER_SETTINGS', {
        firstDayOfWeek: this.firstDayOfWeek,
        is12HourFormat: this.is12HourFormat,
        isNotiEnabled: this.isNotiEnabled
      })
    }
  },
  created() {
    this.initData()
  },
  watch: {
    firstDayOfWeek(newValue, oldValue) {
      if (oldValue != null) this.updateUserSettings()
    },
    is12HourFormat(newValue, oldValue) {
      if (oldValue != null) this.updateUserSettings()
    },
    isNotiEnabled(newValue, oldValue) {
      if (oldValue != null) this.updateUserSettings()
    }
  }
}
</script>

<style lang="scss" scoped>
.formTitle {
  font-size: 2rem;
  color: var(--text-color-primary);
  margin: 4vh 0 1.5vh 0;
}
.settingsContainer {
  margin-left: 6vh;
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
  vertical-align: middle;
}
.buttons {
  margin-top: 30px;
}
.radioInputs:not(.active) {
  color: var(--text-color-secondary);
}
</style>