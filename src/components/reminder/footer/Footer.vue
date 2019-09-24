<template>
  <div class="container footerContainer">
    <p>
      <b>Reminder</b> by
      <a href="https://github.com/tom2lua">Nguyen Tran</a>.Inspired by
      <a href="https://github.com/antrannguyen">An Tran</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    abc() {
      console.log()
    }
  }
}
</script>

<style lang="scss" scoped>
.footerContainer {
  text-align: center;
  line-height: 10vh;
  height: 10vh;
  background-color: $secondary-color;
  color: black;
}
a {
  color: white;
}
</style>
