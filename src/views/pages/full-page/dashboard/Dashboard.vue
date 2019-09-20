<!-- =========================================================================================
    File Name: Dashboard.vue
    Description: Dashboard
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->

<template>
    <div>
        <!-- DASHBOARD TILES -->
        <tiles />
        <div class="vx-row">
            <!-- Monthly Sales -->
            <monthly-sales />
            <!-- Appointment Ratio -->
            <appointment-ratio />
        </div>
    </div>
</template>

<script>

import Tiles from './Tiles'
import MonthlySales from './MonthlySales'
import AppointmentRatio from './AppointmentRatio'

export default {
    name: 'dashboard',
    components: {
        Tiles,
        AppointmentRatio,
        MonthlySales
    },
    mounted() {       
        // this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    }
}
</script>
