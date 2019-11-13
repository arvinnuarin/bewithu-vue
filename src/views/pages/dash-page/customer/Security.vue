<!-- =========================================================================================
  File Name: Security.vue
  Description: Customer Security Component
  Component Name: Security
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->
<template>
     <div class="vx-row w-full">
        <div class="vx-col w-full lg:w-1/3 mb-base">
            <vx-card title="Security" title-color="primary">
                <div class="mb-6 mt-3">
                    <vs-input class="w-full" label="Current password" placeholder="Enter your current password" v-model="current" />
                </div>
                <div class="mb-6 mt-6">
                    <vs-input class="w-full" label="New password" placeholder="Enter your new password" v-model="newpass" />
                </div>
                <div class="mb-6 mt-6">
                    <vs-input class="w-full" label="Repeat new password" placeholder="Enter it once again" v-model="confirm" />
                </div>
                <div class="mb-4 mt-3">
                    <p class="text-gray-200">If you change your password, you will be unable to withdraw for 48 hours due to security reasons.</p>
                </div>
                <div class="mb-6 mt-6">
                    <vs-button class="rounded-full mr-3" color="primary" type="filled">Save Changes</vs-button>
                </div>
            </vx-card>
        </div>
     </div>
</template>

<script>
export default {
    name: 'CustomerSecurity',
    data() {
        return {
            current: null,
            newpass: null,
            confirm: null            
        }
    }
}
</script>