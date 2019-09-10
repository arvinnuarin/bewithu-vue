<!-- =========================================================================================
    File Name: ManageAppointment.vue
    Description: Manage Appointments
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <page-card>
        <!-- Appointment Table -->
        <vs-table max-items="10" pagination :data="users">

            <template slot="thead">
                <vs-th>ID</vs-th>
                <vs-th>Customer</vs-th>
                <vs-th>Companion</vs-th>
                <vs-th>Schedule</vs-th>
                <vs-th>Location</vs-th>
                <vs-th>Status</vs-th>
            </template>
        </vs-table>
    </page-card>
</template>

<script>

import _ from 'lodash'

export default {
    name: 'manage-appointment',
    beforeRouteUpdate (to, from, next) {
        function apptStat (param) {
            const status = [{ type: 'active', name: 'Active' }, 
            { type: 'completed', name: 'Completed' }, { type: 'cancelled', name: 'Cancelled' }]
    
            return _.find(status, {type: param});
        }

        const data = apptStat(to.params.status);
        const isValid = data ? true : false;
            
        if (!isValid) { next({ name: 'pageError404' }); }

        to.meta.pageTitle = `${data.name} Appointments`;
        to.meta.breadcrumb[1] = { title: `${data.name} Appointments`, active: true };
        
        next();
    },
    data() {
        return {
            users: []
        }
    },
    methods: {
    }
}
</script>