<!-- =========================================================================================
    File Name: ManageUsers.vue
    Description: Manage Admin Users
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <page-card>
        <!-- Add Admin Form -->
        <vs-prompt
            @cancel="resetForm"
            @accept="onAddAdmin"
            :active.sync="showAddAdmin"
            title="Add Admin User">
            <div class="con-exemple-prompt">
                <vs-input class="w-full" placeholder="Full Name" v-model="name" />
                <vs-input class="w-full mt-5" placeholder="Cellphone Number" v-model="contact" />
                <vs-input class="w-full mt-5" placeholder="Email Address" v-model="email" />
            </div>
        </vs-prompt>
        <!-- New Admin User Button -->
        <div class="mb-5">
            <vs-button color="success" type="gradient" icon-pack="feather" icon="icon-plus" @click="showAddAdmin = true">New Admin User</vs-button>
        </div>
        <!-- Users Table -->
        <vs-table max-items="10" pagination :data="admins">

            <template slot="thead">
                <vs-th>Name</vs-th>
                <vs-th>Contact Number</vs-th>
                <vs-th>Email Address</vs-th>
                <vs-th>Added At</vs-th>
                <vs-th>Status</vs-th>
            </template>

             <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].name"> {{ data[indextr].name}} </vs-td>
                    <vs-td :data="data[indextr].contact"> {{ data[indextr].contact}} </vs-td>
                    <vs-td :data="data[indextr].email"> {{ data[indextr].email}} </vs-td>
                    <vs-td :data="data[indextr].added"> {{ data[indextr].added}} </vs-td>
                    <vs-td :data="data[indextr].status"> {{ data[indextr].status}} </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </page-card>
</template>

<script>

export default {
    name: 'manage-users',
    data() {
        return {
            admins: [],
            showAddAdmin: false,
            name: '',
            contact: '',
            email: ''
        }
    },
    methods: {

        resetForm() {
            this.name = '';
            this.contact = '';
            this.email = '';
        },
        onAddAdmin() {
            this.admins.push({name: this.name, contact: this.contact, email: this.email, added: '2019-09-10', status: 'PENDING'})
            this.resetForm();
        }
    }
}
</script>