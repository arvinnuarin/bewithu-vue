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

      let appts = []

      res.data.forEach(element => {
        const customer = JSON.parse(element.customer)
        
        appts.push({
          id : element.id,
          title: `${element.companion} -> ${customer.first} ${customer.last}`,
          startDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 3),
          endDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 2),
          url: '',
          classes: 'event-success',
          label: element.status
        })
      });


    /*  {
        id: 1,
        title: 'My Event',
        startDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 3),
        endDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 2),
        url: '',
        classes: 'event-success',
        label: 'business'
    }, */
      commit('SET_EVENTS', appts)
    });
  }
}
