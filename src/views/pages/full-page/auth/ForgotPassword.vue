<!-- =========================================================================================
    File Name: ForgotPassword.vue
    Description: Forgot Password Page
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/forgot-password.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Recover your password</h4>
                                    <p>Please enter your registered email address and we'll send you instructions on how to reset your password.</p>
                                </div>

                                <vs-input :danger="errors.has('email')" :danger-text="errors.first('email')" name="email" val-icon-danger="clear" v-validate="'required|email'" type="email" label-placeholder="Email" v-model="email" class="w-full mb-8"/>
                                <vs-button type="border" to="/auth/login" class="px-4 w-full md:w-auto">Back To Login</vs-button>
                                <vs-button class="float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0" @click="onRecoverPassword">Recover Password</vs-button>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>

import ax from '@/axiosInstance'
import router from '@/routes/router'

export default {
    name: 'forgot-password',
    data() {
        return {
            email: ''
        }
    },
    methods: {
        onRecoverPassword() {

             this.$validator.validateAll().then( res => {

                 if(res) {
                     ax.post('/auth/recover', {email: this.email}).then( () => {
                        window.$notif('success', 'Recovery Email Sent', 'We have sent you a reset password email. Please check your mailbox');
                        router.replace('/auth/login');
                    }).catch(() => window.$notif('error', 'Invalid User', 'This email address is not registered to the system.'));
                 } else {
                      window.$notif('error', 'Invalid Email Address', 'Valid Email is required please try again.');
                 }
             });



            
        }
    }
}
</script>
