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
    await ax.get('/wallet/btc').then(res => {
      commit('SET_CUST_BTC_WALLET', res.data)
      console.log(res.data)
    } )
  }
}