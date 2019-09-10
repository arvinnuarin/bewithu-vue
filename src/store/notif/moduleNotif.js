/*=========================================================================================
  File Name: moduleNotif.js
  Description: Notification Module
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/


import state from './moduleNotifState.js'
import mutations from './moduleNotifMutations.js'
import actions from './moduleNotifActions.js'
import getters from './moduleNotifGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}