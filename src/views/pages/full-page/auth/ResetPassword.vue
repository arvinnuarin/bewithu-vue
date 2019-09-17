<!-- =========================================================================================
    File Name: ResetPassword.vue
    Description: Reset Password Page
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/reset-password.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Reset Password</h4>
                                    <p>Please enter your new password.</p>
                                </div>
                                <vs-input type="email" label-placeholder="Email" v-model="email" class="w-full mb-6" disabled/>
                                <vs-input :danger="errors.has('password')" :danger-text="errors.first('email')" name="password" val-icon-danger="clear" v-validate="'required|min:8'" type="password" label-placeholder="Password" v-model="password" class="w-full mb-6" />
                                <vs-input :danger="errors.has('password_confirmation')" :danger-text="errors.first('email')" name="password_confirmation" val-icon-danger="clear" v-validate="'required|min:8'" type="password" label-placeholder="Confirm Password" v-model="password_confirmation" class="w-full mb-8" />

                                <div class="flex flex-wrap justify-between flex-col-reverse sm:flex-row">
                                    <vs-button type="border" to="/auth/login" class="w-full sm:w-auto mb-8 sm:mb-auto mt-3 sm:mt-auto">Go Back To Login</vs-button>
                                    <vs-button class="w-full sm:w-auto" @click="onResetPassword">Reset</vs-button>
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

import ax from '@/axiosInstance'
import router from '@/routes/router'

export default {
    name: 'reset-password',
    created() {
         ax.get(`/auth/find/${this.$route.params.token}`).then(res => {
             this.id = res.data.token;
             this.email = res.data.email;
         });
    },
    data() {
        return {
            id: null,
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
    methods: {

        onResetPassword() { // submit form
          this.$validator.validateAll().then( res => {

                 if(res) {
                     ax.patch('/auth/reset', {token: this.id, password: this.password, password_confirmation: this.password_confirmation})
                     .then( () => {
                         router.replace('/auth/login');
                         window.$notif('success', 'Password Reset', 'Password has been reset. You may now login.');
                     }).catch( ()  => window.$notif('error', 'Unable to reset password.', 'Please check your inputs and try again.'))

                 } else {
                     window.$notif('error', 'Invalid Form', 'Please check your input and try again.');
                 }
          });
        }   
    }
}
</script>
