/*=========================================================================================
  File Name: moduleTransaction.js
  Description: Transaction VUEX Module
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

import state from './moduleTransactionState.js'
import mutations from './moduleTransactionMutations.js'
import actions from './moduleTransactionActions.js'
import getters from './moduleTransactionGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}