<!-- =========================================================================================
  File Name: Deposit.vue
  Description: Deposit Component
  Component Name: Deposit
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-row">
        <div class="vx-col w-full lg:w-1/2 xl:w-1/2 md:w-1/2">
             <vx-card title="Deposit Bitcoin" title-color="primary">
                <div class="p-4">
                    <h2>{{ amount }}</h2>
                </div>
                <div class="p-4">
                    <div class="vx-row">
                        <div class="vx-col w-full lg:w-1/2 xl:w-1/2 md:w-1/2 mt-8">
                            <div>
                                <label>Send your bitcoin deposit to:</label> 
                                <vs-input class="inputx w-full mt-3" :value="btc_wallet" readonly/>
        
                            </div>
                            <div class="p-4 mt-2">
                                <h5>Minimum deposit is mBTC 1</h5>
                                <vs-button color="#a9a9a9" type="filled" @click="copyBTC" class="rounded-full mt-4">Copy Bitcoin Address</vs-button>
                            </div>
                        </div>
                        <div class="vx-col w-full lg:w-1/2 xl:w-1/2 md:w-1/2">
                            <vue-qrcode :value="btc_wallet" :options="{ width: 220 }" class="float-right" />
                        </div>
                    </div>
                </div>
             </vx-card>
        </div>
        <div class="vx-col w-full lg:w-1/2 xl:w-1/2 md:w-1/2">
             <vx-card title="Latest BTC Deposit Transactions" title-color="primary">
                 <vs-table :data="deposits">
                    <template slot="thead">
                        <vs-th>Transaction Date</vs-th>
                        <vs-th>Amount</vs-th>
                        <vs-th>Status</vs-th>
                    </template>
                     <template slot-scope="{data}">
                        <vs-tr :key="i" v-for="(dep, i) in data">
                            <vs-td :data="dep.created_at">{{ dep.created_at }}</vs-td>
                            <vs-td :data="dep.created_at" class="font-bold">{{ convertmBTC(dep.amount) }}</vs-td>
                            <vs-td :data="dep.status" class="font-bold">{{ dep.status }}</vs-td>
                        </vs-tr>
                     </template>
                 </vs-table>
             </vx-card>
        </div>
    </div>
</template>
<script>

import VueQrcode from '@chenfengyuan/vue-qrcode'

export default {
    name: 'Deposit',
    components: {
        VueQrcode
    },
    computed: {
        deposits() {
            return [{
                created_at: '2019-11-11 18:00:00',
                amount: '123456789',
                status: 'SUCCESSFUL'
            }]
        },
        amount() {
            return 'mBTC ' + (this.$store.state.wallet.btc_wallet.amount / 100000).toFixed(2)
        },
        btc_wallet() {
            return this.$store.state.wallet.btc_wallet.btc_address
        }
    },
    methods: {
        convertmBTC(satoshi) {
            return 'mBTC ' + (satoshi / 100000).toFixed(2)
        }, 
        copyBTC() {
            
        }
    }
}
</script>
