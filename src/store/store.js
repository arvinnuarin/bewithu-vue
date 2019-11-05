/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

import moduleAuth from './auth/moduleAuth'
import moduleTodo from './todo/moduleTodo'
import moduleCalendar from './calendar/moduleCalendar'
import moduleReport from './report/moduleReport'
import moduleNotif from './notif/moduleNotif'

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
      auth: moduleAuth,  
      todo: moduleTodo,
      calendar: moduleCalendar,
      report: moduleReport,
      notif: moduleNotif
    },
    strict: process.env.NODE_ENV !== 'production'
})
