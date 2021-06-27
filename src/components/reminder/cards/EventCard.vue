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
        <span class="eventName detailText">{{ event.name }}</span>
        <div>
          <b-tooltip label="Initial Date" type="is-light" position="is-right">
            <div>
              <b-icon pack="fas" icon="calendar-alt" size="is-small"></b-icon>
              <span class="eventDate detailText">{{ getDateString() }}</span>
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
        <div v-if="event.startTime">
          <b-tooltip label="Event Time" type="is-light" position="is-right">
            <div>
              <b-icon pack="fas" icon="clock" size="is-small"></b-icon>
              <span class="detailText"
                >{{ getTimeString(event.startTime) }} -
                {{ getTimeString(event.endTime) }}</span
              >
            </div>
          </b-tooltip>
        </div>
      </div>
      <div v-if="event.location">
        <b-tooltip label="Location" type="is-light" position="is-right">
          <div>
            <b-icon pack="fas" icon="map-marker-alt" size="is-small"></b-icon>
            <span class="detailText">{{ event.location }}</span>
          </div>
        </b-tooltip>
      </div>

      <div v-if="event.description">
        <b-tooltip label="Description" type="is-light" position="is-right">
          <div>
            <b-icon pack="fas" icon="comment-alt" size="is-small"></b-icon>
            <span class="detailText">{{ event.description }}</span>
          </div>
        </b-tooltip>
      </div>
      <b-tooltip label="Repeat" type="is-light" position="is-right">
        <div>
          <b-icon pack="fas" icon="redo-alt" size="is-small"></b-icon>
          <span class="detailText">{{ event.repeatOption }}</span>
        </div>
      </b-tooltip>
      <div class="eventDetailText" v-on:click="showEventDetail">
        <a>See Details</a>
      </div>
    </div>
  </b-collapse>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'FutureEventCard',
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
      ],
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
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
    },
    showEventDetail() {
      this.$router.push({ path: `eventDetail/${this.event.id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
  color: var(--text-color-secondary) !important;
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
  background-color: var(--primary-color-lighter);
  border-radius: 100%;
}
.eventDetailText {
  margin-top: 10px;
}
.eventDetailText a {
  color: var(--text-color-primary);
}
</style>