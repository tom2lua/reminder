<template>
  <div class="container footerContainer">
    <p>
      <b>Reminder</b> by
      <a href="https://github.com/tom2lua">Nguyen Tran</a>
      <!-- .Inspired by
      <a href="https://github.com/antrannguyen">An Tran</a>-->
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {}
}
</script>

<style lang="scss" scoped>
.footerContainer {
  text-align: center;
  line-height: 10vh;
  height: 10vh;
  background-color: var(--primary-color-light);
  color: black;
  width: 100%;
  position: relative;
  bottom: 0;
}
a {
  color: white;
}
</style>
