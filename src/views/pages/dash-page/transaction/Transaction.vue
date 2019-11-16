<!-- =========================================================================================
  File Name: Transaction.vue
  Description: Customer Transaction Page
  Component Name: Transaction
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->

<template>
    <div class="vx-row">
        <div class="vx-col w-full lg:w-1/4 xl:w-1/4 md:w-1/3">
             <vx-card title="Transactions Filter" title-color="primary">
                <div class="p-4">
                    <div>
                        <h4>Type</h4>
                        <div class="p-8">
                            <ul>
                                <li class="mb-4"><vs-checkbox color="success" v-model="showDeposit"><h3 class="ml-4">Deposits</h3></vs-checkbox></li>
                                <li><vs-checkbox color="danger" v-model="showWithdraw"><h3 class="ml-4">Withdrawals</h3></vs-checkbox></li>
                            </ul>
                        </div>
                    </div>
                </div>
             </vx-card>
        </div>
        <div class="vx-col w-full lg:w-3/4 xl:w-3/4 md:w-2/3">
             <vx-card title="Transactions" title-color="primary">
                <div class="w-full">
                    <vs-table :data="withdraws">
                        <template slot="thead" >
                            <vs-th>Transaction Date</vs-th>
                            <vs-th>Type</vs-th>
                            <vs-th>BTC Address</vs-th>
                            <vs-th>Amount</vs-th>
                            <vs-th>Status</vs-th>
                        </template>
                        <template slot-scope="{data}">
                            <vs-tr :key="i" v-for="(dep, i) in data">
                                <vs-td :data="dep.created_at">{{ dep.created_at | moment("ddd, MMM DD YYYY hh:mm:ss A")  }}</vs-td>
                                <vs-td :data="dep.send_to" class=" font-bold">{{ dep.send_to }}</vs-td>
                                <vs-td :data="dep.amount" class="font-bold text-primary">{{ convertmBTC(dep.amount) }}</vs-td>
                                <vs-td :data="dep.status" class="font-bold">{{ dep.status }}</vs-td>
                            </vs-tr>
                        </template>
                    </vs-table>
                </div>
             </vx-card>
        </div>
    </div>
</template>
<script>

export default {
    name: 'CustomerTransactions',
    data() {
        return {
           showWithdraw: true,
           showDeposit: true
        }
    },
    computed: {
        transactions() {
            return this.$store.state.wallet.withdrawals
        }
    },
    methods: {
        convertmBTC(satoshi) {
            return 'mBTC ' + parseFloat(satoshi).toFixed(2)
        }
    }
}
</script>