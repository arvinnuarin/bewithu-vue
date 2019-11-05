/*=========================================================================================
  File Name: moduleReportActions.js
  Description: Reports Module Actions
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

import ax from '@/axiosInstance'

export default {

  async fetchData({ commit }) {
    await ax.get('/report/dashboard')
    .then( res => {
      commit('SET_REPORTS_DATA', res.data)
      console.log(res.data)
    })
    .catch( err => console.log(err));
  }
}