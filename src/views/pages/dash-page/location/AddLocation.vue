<!-- =========================================================================================
    File Name: AddLocation.vue
    Description: Add Appointment Location Form
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
  <page-card>
    <!-- NAME -->
    <div class="vx-row mb-2">
        <div class="vx-col w-full">
            <vs-input class="w-full" icon-pack="feather" icon="icon-home" icon-no-border label-placeholder="Name" v-model="name" />
        </div>
    </div>
    <!-- Description -->
    <div class="vx-row mb-2 mt-4">
        <div class="vx-col w-full">
            <vx-input-group>
                <template slot="prepend">
                    <div class="prepend-text bg-primary">
                        <span>Description</span>
                    </div>
                </template>
                <vs-textarea v-model="desc" />
            </vx-input-group>
        </div>
    </div>
    <!-- ADDRESS -->
    <div class="vx-row mb-2">
        <div class="vx-col w-full">
            <vs-input class="w-full" icon-pack="feather" icon="icon-home" icon-no-border label-placeholder="Address" v-model="address" />
        </div>
    </div>
    <vs-divider class="mt-4"></vs-divider>
    <!-- Location Rates -->
    <h2>Rates</h2>
    <!-- NAME -->
    <div class="vx-row mt-2" v-for="(rate,idx) in rates" :key="idx">
        <div class="vx-col w-1/2">
            <vs-input class="w-full" icon-pack="feather" icon="icon-home" icon-no-border label-placeholder="Description" v-model="rate.desc" />
        </div>
        <div class="vx-col w-1/3">
            <vs-input class="w-full" icon-pack="feather" icon="icon-home" icon-no-border label-placeholder="Amount" v-model="rate.amount" />
        </div>
    </div>
    
    
    
    <!-- Submit -->
    <div class="vx-row mt-4 ml-auto">
        <div class="vx-col w-full">
            <vs-button type="gradient" @click="onSubmit">Submit</vs-button>
        </div>
    </div>
  </page-card>
</template>
        
<script>

import vSelect from 'vue-select'
import Datepicker from 'vuejs-datepicker';

export default {
    name: 'add-location',
    components: {
        vSelect,
        Datepicker
    },
    data() {
        return {
           name: '',
           address: '',
           desc: '',
           rates: [{desc: '', amount: ''}, {desc: '', amount: ''}, {desc: '', amount: ''}]
        }
    },
    methods: {
        onSubmit() {
            alert('submit')
        }
    }
}
</script>