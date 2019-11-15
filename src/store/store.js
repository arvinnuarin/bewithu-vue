/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

import moduleAuth from './auth/moduleAuth'
import moduleNotif from './notif/moduleNotif'
import moduleWallet from './wallet/moduleWallet'

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
      auth: moduleAuth,
      notif: moduleNotif,
      wallet: moduleWallet
    },
    strict: process.env.NODE_ENV !== 'production'
})
