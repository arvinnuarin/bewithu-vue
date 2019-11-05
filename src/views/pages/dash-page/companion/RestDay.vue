<!-- =========================================================================================
    File Name: RestDay.vue
    Description: Manage Companion Rest Day
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <page-card>
         <!-- Add Rest Day -->
        <vs-prompt
            @cancel="resetForm"
            @accept="validateAddForm"
            :active.sync="showAddRestDay"
            title="Add Companion Rest Day"
            accept-text="Submit">
            <div class="con-exemple-prompt">
                <v-select v-validate="'required'" name="companion" class="w-full mb-5" label="name" :options="companions" placeholder="Select Companion" v-model="companion_id"></v-select>
                <span class="text-danger text-sm"  v-show="errors.has('companion')">Please select companion</span>
                <datepicker placeholder="Select Rest Day" :disabledDates="disabledDates" :minimumView="'day'" :maximumView="'day'" v-model="day"></datepicker>
                <vs-input :danger="errors.has('desc')" :danger-text="errors.first('desc')" name="desc" val-icon-danger="clear" v-validate="'required'" class="w-full mt-5" placeholder="Description" v-model="desc" />
            </div>
        </vs-prompt>

        <!-- New Rest Day Button -->
        <div class="mb-5">
            <vs-button color="success" type="gradient" icon-pack="feather" icon="icon-plus" @click="showAddRestDay = true">Add Rest Day</vs-button>
        </div>
        <!-- Services Table -->
        <vs-table max-items="10" pagination :data="restDays">

            <template slot="thead">
                <vs-th>Companion Name</vs-th>
                <vs-th>Date</vs-th>
                <vs-th>Description</vs-th>
                <vs-th>Actions</vs-th>
            </template>
             <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    
                    <vs-td :data="data[indextr].name">{{ fullName(tr.name) }}</vs-td>
                    <vs-td :data="data[indextr].day" class="bold">{{ tr.day }} </vs-td>
                    <vs-td :data="data[indextr].desc"> {{ tr.desc }}</vs-td>
                    <vs-td :data="data[indextr].id">
                        <div class="centerx flex">
                            <vs-button color="danger" type="gradient" icon="delete_forever" @click="openConfirmDelete(tr.id)"></vs-button>
                        </div>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </page-card>
</template>

<script>

import ax from '@/axiosInstance'
import Datepicker from 'vuejs-datepicker'
import vSelect from 'vue-select'

export default {
    name: 'companion-rest-day',
    components: {
        Datepicker,
        vSelect
    },
    mounted() {
        this.initRestDays();
        this.initCompanions();
    },
    data() {
        return {
            showAddRestDay: false,
            restDays: [],
            companions: [],
            restDay: null,
            day: null,
            desc: null,
            companion_id: null,
            selectedRestDayId: null,
            disabledDates: {
                to: new Date(), // Disable all dates up to specific date
                from: new Date(new Date().getFullYear(), new Date().getMonth()+ 1, 1), // Disable all dates after specific date
            }
        }
    },
    methods: {
        async initRestDays() {
            
            this.$vs.loading();
            
            await ax.get('/companion/rest').then(res => this.restDays = res.data)
            .catch(() => window.$notif('error', 'Rest Day Fetch Failed', 'Unable to retrieve rest days.'));

            this.$vs.loading.close();
        },
        async initCompanions() {
             await ax.get('/companion').then(res => {
                 res.data.forEach(element => {
                    
                    const compName = JSON.parse(element.name);
                    
                    this.companions.push({
                        id: element.id,
                        name: `${compName.first} ${compName.last}`
                    })
                 });
             })
             .catch(() => window.$notif('error', 'Companions Fetch Failed', 'Unable to retrieve companions.'));
        },
        async addRestDay() {
             this.$vs.loading();

            await ax.post('/companion/rest', {companion_id: this.companion_id.id, day: this.day, desc: this.desc }).then(() => {
                this.showAddRestDay = false;
                this.initRestDays();
                window.$notif('success', 'Rest Day Created', 'Rest Day has been successfully created.')
                
            })
            .catch(() => window.$notif('error', 'Adding Rest Day Failed', 'Unable to add rest day.'));

            this.$vs.loading.close();
        },
        async revokeRestDay() {
            
            this.$vs.loading();
            
            await ax.delete(`/companion/rest/${this.selectedRestDayId}`).then(() => {
                this.initRestDays();
                window.$notif('success', 'Rest Day Revoked', 'Rest Day has been successfully revoked.')
            })
            .catch(() => window.$notif('error', 'Revoking Rest Day Failed', 'Unable to revoke rest day.'));

            this.$vs.loading.close();
        },
        resetForm() {
            this.companion_id = null,
            this.day = null,
            this.desc = null
        },
        persistDialog() {
            this.showAddRestDay = true;
        },
        validateAddForm() {
            
            this.persistDialog();
            this.$validator.validateAll().then( res => {
                if(res)  this.addRestDay();
                else return window.$notif('error', 'Invalid Input', 'Please check your inputs and try again.');
            });
        },
        openConfirmDelete(restDayId) { // open delete confirmation dialog
            
            this.selectedRestDayId= restDayId; // set the selected restday Id

            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                text: 'Do you want to revoke companion rest day?',
                accept: this.revokeRestDay
            })
        },
         fullName(obj) {
            const name = JSON.parse(obj);
            return `${name.last}, ${name.first}`;
        },
    }
}
</script>