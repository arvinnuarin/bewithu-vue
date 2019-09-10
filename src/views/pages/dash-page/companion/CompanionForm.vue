<!-- =========================================================================================
    File Name: CompanionForm.vue
    Description: Add / Update Companion Form
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
  <page-card>
    <!-- NAME -->
    <div class="vx-row">
        <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="First Name" v-model="name.first" />
        </div>
        <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Middle Name" v-model="name.middle" />
        </div>
        <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Last Name" v-model="name.last" />
        </div>
    </div>
    <!-- BIRTHDATE & GENDER -->
    <div class="vx-row mt-2">
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <v-select class="w-full" :options="genderOptions" placeholder="Select Gender" v-model="gender"></v-select>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <datepicker class="w-full" placeholder="Select Birthdate" :disabledDates="disabledDates" :value="initBdate" v-model="birthdate"></datepicker>
        </div>
    </div>
    <!-- MOBILE & EMAIL -->
    <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" icon-pack="feather" icon="icon-smartphone" icon-no-border label-placeholder="Mobile" v-model="mobile" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" icon-pack="feather" icon="icon-at-sign" icon-no-border label-placeholder="Email" v-model="email" />
        </div>
    </div>
    <!-- FACEBOOK & INSTAGRAM -->
    <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" icon-pack="feather" icon="icon-facebook" icon-no-border label-placeholder="Facebook" v-model="social.facebook" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" icon-pack="feather" icon="icon-instagram" icon-no-border label-placeholder="Instagram" v-model="social.instagram" />
        </div>
    </div>
    <!-- ADDRESS -->
    <div class="vx-row mb-2">
        <div class="vx-col w-full">
            <vs-input class="w-full" icon-pack="feather" icon="icon-home" icon-no-border label-placeholder="Address" v-model="address" />
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
    name: 'form-companion',
    components: {
        vSelect,
        Datepicker
    },
    data() {
        return {
            genderOptions: ['Male', 'Female', 'Lesbian', 'Gay', 'Bisexual', 'Transgender', 'Transsexual', 'Queer', 'Questioning', 'Potato'],
            disabledDates: {
                to: new Date(1970,1,1), // Disable all dates up to specific date
                from: new Date(new Date().getFullYear()-18, new Date().getMonth(), new Date().getDate()), // Disable all dates after specific date
            },
            initBdate: new Date(new Date().getFullYear()-18, new Date().getMonth(), new Date().getDate()),
            name: {
                fname: '',
                middle: '',
                last: ''
            },
            birthdate: null,
            gender: null,
            mobile: '',
            email: '',
            social: {
                facebook: '',
                instagram: '',
            },
            address: '',
            desc: null
        }
    },
    methods: {
        onSubmit() {
            alert('submit')
        }
    }
}
</script>