/*=========================================================================================
  File Name: moduleNotifState.js
  Description: Notification Module State
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

export default {
  dash: {
    users: 100,
    sales: 300,
    expenses: 400,
    appointment: 600
  },
  appointment: {
    pending: 30,
    completed: 40,
    ratio: 75
  },
  sales: {
    this_month: 500,
    last_month: 700,
    history: [10,20,30,40,50,60,70,80,90,100,110,120]
  }
}
// { id, isRead, title, msg, icon, category, created_at, callback_url}