<template>
  <div>
    <div class="header">New Event</div>
    <NewEventForm />
  </div>
</template>

<script>
import NewEventForm from './newEventForm/NewEventForm'

export default {
	name: 'NewEventLayout',
	components: {
		NewEventForm
	}
}
</script>

<style lang="scss" scoped>
@import '../../../../sass/abstracts/_variables.scss';
.header {
  margin: 3vh 0vh;
  color: $primary-color;
  font-size: 2.5vw;
  text-align: center;
}
</style>
