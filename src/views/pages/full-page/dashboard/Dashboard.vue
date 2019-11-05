<!-- =========================================================================================
    File Name: Dashboard.vue
    Description: Dashboard
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->

<template>
    <div>
        <!-- DASHBOARD TILES -->
        <tiles :dashtiles="dashtiles" />
        <div class="vx-row">
            <!-- Monthly Sales -->
            <monthly-sales :sales="sales" />
            <!-- Appointment Ratio -->
            <appointment-ratio :appointment="appointment" />
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
    created() {
        this.$store.dispatch('report/fetchData');
    },
    mounted() {       
        // this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    },
    computed: {
        dashtiles() {
            return this.$store.state.report.dash
        },
        appointment() {
            return {
                completed : this.$store.state.report.dash.appt_completed ,
                all : parseInt(this.$store.state.report.dash.appointment) + parseInt(this.$store.state.report.dash.appt_completed)
            }
        },
        sales() {
            return this.$store.state.report.dash.sales
        }
    }
}
</script>
