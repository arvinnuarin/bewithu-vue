/*=========================================================================================
  File Name: moduleNotifActions.js
  Description: Notification Module Actions
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

import ax from '@/axiosInstance'

export default {

  async getNotifications({ commit }) {
    await ax.get('/notification').then(res => commit('SET_NOTIFICATION', res.data))
    .catch(() => commit('SET_NOTIFICATION', []));
  },
}