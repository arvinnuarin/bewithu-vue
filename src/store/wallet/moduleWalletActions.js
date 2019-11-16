/*=========================================================================================
  File Name: moduleWalletActions.js
  Description: Wallet Module Actions
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

import ax from '@/axiosInstance'

export default {

  // Get Customer BTC Wallet
  async getBtcWallet({ commit }) {
    await ax.get('/wallet/btc').then(res => commit('SET_CUST_BTC_WALLET', res.data))
  },
  // Get All Customer Deposits
  async getDeposits({ commit }) {
    await ax.get('/wallet/btc/transaction/deposits').then(res => commit('SET_TRANS_DEPOSIT', res.data)).catch(() => commit('SET_TRANS_DEPOSIT', []))
  },
  // Create Withdrawal Request
  createWithdraw({ commit }, withdraw) {
    commit('ADD_TRANS_WITHDRAW', withdraw);
  }
}