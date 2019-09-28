<!-- =========================================================================================
    File Name: ManageTransaction.vue
    Description: Manage Transactions
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <page-card>
        <!-- Transactions Table -->
        <vs-table max-items="10" pagination :data="trans">

            <template slot="thead">
                <vs-th>Appointment ID</vs-th>
                <vs-th>Customer</vs-th>
                <vs-th>Amount</vs-th>
                <vs-th>Payment Method</vs-th>
                <vs-th>Reference No.</vs-th>
                <vs-th>Paid At</vs-th>
                <vs-th>Status</vs-th>
            </template>
        
             <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="tr.appt_no"> {{ tr.appt_no }} </vs-td>
                    <vs-td :data="tr.customer"> {{ setName(tr.customer) }}</vs-td>
                    <vs-td :data="tr.amount"> {{ tr.amount | currency }} </vs-td>
                    <vs-td :data="tr.payment_method"> {{ tr.payment_method }} </vs-td>
                    <vs-td :data="tr.reference_no"> {{ tr.reference_no}} </vs-td>
                    <vs-td :data="tr.created_at">{{ tr.created_at }}</vs-td>
                    <vs-td :data="tr.status">{{ tr.status }}</vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </page-card>
</template>

<script>

import ax from '@/axiosInstance'

export default {
    name: 'manage-transaction',
    mounted() {
        this.initTransactions();
    },
    data() {
        return {
            trans: []
        }
    },
    methods: {
        async initTransactions() {
            this.$vs.loading();

            await ax.get(`/appointments/transactions/all`).then(res => this.trans = res.data)
            .catch(() => window.$notif('error', 'Appointment Transaction List Failed', 'Unable to retrieve appointment transactions.'));

            this.$vs.loading.close();
        },
        setName(name) {
            const finalName = JSON.parse(name);
            return `${finalName.first} ${finalName.last}`;
        },
    }
}
</script>