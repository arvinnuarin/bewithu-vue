<!-- =========================================================================================
  File Name: Notification.vue
  Description: Customer Notification Component
  Component Name: Notification
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-row w-full">
        <div class="vx-col w-full lg:w-1/2 mb-base">
            <vx-card title="Notifications" title-color="primary">
                <div class="vx-row">

                </div>
            </vx-card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Notification',
    mounted() {
        this.$store.dispatch('notif/getNotifications');
    }
}
</script>