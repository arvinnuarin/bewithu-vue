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
                <vs-input placeholder="Current Password" class="w-full mb-4" v-model="password.current" />
                <vs-input placeholder="New Password"  class="w-full mb-4" v-model="password.new" />
                <vs-input placeholder="Confirm Password"  class="w-full mb-4" v-model="password.confirm" />
                <vs-divider />
                <vs-button class="mr-4" @click="onChangePass">Submit</vs-button>
                <vs-button type="border" color="warning" @click="resetForm" class="mt-3">Cancel</vs-button>
            </vx-card>
        </div>
    </div>
</template>

<script>

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
         
      }
    }
}
</script>