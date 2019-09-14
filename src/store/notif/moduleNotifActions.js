/*=========================================================================================
  File Name: moduleNotifActions.js
  Description: Notification Module Actions
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

export default {

  pushSuccess(data) {

    console.log(data)
    this._vm.$vs.notify({
      title: data.title,
      text: data.desc,
      color:'primary',
      iconPack: 'feather',
      icon:'icon-check-circle',
      time: 4000});
  },

  pushError(payload) {

    this._vm.$vs.notify({
      title: payload.title,
      text:  payload.desc,
      color:'danger',
      iconPack: 'feather',
      icon:'icon-alert-circle',
      time: 4000});
  }

}