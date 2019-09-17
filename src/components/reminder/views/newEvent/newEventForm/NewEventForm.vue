<template>
  <div>
    <b-field label="Event Name" custom-class="labelStyle">
      <b-input v-model="eventName"></b-input>
    </b-field>
    <p class="is-primary">tom</p>
  </div>
</template>

<script>
export default {
  name: 'NewEventForm',
  data() {
    return {
      eventName: '',
      labelStyle: "color: #7957d5 !important"
    }
  }
}
</script>

<style lang="scss">
.lableStyle {
  color: #7957d5 !important;
}
</style>