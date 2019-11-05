<template>
  <b-collapse :open="false" class="card" aria-id="contentIdForA11y3">
    <div
      slot="trigger"
      slot-scope="props"
      class="card-header"
      role="button"
      aria-controls="contentIdForA11y3"
    >
      <div class="column is-vcentered eventHeader">
        <b-icon
          v-bind:style="{ color: event.eventType.representColor }"
          class="eventTypeIcon"
          pack="fas"
          icon="square"
          size="is-small"
        ></b-icon>
        <span class="eventName detailText">{{event.name}}</span>
        <div v-if="event.startTime">
          <b-tooltip label="Event Time" type="is-light" position="is-right">
            <div>
              <b-icon pack="fas" icon="clock" size="is-small"></b-icon>
              <span
                class="detailText"
              >{{getTimeString(event.startTime)}} - {{getTimeString(event.endTime)}}</span>
            </div>
          </b-tooltip>
        </div>
        <div class="buttons">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </div>
      </div>
    </div>
    <div class="card-content">
      <div>
        <b-tooltip label="Initial Date" type="is-light" position="is-right">
          <div>
            <b-icon pack="fas" icon="calendar-alt" size="is-small"></b-icon>
            <span class="eventDate detailText">{{getDateString()}}</span>
          </div>
        </b-tooltip>
      </div>
      <div v-if="event.location">
        <b-tooltip label="Location" type="is-light" position="is-right">
          <div>
            <b-icon pack="fas" icon="map-marker-alt" size="is-small"></b-icon>
            <span class="detailText">{{event.location}}</span>
          </div>
        </b-tooltip>
      </div>

      <div v-if="event.description">
        <b-tooltip label="Description" type="is-light" position="is-right">
          <div>
            <b-icon pack="fas" icon="comment-alt" size="is-small"></b-icon>
            <span class="detailText">{{event.description}}</span>
          </div>
        </b-tooltip>
      </div>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'DailyEventCard',
  props: {
    event: Object
  },
  data() {
    return {
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
    getDateString() {
      const date = new Date(this.event.date)
      return date.toLocaleDateString(
        'en-EN',
        this.$store.state.settings.localeDateStringOptions
      )
    },
    getTimeString(inputTime) {
      const time = new Date(inputTime)
      return time.toLocaleString('en-EN', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: this.$store.state.settings.settings.is12HourFormat
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';

.card {
  border-radius: 5px;
}
.eventHeader {
  position: relative;
}
.eventName {
  font-weight: bold;
  font-size: 1.2rem;
}
.detailText {
  margin-left: 10px;
}
.eventTypeIcon {
  font-size: 1.2rem;
}
.buttons {
  position: absolute;
  top: 12px;
  right: 12px;
}
.editButton:hover {
  background-color: $background-color;
  border-radius: 100%;
}
</style>