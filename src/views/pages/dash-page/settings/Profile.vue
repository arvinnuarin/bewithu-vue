<!-- =========================================================================================
    File Name: Profile.vue
    Description: Manage User Profile
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-row">
         <!-- USER PROFILE CARD 2 - MINIMAL -->
        <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base">
            <vx-card class="p-2">
                <vs-avatar class="mx-auto mb-6 block" size="80px" src="https://static.giantbomb.com/uploads/original/13/133617/2616399-doraemon_pic.jpg" />
                <div class="text-center">
                    <h3>Micaella Oronce</h3>
                    <p class="text-grey">Manager</p>
                </div>
                <template slot="footer">
                 <vs-divider />
                </template>
            </vx-card>
        </div>

         <div class="vx-col w-full sm:w-1/2 md:w-1/2 mb-base">
            <vx-card title="Change Password">
                <vs-input type="password" :danger="errors.has('current_pass')" danger-text="Please input current password." name="current_pass" placeholder="Current Password" val-icon-danger="clear" v-validate="'required'" class="w-full mb-4" v-model="password.current" />
                <vs-input type="password" :danger="errors.has('password')" :danger-text="errors.first('password')" name="password" data-vv-as="password" placeholder="New Password" val-icon-danger="clear" v-validate="'required|min:8'" ref="password"  class="w-full mb-4" v-model="password.new" />
                <vs-input type="password" :danger="errors.has('confirm_password')" :danger-text="errors.first('confirm_password')" name="confirm_password" placeholder="Confirm Password" val-icon-danger="clear" v-validate="'min:8|confirmed:password'"  class="w-full mb-4" v-model="password.confirm" />
                <vs-divider />
                <vs-button class="mr-4" @click="onChangePass">Submit</vs-button>
                <vs-button type="border" color="warning" @click="resetForm" class="mt-3">Cancel</vs-button>
            </vx-card>
        </div>
    </div>
</template>

<script>

import ax from '@/axiosInstance'

export default {
    name: 'user-profile',
    data() {
        return {
            password: { current: null, new: null, confirm: null }
        }
    },
    methods: {
      resetForm() {
          this.password = { current: null, new: null, confirm: null };
      },
      onChangePass() {
        this.$validator.validateAll().then( res => { // validate form

            if(res) { // no errors 

                const payload = {current: this.password.current, password: this.password.new, 
                password_confirmation: this.password.confirm};

                ax.post('/auth/change-pass', payload).then(res => {
                    this.$store.dispatch('auth/logout');
                    window.$notif('success', 'Password Updated', 'Password has been successfully updated.');
                }).catch(err => {
                    console.log(err)

                     window.$notif('error', 'Unable to change password.', 'Please check your inputs and try again.');
                });
            } else {
                 window.$notif('error', 'Invalid Password Change', 'Please check your inputs and try again.');
            }
        });
      }
    }
}
</script>