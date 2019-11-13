<!-- =========================================================================================
  File Name: Settings.vue
  Description: Customer Settings Component
  Component Name: Settings
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-row w-full">
        <div class="vx-col w-full lg:w-1/2 mb-base">
            <vx-card title="Settings" title-color="primary">
                <div class="vx-row">
                    <div class="vx-col w-2/3 mb-6">
                        <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary"><label for="" class="vs-input--label">Language</label>
                            <div class="vs-con-input">
                                <v-select class="w-full" :options="languages" v-model="lang"></v-select><!---->
                            </div><span></span>
                        </div>
                    </div>
                    <div class="vx-col w-2/3 mb-6">
                        <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary"><label for="" class="vs-input--label">Active Wallet</label>
                            <div class="vs-con-input">
                                <v-select class="w-full" :options="wallets" v-model="wallet"></v-select><!---->
                            </div><span></span>
                        </div>
                    </div>
                    <div class="vx-col w-2/3 mb-6">
                        <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary"><label for="" class="vs-input--label">Preferred FIAT currency</label>
                            <div class="vs-con-input">
                                <v-select class="w-full" :options="fiats" v-model="fiat"></v-select><!---->
                            </div><span></span>
                        </div>
                    </div>
                </div>
                <div class="">
                    <vs-checkbox v-model="offer">I agree to receive offers and emails from Luxecasino.</vs-checkbox>
                </div>
                <vs-divider />
                <div class="text-center mb-5">
                    <vs-button type="filled" @click="changeSkin('dark')">Purple Mode</vs-button>
                    <vs-button type="border" @click="changeSkin('light')">Light Mode</vs-button>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>

import vSelect from 'vue-select'

export default {
    name: 'Settings',
    components: {
        vSelect
    },
    data() {
        return {
            offer: false,
            languages: ['English', '한국어'],
            wallets: ['mɃ', 'µɃ'],
            fiats: ['EUR', 'JPY', 'USD', 'CNY'],
            lang: 'English',
            wallet: 'mɃ',
            fiat: 'EUR'
        }
    },
    methods: {
        changeSkin(type) {
         this.$store.dispatch('updateTheme', type);
        }
    }
}
</script>