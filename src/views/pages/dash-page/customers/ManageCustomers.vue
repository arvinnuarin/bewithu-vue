<!-- =========================================================================================
    File Name: ManageCustomers.vue
    Description: Manage Customers
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <page-card>
        <!-- Customers Table -->
        <vs-table max-items="10" pagination :data="users">

            <template slot="thead">
                <vs-th>Image</vs-th>
                <vs-th>Name</vs-th>
                <vs-th>Gender</vs-th>
                <vs-th>Mobile</vs-th>
                <vs-th>Email</vs-th>
            </template>
        </vs-table>
    </page-card>
</template>

<script>

import _ from 'lodash'

export default {
    name: 'manage-customers',
    beforeRouteUpdate (to, from, next) {
        function apptStat (param) {
            const status = [{ type: 'active', name: 'Active' }, 
            { type: 'banned', name: 'Banned' }]
    
            return _.find(status, {type: param});
        }

        const data = apptStat(to.params.status);
        const isValid = data ? true : false;
        
        if (!isValid) { next({ name: 'pageError404' }); }

        to.meta.pageTitle = `${data.name} Customers`;
        to.meta.breadcrumb[1] = { title: `${data.name} Customers`, active: true };
        
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