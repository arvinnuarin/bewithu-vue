<!-- =========================================================================================
    File Name: ManageServices.vue
    Description: Manage All Companion Services
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <page-card>
         <!-- Add Services -->
        <vs-prompt
            @cancel="resetForm"
            @accept="validateAddForm"
            :active.sync="showAddService"
            title="Add Companion Service"
            accept-text="Submit">
            <div class="con-exemple-prompt">
                <vs-input :danger="errors.has('name')" danger-text="Please input service name." name="name" val-icon-danger="clear" v-validate="'required'" class="w-full" placeholder="Service Name" v-model="name" />
                <vs-input :danger="errors.has('desc')" :danger-text="errors.first('desc')" name="desc" val-icon-danger="clear" v-validate="'required|max:50'" class="w-full mt-5" placeholder="Description" v-model="desc" />
                <vs-input :danger="errors.has('hourly_rate')" :danger-text="errors.first('hourly_rate')" name="hourly_rate" val-icon-danger="clear" v-validate="'required|decimal|max:10'" class="w-full mt-5" placeholder="Normal Rates (3 Hours)" v-model="hourly_rate" />
                <vs-input :danger="errors.has('exceed_rate')" :danger-text="errors.first('exceed_rate')" name="exceed_rate" val-icon-danger="clear" v-validate="'required|decimal|max:10'" class="w-full mt-5" placeholder="Exceeding Rate per hour" v-model="exceed_rate" />
            </div>
        </vs-prompt>
        <!-- Update Services -->
        <vs-prompt
            @cancel="resetForm"
            @accept="validateUpdateForm"
            :active.sync="showUpdateService"
            title="Update Companion Service"
            accept-text="Submit">
            <div class="con-exemple-prompt">
                <vs-input class="w-full" placeholder="Service Name" v-model="name" disabled/>
                <vs-input :danger="errors.has('hourly_rate')" :danger-text="errors.first('hourly_rate')" name="hourly_rate" val-icon-danger="clear" v-validate="'required|decimal|max:10'" class="w-full mt-5" placeholder="Normal Rates (3 Hours)" v-model="hourly_rate" />
                <vs-input :danger="errors.has('exceed_rate')" :danger-text="errors.first('exceed_rate')" name="exceed_rate" val-icon-danger="clear" v-validate="'required|decimal|max:10'" class="w-full mt-5" placeholder="Exceeding Rate per hour" v-model="exceed_rate" />
            </div>
        </vs-prompt>
        <!-- New Service Button -->
        <div class="mb-5">
            <vs-button color="success" type="gradient" icon-pack="feather" icon="icon-plus" @click="onAddService">New Service</vs-button>
        </div>
        <!-- Services Table -->
        <vs-table max-items="10" pagination :data="services">

            <template slot="thead">
                <vs-th>Name</vs-th>
                <vs-th>Description</vs-th>
                <vs-th>Normal Rate (3hrs)</vs-th>
                <vs-th>Exceed Rate</vs-th>
                <vs-th>Actions</vs-th>
            </template>
             <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].name"> {{ data[indextr].name}} </vs-td>
                    <vs-td :data="data[indextr].desc"> {{ data[indextr].desc}} </vs-td>
                    <vs-td :data="data[indextr].hourly_rate" class="bold"> {{ data[indextr].hourly_rate | currency }}</vs-td>
                    <vs-td :data="data[indextr].exceed_rate"> {{ data[indextr].exceed_rate | currency }}</vs-td>
                    <vs-td :data="data[indextr].id">
                        <div class="centerx flex">
                            <vs-button color="warning" class="mr-2" type="gradient" icon="edit" @click="onUpdateService(data[indextr].id, data[indextr].name, data[indextr].hourly_rate, data[indextr].exceed_rate)"></vs-button>
                            <vs-button color="danger" type="gradient" icon="delete_forever" @click="openConfirmDelete(data[indextr].id)"></vs-button>
                        </div>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </page-card>
</template>

<script>

import ax from '@/axiosInstance'

export default {
    name: 'manage-services',
    mounted() {
        this.initServices();
    },
    data() {
        return {
            services: [],
            showAddService: false,
            showUpdateService: false,
            name: '',
            desc: '',
            hourly_rate: null,
            exceed_rate: null,
            selectedServiceId: null
        }
    },
    methods: {

        async initServices() {  // return all services
           
           this.$vs.loading();

            await ax.get('/service').then(res => this.services = res.data)
            .catch(() => window.$notif('error', 'Services Fetch Failed', 'Unable to retrieve services.'));

            this.$vs.loading.close();
        },
        resetForm() {
            this.name = '',
            this.desc = '',
            this.hourly_rate = null,
            this.exceed_rate = null;
        },
        persistDialog() {
            this.showAddService = true;
        },
        onAddService() {
            this.resetForm();
            this.persistDialog();
        },
        validateAddForm() {
            
            this.persistDialog();
            this.$validator.validateAll().then( res => {
                if(res) {
                   this.onSubmitService();
                }
                else return window.$notif('error', 'Invalid Input', 'Please check your inputs and try again.');
            });
        },
        async onSubmitService() { // create a new service

            this.$vs.loading();

            await ax.post('/service', {name: this.name, desc: this.desc, hourly_rate: this.hourly_rate, exceed_rate: this.exceed_rate})
            .then( () => {

                this.showAddService = false;
                window.$notif('success', 'Added A Companion Service', 'Successfully Added A Companion Service');
                this.initServices(); // get services
            }).catch( () => window.$notif('error', 'Adding Service Failed', 'Unable to add companion service. Please try again later.'))
            
            this.$vs.loading.close();
        },
        persistUpdateDialog() {
            this.showUpdateService = true;
        },
        onUpdateService(srvId, name, hourly, exceed) {

            this.selectedServiceId = srvId, // set the selected service Id
            this.name = name,
            this.hourly_rate = hourly,
            this.exceed_rate = exceed;
            this.persistUpdateDialog();
        },
        validateUpdateForm() {
            
            this.persistUpdateDialog();
            this.$validator.validateAll().then( res => {
                if(res) {
                   this.onSubmitUpdateService();
                }
                else return window.$notif('error', 'Invalid Input', 'Please check your inputs and try again.');
            });
        },
        async onSubmitUpdateService() { // updating service action

            this.$vs.loading();

            await ax.patch(`/service/${this.selectedServiceId}`, {hourly_rate: this.hourly_rate, exceed_rate: this.exceed_rate})
            .then( () => {
                this.showUpdateService = false;
                window.$notif('success', 'Updated A Companion Service', 'Successfully Updated A Companion Service');
                this.initServices(); // get services
            }).catch(() => window.$notif('error', 'Updating Service Failed', 'Unable to update companion service. Please try again later.'))

            this.$vs.loading.close();
        },
        openConfirmDelete(srvId) { // open delete confirmation dialog
            
            this.selectedServiceId = srvId; // set the selected service Id

            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                text: 'Do you want to delete this companion service?',
                accept: this.onDeleteService
            })
        },
        async onDeleteService() {

            this.$vs.loading();
            await ax.delete(`/service/${this.selectedServiceId}`)
            .then( () => {
                window.$notif('success', 'Deleted A Companion Service', 'Successfully Deleted A Companion Service');
                this.initServices();
            }).catch( () => window.$notif('error', 'Removing Service Failed', 'Unable to remove a companion service. Please try again later.'))
            
            this.$vs.loading.close();
        }
    }
}
</script>