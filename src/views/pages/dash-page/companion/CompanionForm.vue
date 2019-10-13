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
            <vs-input :danger="errors.has('first_name')" danger-text="Please input first name." val-icon-danger="clear" v-validate="'required|alpha'" name="first_name" class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="First Name" v-model="name.first" />
        </div>
        <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input class="w-full" icon-pack="feather" name="middle_name" icon="icon-user" icon-no-border label-placeholder="Middle Name" v-model="name.middle" />
        </div>
        <div class="vx-col sm:w-1/3 w-full mb-2">
            <vs-input :danger="errors.has('last_name')" danger-text="Please input last name." val-icon-danger="clear" v-validate="'required|alpha'" name="last_name" class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="Last Name" v-model="name.last" />
        </div>
    </div>
    <!-- BIRTHDATE & GENDER -->
    <div class="vx-row mt-2">
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <v-select v-validate="'required'" name="gender" class="w-full" :options="genderOptions" placeholder="Select Gender" v-model="gender"></v-select>
            <span class="text-danger text-sm"  v-show="errors.has('gender')">Please select gender.</span>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <datepicker v-validate="'required'" name="birthdate" class="w-full" placeholder="Select Birthdate" :disabledDates="disabledDates" :value="initBdate" v-model="birthdate"></datepicker>
            <span class="text-danger text-sm"  v-show="errors.has('birthdate')">Please select birthdate.</span>
        </div>
    </div>
    <!-- MOBILE & EMAIL -->
    <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input :danger="errors.has('mobile')" :danger-text="errors.first('mobile')" val-icon-danger="clear" v-validate="'required|numeric|min:11|max:11'" name="mobile" class="w-full" icon-pack="feather" icon="icon-smartphone" icon-no-border label-placeholder="Mobile" v-model="phone" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input :danger="errors.has('email')" :danger-text="errors.first('email')" val-icon-danger="clear" v-validate="'required|email'" class="w-full" name="email" icon-pack="feather" icon="icon-at-sign" icon-no-border label-placeholder="Email" v-model="email" />
        </div>
    </div>
    <!-- FACEBOOK & INSTAGRAM -->
    <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" name="facebook" icon-pack="feather" icon="icon-facebook" icon-no-border label-placeholder="Facebook" v-model="social.facebook" />
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input class="w-full" name="instagram" icon-pack="feather" icon="icon-instagram" icon-no-border label-placeholder="Instagram" v-model="social.instagram" />
        </div>
    </div>
    <!-- ADDRESS -->
    <div class="vx-row mb-2">
        <div class="vx-col w-full">
            <vs-input :danger="errors.has('address')" danger-text="Please input companion address." val-icon-danger="clear" v-validate="'required'" name="address" class="w-full" icon-pack="feather" icon="icon-home" icon-no-border label-placeholder="Address" v-model="address" />
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
                <vs-textarea v-validate="'required'" name="desc" v-model="desc" />
            </vx-input-group>
            <span class="text-danger text-sm"  v-show="errors.has('desc')">Please input companion description.</span>
        </div>
    </div>
    <!-- Description -->
    <div class="vx-row mb-2 mt-4">
        <div class="vx-col w-full">
            <h4>Companion Images</h4>
            <div>
                 <input id="cmpImage" type="file" accept="image/*">
            </div>
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
import Datepicker from 'vuejs-datepicker'
import router from '@/routes/router'
import ax from '@/axiosInstance'

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
                first: '',
                middle: '',
                last: ''
            },
            birthdate: null,
            gender: null,
            phone: '',
            email: '',
            social: {
                facebook: '',
                instagram: '',
            },
            address: '',
            desc: null,
        }
    },
    methods: {

        async createCompanion() {
             
            this.$vs.loading();

            let frmData = new FormData();
            frmData.append('image', document.getElementById("cmpImage").files[0], document.getElementById("cmpImage").files[0].name); 

            await ax.post('/image', frmData, {
            headers: { 'Content-Type': 'multipart/form-data' }
            }).then( res => {
                
                const payload = {
                    name: this.name, birthdate: this.birthdate, gender: this.gender, phone: this.phone,
                    email: this.email, sns: this.social, address: this.address, desc: this.desc,
                    image: res.data
                };
            
                ax.post('/companion', payload).then(() => {

                    window.$notif('success', 'Added Companion', 'A new companion has been added.');
                    return router.replace('/companions/manage');

                }).catch(() => {
                    return window.$notif('error', 'Unable to add companion', 'Sorry something went wrong. Please try again later.');
                });
            }).catch( () => {  
                return window.$notif('error', 'Unable to add companion', 'Sorry something went wrong. Please try again later.');
            });

            this.$vs.loading.close();
        },
        onSubmit() {

           this.$validator.validateAll().then( res => {
                if(res) { // no errrors
                    this.createCompanion();
                } else {
                    window.$notif('error', 'Invalid Companion Form.', 'Please check your inputs and try again.');
                }
            });
        }
    }
}
</script>