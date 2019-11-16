<!-- =========================================================================================
  File Name: Funds.vue
  Description: Customer Fund component
  Component Name: Funds
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-row w-3/4 lg:3/4">
        <div class="vx-col w-1/3">
            <label class="font-bold">Balance</label>
        </div>
         <div class="vx-col w-2/3">
            <label class="font-bold">Converted Balance</label>
        </div>

        <vs-divider/>

        <div class="vx-col w-1/3">
            <div class="w-full inline-block align-middle">
                <vs-radio color="warning" v-model="btc" vs-value="true"></vs-radio>
                <span class="float-right">
                    <h3 class="text-bold">{{ btc_wallet | mBTC }}</h3>
                    <p class="text-muted">1 BTC = 1,000.00 mɃ = 1,000,000.00 µɃ</p>
                </span>
            </div>
        </div>
         <div class="vx-col w-2/3 lg:2/3">
             <div class="w-full inline-block align-middle">
                <span class="float-left">
                    <h3 class="text-bold">{{ usd | currency }}</h3>
                </span>
                <span class="float-right">
                    <vs-button class="rounded-full mr-3" color="warning" type="filled" @click="navigateToDeposit">Deposit</vs-button>
                    <vs-button class="rounded-full" color="primary" type="filled" @click="navigateToWithdraw">Withdraw</vs-button>
                </span>
            </div>
        </div>

        <vs-divider/>

        <div class="vx-col w-1/3">
            <div class="w-full flex align-middle ">
                <vs-button radius size="small" color="warning" type="gradient" icon-pack="feather" icon="icon-plus"></vs-button>
                <span class="pl-5">
                    <label class="text-bold font-bold">Add new currency</label>
                </span>
            </div>
        </div>
         <div class="vx-col w-2/3 lg:2/3">
             <div class="w-full inline-block align-middle">
                <span class="float-right">
                   <label class="font-bold">See all transactions</label>
                </span>
            </div>
        </div>

        <vs-spacer />

        <!-- Your Transactions Card -->

        

    </div>    
</template>
<script>

import axios from 'axios'

export default {
    name: 'CustomerFunds',
    data() {
        return {
            btc: true,
            usd: 0,
        }
    },
    mounted() {
        this.convertToUSD(this.$store.state.wallet.btc_wallet.amount)
    },
    computed: {
        // BTC WALLET Amount
        btc_wallet() {
            return this.$store.state.wallet.btc_wallet.amount
        }
    },
    methods: {
        navigateToDeposit() {
            this.$router.push('/customer/funds/deposit')
        },
        navigateToWithdraw() {
            this.$router.push('/customer/funds/withdraw')
        },
        convertToUSD(amount) {
            
            const ax = axios.create({
                baseURL: 'https://bravenewcoin-v1.p.rapidapi.com/',
                timeout: 10000,
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 
                'X-Requested-With': 'XMLHttpRequest', "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
                    "x-rapidapi-key": "cb0c3e1a4fmsh0b75c91e92ec33cp18d497jsn71d5236bd1e4"}
            });
            amount = parseFloat(amount) / 1000

            ax.get(`/convert?qty=${amount}&from=btc&to=usd`).then(res => this.usd = res.data.to_quantity).catch(() => this.usd = 0)
        }
    },
}
</script>