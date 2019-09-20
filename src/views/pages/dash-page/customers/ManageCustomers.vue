<!-- =========================================================================================
    File Name: ManageCustomers.vue
    Description: Manage Customers
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <page-card>
        <!-- Customers Table -->
        <vs-table max-items="10" pagination :data="customers">

            <template slot="thead">
                <vs-th>Name</vs-th>
                <vs-th>Gender</vs-th>
                <vs-th>Mobile</vs-th>
                <vs-th>Email</vs-th>
                <vs-th>Address</vs-th>
                <vs-th>Action</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].name"> {{ setName(data[indextr].name)}} </vs-td>
                    <vs-td :data="data[indextr].gender"> {{ data[indextr].gender}} </vs-td>
                    <vs-td :data="data[indextr].phone"> {{ data[indextr].phone}} </vs-td>
                    <vs-td :data="data[indextr].email"> {{ data[indextr].email}} </vs-td>
                    <vs-td :data="data[indextr].address"> {{ data[indextr].address}} </vs-td>
                    <vs-td :data="data[indextr].id"> <vs-button color="danger" type="gradient" 
                    @click="openConfirmStatus(data[indextr].id)">{{ data[indextr].isActive ? 'Block' : 'Reactivate' }}</vs-button></vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </page-card>
</template>

<script>

import _ from 'lodash'
import ax from '@/axiosInstance'

export default {
    name: 'manage-customers',
    beforeRouteUpdate (to, from, next) {
        function apptStat (param) {
            const status = [{ type: 'active', name: 'Active' }, 
            { type: 'inactive', name: 'Inactive' }]
    
            return _.find(status, {type: param});
        }

        const data = apptStat(to.params.status);
        const isValid = data ? true : false;
        
        if (!isValid) { next({ name: 'pageError404' }); }

        to.meta.pageTitle = `${data.name} Customers`;
        to.meta.breadcrumb[1] = { title: `${data.name} Customers`, active: true };

        this.initCustomers(to.params.status);

        next();
    },
    data() {
        return {
            customers: [],
            selectedCustomerId: null,
        }
    },
    mounted() {
        this.initCustomers(this.$route.params.status);
    },
    methods: {
        async initCustomers(status) {
            this.$vs.loading();

            await ax.get(`/customers/${status}`).then(res => this.customers = res.data)
            .catch(() => window.$notif('error', 'Customers List Failed', 'Unable to retrieve customers.'));

            this.$vs.loading.close();
        },
        async toggleStatus() {
            this.$vs.loading();

            await ax.patch(`/customers/status/${this.selectedCustomerId}`)
            .then(() => this.initCustomers(this.$route.params.status), window.$notif('success', 'Customers Status Updated', 'Customer status has been updated.'))
            .catch(() => window.$notif('error', 'Updating Status Failed', 'Unable to update customer status.'));

            this.$vs.loading.close();
        },
        setName(name) {
            const custName = JSON.parse(name);
            return `${custName.first} ${custName.last}`;
        },
         openConfirmStatus(customerId) { // open delete confirmation dialog
            
            this.selectedCustomerId = customerId; // get the selected customerId

            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                text: 'Do you want to update the status of this user?',
                accept: this.toggleStatus
            })
        },
    }
}
</script>