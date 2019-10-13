<template>
  <div id="simple-calendar-app">
    <div class="vx-card app-fixed-height">
      <calendar-view
        ref="calendar"
        :displayPeriodUom="calendarView"
        :show-date="showDate"
        :events="simpleCalendarEvents"
        :eventTop="windowWidth <= 400 ? '2rem' : '3rem'"
        eventBorderHeight="0px"
        eventContentHeight="1.65rem"
        class="theme-default"
        @click-date="openAddNewEvent"
        @click-event="openEditEvent">

        <div slot="header" class="mb-4">

          <div class="vx-row no-gutter">

            <!-- Month Name -->
            <div class="vx-col w-1/3 items-center sm:flex hidden">
          
            </div>

            <!-- Current Month -->
            <div class="vx-col sm:w-1/3 w-full sm:my-0 my-3 flex sm:justify-end justify-center order-last">
              <div class="flex items-center">
                <feather-icon icon="ChevronLeftIcon" @click="updateMonth(-1)" svgClasses="w-5 h-5 m-1" class="cursor-pointer bg-primary text-white rounded-full" />
                <span class="mx-3 text-xl font-medium whitespace-no-wrap">{{ showDate | month }}</span>
                <feather-icon icon="ChevronRightIcon" @click="updateMonth(1)" svgClasses="w-5 h-5 m-1" class="cursor-pointer bg-primary text-white rounded-full" />
              </div>
            </div>

            <div class="vx-col sm:w-1/3 w-full flex justify-center">
              <template v-for="(view, index) in calendarViewTypes">
                <vs-button
                  v-if="calendarView === view.val"
                  :key="String(view.val) + 'filled'"
                  type="filled"
                  class="p-3 md:px-8 md:py-3"
                  :class="{'border-l-0 rounded-l-none': index, 'rounded-r-none': calendarViewTypes.length !== index+1}"
                  @click="calendarView = view.val"
                  >{{ view.label }}</vs-button>
                <vs-button
                  v-else
                  :key="String(view.val) + 'border'"
                  type="border"
                  class="p-3 md:px-8 md:py-3"
                  :class="{'border-l-0 rounded-l-none': index, 'rounded-r-none': calendarViewTypes.length !== index+1}"
                  @click="calendarView = view.val"
                  >{{ view.label }}</vs-button>
              </template>

            </div>
          </div>

          <div class="vx-row sm:flex hidden mt-4">
            <div class="vx-col w-full flex">
              <!-- Labels -->
              <div class="flex flex-wrap sm:justify-start justify-center">
                  <div v-for="(label, index) in calendarLabels" :key="index" class="flex items-center mr-4 mb-2">
                      <div class="h-3 w-3 inline-block rounded-full mr-2" :class="'bg-' + label.color"></div>
                      <span>{{ label.text }}</span>
                  </div>
                  <div class="flex items-center mr-4 mb-2">
                      <div class="h-3 w-3 inline-block rounded-full mr-2 bg-primary"></div>
                      <span>None</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </calendar-view>
    </div>

  </div>
</template>

<script>
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
import moduleCalendar from '@/store/calendar/moduleCalendar.js'
require("vue-simple-calendar/static/css/default.css")

import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    CalendarView,
    CalendarViewHeader,
    Datepicker
  },
  data() {
    return {
      showDate: new Date(),
      disabledFrom: false,
      id: 0,
      title: '',
      startDate: '',
      endDate: '',
      labelLocal: 'none',

      url: '',
      calendarView: 'month',

      activePromptAddEvent: false,
      activePromptEditEvent: false,

      calendarViewTypes: [
        {
          label: "Month",
          val: "month"
        },
        {
          label: "Week",
          val: "week"
        },
        {
          label: "Year",
          val: "year"
        },
      ]
    }
  },
  computed: {
    simpleCalendarEvents() {
        return this.$store.state.calendar.events
    },
    validForm() {
        return this.title != '' && this.startDate != '' && this.endDate != '' && (Date.parse(this.endDate) - Date.parse(this.startDate)) >= 0 && !this.errors.has('event-url');
    },
    disabledDatesTo() {
        return { to: new Date(this.startDate) }
    },
    disabledDatesFrom() {
        return { from: new Date(this.endDate) }
    },
    calendarLabels() {
        return this.$store.state.calendar.eventLabels
    },
    labelColor() {
        return (label) => {
            if (label == "business") return "success"
            else if (label == "work") return "warning"
            if (label == "personal") return "danger"
            if (label == "none") return "primary"
        }
    },
    windowWidth() {
      return this.$store.state.windowWidth
    }
  },
  methods: {
    
    updateMonth(val) {
      this.showDate = this.$refs.calendar.getIncrementedPeriod(val);
      const month = new Date(this.showDate.setDate(this.showDate.getDate() + 1));
      
      this.$store.dispatch("calendar/getAppointments", month.toISOString().substring(0,10))
    },
    clearFields() {
        this.title = this.endDate = this.url = "";
        this.id= 0;
        this.labelLocal = "none";
    },
    openAddNewEvent(date) {
        this.disabledFrom = true;
        this.addNewEventDialog(date);
    },
    openEditEvent(event) {
      const e = this.$store.getters['calendar/getEvent'](event.id)
      this.id = e.id
      this.title = e.title
      this.startDate = e.startDate
      this.endDate = e.endDate
      this.url = e.url
      this.labelLocal = e.label
      this.activePromptEditEvent = true;
    },
    editEvent() {
      const obj = { id: this.id, title: this.title, startDate: this.startDate, endDate: this.endDate, label: this.labelLocal, url: this.url }
      obj.classes = "event-" + this.labelColor(this.labelLocal)
      this.$store.dispatch('calendar/editEvent', obj)
    },
  },
  created() {
    this.$store.registerModule('calendar', moduleCalendar)
    this.$store.dispatch("calendar/getAppointments", new Date().toISOString().substring(0,10))
    this.$store.dispatch("calendar/fetchEventLabels")
  },
  beforeDestroy() {
    this.$store.unregisterModule('calendar')
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/apps/simple-calendar.scss";
</style>
