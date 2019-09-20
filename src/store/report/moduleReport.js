/*=========================================================================================
  File Name: moduleReport.js
  Description: Reportication Module
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/


import state from './moduleReportState.js'
import mutations from './moduleReportMutations.js'
import actions from './moduleReportActions.js'
import getters from './moduleReportGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}