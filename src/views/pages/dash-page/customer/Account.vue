<!-- =========================================================================================
  File Name: Account.vue
  Description: Customer Account Component
  Component Name: Account
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-row w-full">
        <div class="vx-col w-full lg:w-1/2 mb-base">
            <vx-card title="Account" title-color="primary">
                <!-- Info --> 
                <div class="vx-row mt-6">
                    <div class="vx-col w-1/2">
                        <h3>junun</h3>
                        <label>denegotiator@yahoo.com</label>
                    </div>
                    <div class="vx-col w-1/2">
                        <h3>0%</h3>
                        <label>Bonus wagering</label>
                    </div>
                </div>

                <vs-divider />

                <!-- Personal Info -->
                <div class="w-full"> 
                    <h3>Personal Info</h3>

                    <div class="vx-row mb-6 mt-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" label="Phone Number" placeholder="Phone Number" v-model="number" />
                        </div>
                    </div>
                    <div class="vx-row mb-6 mt-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" label="Address" placeholder="Address" v-model="address" />
                        </div>
                    </div>
                    <div class="mb-6 mt-6">
                        <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary"><label for="" class="vs-input--label">Country</label>
                            <div class="vs-con-input">
                                <v-select class="w-full" :options="countries" v-model="country" label="name"></v-select><!---->
                            </div><span></span>
                        </div>
                    </div>
                    <div class="mb-6 mt-6">
                        <vs-input class="w-full" label="City" placeholder="City" v-model="city" />
                    </div>
                    <div class="mb-6 mt-6">
                        <vs-button class="rounded-full mr-3" color="primary" type="filled">Save Changes</vs-button>
                    </div>
                </div>
            </vx-card>
        </div>
        <!-- Verify Account -->
        <div class="vx-col w-full lg:w-1/2">
            <vx-card title="Verify Account" title-color="primary">
                <div class="mt-6">
                    <label>We ask you to upload your documents for our review to provide better security.</label>
                </div>
                <div class="mt-6">
                    <label class="font-bold">Please send us a photo of either of your ID card, driver’s license or passport.</label>
                </div>
                <div class="mt-6">
                    <label class="font-bold">For proof of address, please send us a photo of a utility bill dated within the last three months and clearly showing your name.</label>
                </div>
                <div class="mt-6">
                    <vs-button class="rounded-full mr-3" color="primary" type="filled">Send Files</vs-button>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>

import vSelect from 'vue-select'
import countries from '@/assets/json/countries.json'

export default {
    name: 'CustomerAccount',
    components: {
        vSelect
    },  
    data() {
        return {
            number: null,
            address: null,
            country: null,
            city: null,
            countries: countries
        }
    }

}
</script>