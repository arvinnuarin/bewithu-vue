/*=========================================================================================
  File Name: moduleWalletMutations.js
  Description: Wallet Module Mutations
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

export default {
  SET_CUST_BTC_WALLET(state , wallet) {
    state.btc_wallet = wallet
  },
  SET_TRANS_DEPOSIT(state, deposits) {
    state.deposits = deposits
  },
  SET_TRANS_WITHDRAW(state, withdrawals) {
    state.withdrawals = withdrawals
  },
  ADD_TRANS_DEPOSIT(state, deposit) {
    state.deposits.unshift(deposit)
  },
  ADD_TRANS_WITHDRAW(state, withdraw) {
    state.withdrawals.unshift(withdraw)
  },

}