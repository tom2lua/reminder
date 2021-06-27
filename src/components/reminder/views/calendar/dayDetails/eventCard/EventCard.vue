<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div>
          <b-tooltip
            :label="event.eventType.name"
            type="is-light"
            position="is-top"
          >
            <b-icon
              v-bind:style="{ color: event.eventType.representColor }"
              class="eventTypeIcon"
              pack="fas"
              icon="square"
              size="is-small"
            ></b-icon>
          </b-tooltip>
          <span class="eventName detailText">{{ event.name }}</span>
        </div>

        <div v-if="!isDailyEventCard">
          <b-tooltip label="Initial Date" type="is-light" position="is-right">
            <span class="eventDate detailText">{{ getDateString() }}</span>
          </b-tooltip>
        </div>
        <br />
        <div v-if="event.location">
          <b-tooltip label="Location" type="is-light" position="is-right">
            <div>
              <b-icon pack="fas" icon="map-marker-alt" size="is-small"></b-icon>
              <span class="detailText">{{ event.location }}</span>
            </div>
          </b-tooltip>
        </div>
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
            <div>
              <b-icon pack="fas" icon="redo-alt" size="is-small"></b-icon>
              <span class="detailText">{{ event.repeatOption }}</span>
            </div>
          </div>
        </b-tooltip>
        <div class="eventDetailText" v-on:click="showEventDetail">
          <a>See Details</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: Object,
    isDailyEventCard: {
      type: Boolean,
      default: false
    }
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
    },
    showEventDetail() {
      this.$router.push({ path: `eventDetail/${this.event.id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';

.card {
  border-radius: 15px;
}
.eventName {
  font-weight: bold;
  font-size: 1.2rem;
}
.detailText {
  margin-left: 10px;
}
.eventDate {
  margin-left: 26px;
}
.eventTypeIcon {
  font-size: 1.2rem;
}
.eventDetailText {
  margin-top: 10px;
}
.eventDetailText a {
  color: var(--text-color-primary);
}
</style>