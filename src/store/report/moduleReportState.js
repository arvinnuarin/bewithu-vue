/*=========================================================================================
  File Name: moduleNotifState.js
  Description: Notification Module State
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

export default {
  dash: {
    users: 0,
    sales: 0,
    expenses: 0,
    appointment: 0,
    appt_completed: 0
  },
  appointment: {
    pending: 30,
    completed: 40,
    ratio: 75
  },
  sales: {
    this_month: 500,
    last_month: 0,
    history: [0,0,0,0,0,0,0,0,0,0,110,0]
  }
}
// { id, isRead, title, msg, icon, category, created_at, callback_url}