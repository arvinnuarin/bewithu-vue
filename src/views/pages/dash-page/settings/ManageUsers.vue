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
            title="Add Admin User"
            accept-text="Submit">
            <div class="con-exemple-prompt">
                <vs-input :danger="errors.has('fullname')" danger-text="Please input full name." name="fullname" val-icon-danger="clear" v-validate="'required'" class="w-full" placeholder="Full Name" v-model="name" />
                <vs-input :danger="errors.has('phone')" :danger-text="errors.first('phone')" name="phone" val-icon-danger="clear" v-validate="'required|numeric|min:11|max:11'" class="w-full mt-5" placeholder="Cellphone Number" v-model="phone" />
                <vs-input :danger="errors.has('email')" :danger-text="errors.first('email')" name="email" val-icon-danger="clear" v-validate="'required|email'" class="w-full mt-5" placeholder="Email Address" v-model="email" />
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
                <vs-th>Action</vs-th>
            </template>

             <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].name"> {{ data[indextr].name}} </vs-td>
                    <vs-td :data="data[indextr].phone"> {{ data[indextr].phone}} </vs-td>
                    <vs-td :data="data[indextr].email"> {{ data[indextr].email}} </vs-td>
                    <vs-td :data="data[indextr].created_at"> {{ data[indextr].created_at}} </vs-td>
                    <vs-td :data="data[indextr].id"> <vs-button color="danger" type="gradient" 
                    @click="openConfirmDelete(data[indextr].id)">Delete</vs-button></vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </page-card>
</template>

<script>

import ax from '@/axiosInstance'

export default {
    name: 'manage-users',
    mounted() {
        this.getAdminUsers() // get admin users
    },
    data() {
        return {
            admins: [],
            showAddAdmin: false,
            name: '',
            phone: '',
            email: '',
            activeConfirm: false,
            selectedAdminId: null
        }
    },
    methods: {

        async getAdminUsers() {
            
            this.$vs.loading();
            
            await ax.get('/auth/users').then(res => {
                this.admins = res.data; //set admins
            }).catch(() => window.$notif('error', 'Admin Users Failed', 'Unable to retrieve admin users'));

            this.$vs.loading.close();
        },
        resetForm() {
            this.name = '';
            this.phone = '';
            this.email = '';
        },
        persistDialog() {
            this.showAddAdmin = true
        },
        onAddAdmin() {

            this.persistDialog(); // don't close dialog
            this.$validator.validateAll().then( res => { // validate form

                if(res) { // no errors 
                    this.showAddAdmin = false; // close the dialog
                    ax.post('/auth/register', {name: this.name, phone: this.phone, email: this.email})
                    .then(res => {
                        window.$notif('success', 'Added An Admin User', 'A new admin user has been created.');
                        this.getAdminUsers();
                        this.resetForm();
                    }).catch(() => window.$notif('error', 'Adding Admin User Failed', 'Unable to add an admin user. Please try again later.'));
                } else {
                    window.$notif('error', 'Invalid Input', 'Please check your inputs and try again.');
                }
            });
        },
        openConfirmDelete(adminId) { // open delete confirmation dialog
            
            this.selectedAdminId = adminId; // get the selected adminID

            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                text: 'Do you want to delete this admin user account?',
                accept: this.onDeleteAdmin
            })
        },
        async onDeleteAdmin() { // delete an admin
           await ax.delete(`/auth/${this.selectedAdminId}`).then( res => {
                this.getAdminUsers(); // get all current admin users
                window.$notif('success', 'Admin Deletion', 'Admin User has been successfully deleted.');
            }).catch(() => window.$notif('error', 'Deleting Admin Failed ', 'Unable to delete an admin user. Please try again later.'));
        }
    }
}
</script>