/*=========================================================================================
  File Name: moduleNotifMutations.js
  Description: Notification Module Mutations
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

export default {
  
  ADD_NOTIFICATION(state, newNotif) {
    state.notifsArray.push(newNotif);
  }
}