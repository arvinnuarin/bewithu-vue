/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

import ax from '@/axiosInstance'

export default {

  async getAppointments({ commit }, month) {
    await ax.get(`/appointments/date/${month}`).then(res => {
      console.log(res.data);
      commit('SET_EVENTS', res.data)
    });
  },

  fetchEvents({ commit }) {
    return new Promise((resolve, reject) => {
      ax.get("/api/apps/calendar/events")
        .then((response) => {
          commit('SET_EVENTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchEventLabels({ commit }) {
    return new Promise((resolve, reject) => {
      ax.get("/api/apps/calendar/labels")
        .then((response) => {
          commit('SET_LABELS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
}
