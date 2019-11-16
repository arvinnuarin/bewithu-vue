<!-- =========================================================================================
  File Name: Withdraw.vue
  Description: Withdraw Component
  Component Name: Withdraw
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-row">
        <div class="vx-col w-full lg:w-1/3 xl:w-1/3 md:w-1/2">
             <vx-card title="Withdraw Bitcoin" title-color="primary">
                <div class="p-4">
                    <h2>{{ amount | mBTC }}</h2>
                </div>
                <div class="p-4">
                    <div class="vx-row">
                        <div class="vx-col w-full mt-8">
                            <div>
                                <label>Amount in mBTC</label>
                                <div>  
                                    <small class="font-bold">Minimum withdrawal is mBTC 2.00</small>
                                </div>
                                <!-- withdraw input -->
                                <vx-input-group class="mb-base">

                                    <vs-input class="inputx w-full" v-model="withdraw" placeholder="Enter Amount"/>

                                    <template slot="append">
                                        <div class="append-text bg-primary">
                                            <span>mBTC</span>
                                        </div>
                                    </template>
                                </vx-input-group>
                            </div>
                            <div class="mt-2">
                                <div class="centerx">
                                    <vs-input class="inputx w-full" label="BTC Address" placeholder="Enter your BTC Address" v-model="withdraw_address" @focus="isWithdrawAttempt = true" @blur="isWithdrawAttempt = false"/>
                                </div>
                                <div class="mt-2" v-if="isWithdrawAttempt">
                                    <small class="font-bold text-danger">Verification required is to process the withdrawal request.</small>
                                </div>
                                
                            </div>
                             <div class="mt-2">
                                <div class="centerx">
                                    <vs-button color="primary" type="filled" @click="onWithdraw" class="rounded-full mt-4">Withdraw</vs-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </vx-card>
        </div>
        <div class="vx-col w-full lg:w-2/3 xl:w-2/3 md:w-1/2">
             <vx-card title="Latest BTC Withdraw Transactions" title-color="primary">
                <div class="w-full">
                    <vs-table :data="withdraws">
                        <template slot="thead" >
                            <vs-th>Transaction Date</vs-th>
                            <vs-th>BTC Address</vs-th>
                            <vs-th>Amount</vs-th>
                            <vs-th>Status</vs-th>
                        </template>
                        <template slot-scope="{data}">
                            <vs-tr :key="i" v-for="(dep, i) in data">
                                <vs-td :data="dep.created_at">{{ dep.created_at | moment("ddd, MMM DD YYYY hh:mm:ss A")  }}</vs-td>
                                <vs-td :data="dep.send_to" class=" font-bold">{{ dep.send_to }}</vs-td>
                                <vs-td :data="dep.amount" class="font-bold text-primary">{{ dep.amount | mBTC }}</vs-td>
                                <vs-td :data="dep.status" class="font-bold">{{ dep.status }}</vs-td>
                            </vs-tr>
                        </template>
                    </vs-table>
                </div>
                <!-- See All Transactions -->
                <div class="mt-2">
                    <vs-button color="primary" type="filled" @click="navigateToAllTransactions" class="rounded-full mt-4">See All Transactions</vs-button>
                </div>
             </vx-card>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Withdraw',
    data() {
        return {
            withdraw: null,
            withdraw_address: null,
            isWithdrawAttempt: false
        }
    },
    computed: {
        withdraws() {
            return this.$store.state.wallet.withdrawals
        },
        amount() {
            return this.$store.state.wallet.btc_wallet.amount
        },
        btc_wallet() {
            return this.$store.state.wallet.btc_wallet.btc_address
        }
    },
    methods: {
        navigateToAllTransactions() {
            return this.$router.push('/customer/funds/transactions')
        },
        onWithdraw() {
            console.log('on withdraw')
               const title = `Are you sure that this wallet address is correct? ${this.withdraw_address}`

               this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Withdrawal Confirmation`,
                text: title,
                accept: this.processWithdraw
            })
        },
        processWithdraw() {
            this.$store.dispatch('wallet/createWithdraw', {created_at: new Date(), send_to: this.withdraw_address, 'amount': this.withdraw, 'status': 'AWAITING VERIFICATION'})
            this.withdraw_address = null, this.withdraw = null
        }
    }
}
</script>
