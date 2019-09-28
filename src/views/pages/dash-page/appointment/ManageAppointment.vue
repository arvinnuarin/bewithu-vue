<!-- =========================================================================================
    File Name: ManageAppointment.vue
    Description: Manage Appointments
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <page-card>
        <!-- Add Payment Form -->
        <vs-prompt
            @cancel="resetForm"
            @accept="validatePaymentForm"
            :active.sync="showAddPayment"
            title="Add Payment"
            accept-text="Submit">
            <div class="con-exemple-prompt">
                <vs-input :danger="errors.has('amount')" danger-text="Please input correct amount." name="amount" val-icon-danger="clear" v-validate="'required|numeric'" class="w-full" placeholder="Amount" v-model="amount" />
                <vs-input :danger="errors.has('payment_method')" :danger-text="errors.first('payment_method')" name="payment_method" val-icon-danger="clear" v-validate="'required'" class="w-full mt-5" placeholder="Payment Method" v-model="payment_method" />
                <vs-input :danger="errors.has('reference')" :danger-text="errors.first('reference')" name="reference" val-icon-danger="clear" v-validate="'required'" class="w-full mt-5" placeholder="Reference Number" v-model="reference" />
            </div>
        </vs-prompt>

        <!-- Appointment Table -->
        <vs-table max-items="10" pagination :data="appointments">

            <template slot="thead">
                <vs-th>ID</vs-th>
                <vs-th>Customer</vs-th>
                <vs-th>Companion</vs-th>
                <vs-th>Service</vs-th>
                <vs-th>Schedule</vs-th>
                <vs-th>Amount</vs-th>
                <vs-th>Location</vs-th>
                <vs-th>Status</vs-th>
                <vs-th v-if="$route.params.status !== 'completed' && $route.params.status !== 'cancelled'">Actions</vs-th>
            </template>
            
            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="tr.appt_no"> {{ tr.appt_no }} </vs-td>
                    <vs-td :data="tr.customer"> {{ setName(tr.customer) }} </vs-td>
                    <vs-td :data="tr.companion"> {{ setName(tr.companion) }} </vs-td>
                    <vs-td :data="tr.service"> {{ tr.service }} </vs-td>
                    <vs-td :data="tr.start_at"><span>{{ tr.start_at }}</span><br><span>{{tr.end_at}}</span> </vs-td>
                    <vs-td :data="tr.amount"> {{ tr.amount | currency}} </vs-td>
                    <vs-td :data="tr.location"> {{ tr.location}} </vs-td>
                    <vs-td :data="tr.status"> {{ tr.status}} </vs-td>
                    <vs-td :data="tr.id">
                        <vs-button v-if="$route.params.status === 'pending'" color="primary" type="gradient" 
                            @click="showAddPaymentTrans(tr.id)">Payment</vs-button>
                            <vs-button v-if="$route.params.status === 'scheduled'" color="danger" type="gradient" 
                            @click="openConfirmCancel(tr.id)">Cancel</vs-button>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </page-card>
</template>

<script>

import _ from 'lodash'
import ax from '@/axiosInstance'

export default {
    name: 'manage-appointment',
    beforeRouteUpdate (to, from, next) {
        function apptStat (param) {
            const status = [{ type: 'pending', name: 'Pending' }, { type: 'scheduled', name: 'Scheduled' }, 
            { type: 'completed', name: 'Completed' }, { type: 'cancelled', name: 'Cancelled' }]
    
            return _.find(status, {type: param});
        }

        const data = apptStat(to.params.status);
        const isValid = data ? true : false;
            
        if (!isValid) { next({ name: 'pageError404' }); }

        to.meta.pageTitle = `${data.name} Appointments`;
        to.meta.breadcrumb[1] = { title: `${data.name} Appointments`, active: true };
        
        this.initAppointments(to.params.status);

        next();
    },
    mounted() {
        this.initAppointments(this.$route.params.status);
    },
    data() {
        return {
            appointments: [],
            selectedAppointmentId: null,
            showAddPayment: false,
            amount: null,
            payment_method: null,
            reference: null
        }
    },
    methods: {
        async initAppointments(status) {
            this.$vs.loading();

            await ax.get(`/appointments/${status}`).then(res => this.appointments = res.data)
            .catch(() => window.$notif('error', 'Appointment List Failed', 'Unable to retrieve appointments.'));

            this.$vs.loading.close();
        },
        async addPayment() {
            this.$vs.loading();

            await ax.post('/appointments/transactions', { appointment_id: this.selectedAppointmentId, 
                amount: this.amount, payment_method: this.payment_method, reference_no: this.reference})
                .then(() => {
                    window.$notif('success', 'Verified Payment', 'Payment has been processed successfully');
                    this.showAddPayment = false;
                    this.initAppointments(this.$route.params.status);
                    this.resetForm();
                }).catch(err => window.$notif('error', 'Adding Payment Failed.', err.response.data.message));
            
            this.$vs.loading.close();
        },
        async cancelAppointment() {
            this.$vs.loading();

            await ax.delete(`/appointments/transactions/${this.selectedAppointmentId}`)
            .then(() => this.initAppointments(this.$route.params.status), window.$notif('success', 'Appointment Cancellation', 'Appointment has been cancelled.'))
            .catch(err => window.$notif('error', 'Unable to cancel appointment.', err.response.data.message));
        
            this.$vs.loading.close();
        },
        setName(name) {
            const finalName = JSON.parse(name);
            return `${finalName.first} ${finalName.last}`;
        },
        showAddPaymentTrans($id) {
            this.selectedAppointmentId = $id;
            this.showAddPayment = true;
        },
        resetForm() {
            this.amount = '',
            this.payment_method = '',
            this.reference = ''
            this.selectedAppointmentId = null
        },
        validatePaymentForm() {
            this.showAddPayment = true // don't close dialog

              this.$validator.validateAll().then( res => { // validate form

                if(res) { // no errors 
                     this.addPayment();
                } else {
                    window.$notif('error', 'Invalid Input', 'Please check your inputs and try again.');
                }
            });
        },
        openConfirmCancel(appointId) { // open cancellation confirmation dialog
            
            this.selectedAppointmentId = appointId; // get the selected appointmentId

            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                text: 'Do you want to cancel this appointment?',
                accept: this.cancelAppointment
            })
        },
    }
}
</script>