/*=========================================================================================
  File Name: moduleWallet.js
  Description: Todo Module
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/


import state from './moduleWalletState.js'
import mutations from './moduleWalletMutations.js'
import actions from './moduleWalletActions.js'
import getters from './moduleWalletGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}