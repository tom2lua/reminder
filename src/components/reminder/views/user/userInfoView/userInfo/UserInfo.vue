<template>
  <div class="column is-6 profileContainer">
    <p class="formTitle">Your profile</p>
    <table>
      <tr>
        <td>
          <b class="infoLabel">First Name</b>
        </td>
        <td>
          <p>{{firstName ? firstName : 'N/A'}}</p>
        </td>
      </tr>
      <tr>
        <td>
          <b class="infoLabel">Last Name</b>
        </td>
        <td>
          <p>{{lastName ? lastName : 'N/A'}}</p>
        </td>
      </tr>
      <tr>
        <td>
          <b class="infoLabel">Birthday</b>
        </td>
        <td>
          <p>{{birthday ? getDateString(birthday) : 'N/A'}}</p>
        </td>
      </tr>
      <tr>
        <td>
          <b class="infoLabel">Email</b>
        </td>
        <td>
          <p>{{email ? email : 'N/A'}}</p>
        </td>
      </tr>
    </table>
    <router-link class="changeText" :to="{name: 'editProfile'}">Change your profile</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserInfo',
  data() {
    return {
      firstName: '',
      lastName: '',
      birthday: '',
      email: '',
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    }
  },
  methods: {
    initData() {
      this.firstName = this.user.firstName
      this.lastName = this.user.lastName
      this.birthday = this.user.birthday
      this.email = this.user.email
    },
    getDateString(inputDate) {
      const date = new Date(inputDate)
      return `${date.getDate()}${this.getOrdinalNumber(date.getDate())} ${
        this.monthNames[date.getMonth()]
      }, ${date.getFullYear()}`
    },
    getOrdinalNumber(number) {
      if (number <= 0) return null
      if (number >= 10 && number < 20) return 'th'
      if (number % 10 === 1) return 'st'
      else if (number % 10 === 2) return 'nd'
      else return 'th'
    }
  },
  created() {
    this.initData()
  },
  computed: {
    ...mapState({
      user: state => state.authentication.user
    })
  },
  watch: {
    user() {
      this.initData()
    }
  }
}
</script>

<style lang="scss" scoped>
.profileContainer {
  margin-left: 6vh;
}
.formTitle {
  font-size: 2rem;
  color: $primary-color;
  margin: 4vh 0 1.5vh 0;
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