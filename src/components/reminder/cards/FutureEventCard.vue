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
        <div>
          <b-tooltip label="Event Date" type="is-light" position="is-right">
            <div>
              <b-icon pack="fas" icon="calendar-alt" size="is-small"></b-icon>
              <span class="eventDate detailText">{{getDateString()}}</span>
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
              <span
                class="detailText"
              >{{getTimeString(event.startTime)}} - {{getTimeString(event.endTime)}}</span>
            </div>
          </b-tooltip>
        </div>
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
      <b-tooltip label="Repeat" type="is-light" position="is-right">
        <div>
          <b-icon pack="fas" icon="redo-alt" size="is-small"></b-icon>
          <span class="detailText">{{event.repeatOption}}</span>
        </div>
      </b-tooltip>
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
      const initialDate = new Date(this.event.date)

      const ealiestEventDate = this.getEaliestEventDate(this.event)
      return this.getDayString(ealiestEventDate)
        ? this.getDayString(ealiestEventDate)
        : `${ealiestEventDate.getDate()}${this.getOrdinalNumber(
            ealiestEventDate.getDate()
          )} ${
            this.monthNames[ealiestEventDate.getMonth()]
          }, ${ealiestEventDate.getFullYear()}`
    },
    getDayString(eventDate) {
      const oneDayInMiliseconds = 86400000
      const today = new Date()
      const endOfThisWeek = new Date()
      const endOfNextWeek = new Date()

      today.setHours(0, 0, 0, 0)
      endOfThisWeek.setHours(0, 0, 0, 0)
      endOfNextWeek.setHours(0, 0, 0, 0)

      endOfThisWeek.setDate(
        endOfThisWeek.getDate() + 6 - endOfThisWeek.getDay()
      )
      endOfNextWeek.setDate(
        endOfNextWeek.getDate() + 13 - endOfNextWeek.getDay()
      )

      const eventDateTimeDiff = eventDate.getTime() - today.getTime()
      const thisWeekTimeDiff = endOfThisWeek.getTime() - today.getTime()
      const nextWeekTimeDiff = endOfNextWeek.getTime() - today.getTime()

      if (eventDateTimeDiff === 0) {
        return 'Today'
      } else if (eventDateTimeDiff === oneDayInMiliseconds) {
        return 'Tomorrow'
      } else if (eventDateTimeDiff === 2 * oneDayInMiliseconds) {
        return 'The day after tomorrow'
      } else if (
        eventDateTimeDiff > 2 * oneDayInMiliseconds &&
        eventDateTimeDiff <= thisWeekTimeDiff
      )
        return `This ${this.dayNames[eventDate.getDay()]}`
      else if (
        eventDateTimeDiff > thisWeekTimeDiff &&
        eventDateTimeDiff <= nextWeekTimeDiff
      )
        return `Next ${this.dayNames[eventDate.getDay()]}`
      else return false
    },
    getTimeString(inputTime) {
      const time = new Date(inputTime)
      return time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    },
    getOrdinalNumber(number) {
      if (number <= 0) return null
      if (number >= 10 || number <= 20) return 'th'
      if (number % 10 === 1) return 'st'
      else if (number % 10 === 2) return 'nd'
      else return 'th'
    },
    getEaliestEventDate(event) {
      const eventDate = new Date(event.date)
      const returnDate = new Date()
      returnDate.setHours(0, 0, 0, 0)
      switch (event.repeatOption) {
        case 'Weekly':
          //Change date to next week if already pass this week
          if (eventDate.getDay() >= returnDate.getDay())
            returnDate.setDate(
              returnDate.getDate() + eventDate.getDay() - returnDate.getDay()
            )
          else
            returnDate.setDate(
              returnDate.getDate() +
                7 +
                eventDate.getDay() -
                returnDate.getDay()
            )
          return returnDate
        case 'Monthly':
          returnDate.setDate(eventDate.getDate())
          return returnDate
        case 'Annually':
          returnDate.setMonth(eventDate.getMonth())
          returnDate.setDate(eventDate.getDate())
          return returnDate
        case 'No Repeat':
          return eventDate
      }
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