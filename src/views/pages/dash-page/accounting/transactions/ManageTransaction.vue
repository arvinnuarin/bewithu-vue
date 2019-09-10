<!-- =========================================================================================
    File Name: ManageTransaction.vue
    Description: Manage Transactions
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <page-card>
        <!-- Transactions Table -->
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

export default {
    name: 'manage-transaction',
    data() {
        return {
            users: []
        }
    },
    methods: {
    }
}
</script>