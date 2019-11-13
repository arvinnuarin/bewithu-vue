<template>
    <div class="h-screen flex w-full bg-img" id="page-login">
        <div class="vx-col sm:w-full md:w-1/4 lg:w-1/4">
            <vx-card>
                <div slot="no-body" >
                    <div class="vx-row h-screen">
                        <div class="vx-col sm:w-full md:w-full lg:w-full d-theme-dark-bg">
                            <!-- Logo -->
                            <div class="pt-3">

                            </div>
                            <!-- Body -->
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">LuxeCasino Signup</h4>
                                </div>
                                <!-- Google -->
                                <div class="">
                                    <vs-button color="primary" type="border" icon-pack="feather" icon="icon-home" class="float-right">Google</vs-button>
                                    <vs-button color="primary" type="border" icon-pack="feather" icon="icon-facebook">Facebook</vs-button>
                                </div>
                                <h3 class="text-center"> OR </h3>
                                
                                <vs-divider class="mb-5"/>
                                
                                <div class="vx-row mb-1">
                                    <div class="vx-col w-full">
                                        <vs-input :danger="errors.has('name')" danger-text="Please input your name." val-icon-danger="clear" v-validate="'required'" name="name" class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label="Full Name" v-model="name" />
                                    </div>
                                </div>
                                <div class="vx-row mb-1">
                                    <div class="vx-col w-full">
                                        <vs-input :danger="errors.has('email')" danger-text="Please input your email address." val-icon-danger="clear" v-validate="'required|email'" name="email" type="email" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label="Email" v-model="email" />
                                    </div>
                                </div>
                                <div class="vx-row mb-1">
                                    <div class="vx-col w-full">
                                        <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary"><label for="" class="vs-input--label">Birthdate</label>
                                            <div class="vs-con-input">
                                                <datepicker v-validate="'required'" name="birthdate" class="w-full" placeholder="" :disabledDates="disabledDates" v-model="birthdate"></datepicker><!---->
                                            </div><span></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="vx-row mb-1">
                                    <div class="vx-col w-full">
                                        <vs-input type="password" :danger="errors.has('password')" :danger-text="errors.first('password')" name="password" data-vv-as="password" val-icon-danger="clear" v-validate="'required|min:8'" ref="password" class="w-full" icon-pack="feather" icon="icon-lock" icon-no-border label="Password" v-model="password" />
                                    </div>
                                </div>
                                <div class="vx-row mb-5">
                                    <div class="vx-col w-full">
                                        <vs-input type="password" :danger="errors.has('confirm_password')" :danger-text="errors.first('confirm_password')" name="confirm_password" data-vv-as="confirm_password" val-icon-danger="clear" v-validate="'required|min:8|confirmed:password'" ref="password" class="w-full" icon-pack="feather" icon="icon-lock" icon-no-border label="Confirm Password" v-model="confirm_password" />
                                    </div>
                                </div>
                                <div class="vx-row mb-1">
                                    <div class="vx-col w-full">
                                        <vs-checkbox class="inline-flex" v-model="accept_terms">I accept the terms and conditions.</vs-checkbox>
                                    </div>
                                </div>
                                <div class="vx-row">
                                    <div class="vx-col w-full">
                                        <vs-button class="mr-3 mb-2 float-right" @click="onSignup">Signup</vs-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker';
import ax from '@/axiosInstance'

export default {
    name: 'Register',
    components: {
        Datepicker
    },
    data() {
        return {
            disabledDates: {
                to: new Date(1910,1,1), // Disable all dates up to specific date
                from: new Date(new Date().getFullYear()-18, new Date().getMonth(), new Date().getDate()), // Disable all dates after specific date
            },
            initBdate: new Date(new Date().getFullYear()-18, new Date().getMonth(), new Date().getDate()),
            name: null,
            email: null,
            password: null,
            confirm_password: null,
            birthdate: new Date(new Date().getFullYear()-18, new Date().getMonth(), new Date().getDate()),
            accept_terms: false
        }
    },
    methods: {
        onSignup() {
            console.log(this.birthdate)

            this.$validator.validateAll().then( res => { // validate form

                if(res) this.register()
                else window.$notif('error', 'Signup Failed', 'Please check your inputs and try again.')
            })
        },
        async register() {
            await ax.post('/auth/register', { name: this.name, birthdate: this.birthdate, email: this.email, password: this.password, password_confirmation: this.confirm_password})
            .then( () => {
                window.$notif('success', 'Successful Registration', 'Thank you for signing up. You may now login.')
                this.$router.push('/')
            }).catch( () => {
                window.$notif('error', 'Signup Failed', 'There was a problem creating your account')
            })
        }
    }
}
</script>