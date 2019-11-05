/*=========================================================================================
  File Name: moduleNotifMutations.js
  Description: Notification Module Mutations
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

export default {
  
  SET_NOTIFICATION(state, notifs) {
    state.notifsArray = notifs;
  },
  ADD_NOTIFICATION(state, newNotif) {
    state.notifsArray.unshift(newNotif);
  }
}