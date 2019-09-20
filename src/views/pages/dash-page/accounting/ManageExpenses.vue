<!-- =========================================================================================
    File Name: ManageExpenses.vue
    Description: Manage Expenses
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <page-card>
         <!-- Add Expenses -->
        <vs-prompt
            @cancel="resetForm"
            @accept="validateForm"
            :active.sync="showAddExpense"
            title="Add A New Expense"
            accept-text="Submit">
            <div class="con-exemple-prompt">
                <datepicker format="MMM dd yyyy" :disabledDates="disabledDates" :minimumView="'day'" :maximumView="'day'" placeholder="Expense Date" v-model="selectedDay"></datepicker>
                <vs-input :danger="errors.has('desc')" :danger-text="errors.first('desc')" name="desc" val-icon-danger="clear" v-validate="'required|max:50'" class="w-full mt-5" placeholder="Description" v-model="desc" />
                <vs-input :danger="errors.has('amount')" :danger-text="errors.first('amount')" name="amount" val-icon-danger="clear" v-validate="'required|decimal|max:10'" class="w-full mt-5" placeholder="Amount" v-model="amount" />
            </div>
        </vs-prompt>

        <!-- Change Expense View -->
        <vs-prompt
            @accept="changeExpensesDay"
            :active.sync="showViewExpense"
            title="Change Expenses Date"
            accept-text="Change">
            <div class="con-exemple-prompt">
                <datepicker format="MMM dd yyyy" :disabledDates="disabledDates" :minimumView="'day'" :maximumView="'day'" placeholder="Expense Date" v-model="selectedDay"></datepicker>
            </div>
        </vs-prompt>

         <!-- New Expenses Button -->
        <div class="mb-5 flex">
            <vs-button color="success" type="gradient" icon-pack="feather" icon="icon-plus" @click="onShowAddExpense">Add Expenses</vs-button>
            <vs-button class="ml-auto" color="danger" type="gradient" icon-pack="feather" icon="icon-plus" @click="onShowViewExpense">View Expenses From</vs-button>
        </div>

        <!-- Expenses Table -->
        <vs-table max-items="10" pagination :data="expenses">

            <template slot="thead">
                <vs-th>Date</vs-th>
                <vs-th>Description</vs-th>
                <vs-th>Amount</vs-th>
                <vs-th>Action</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].name"> {{ data[indextr].day}} </vs-td>
                    <vs-td :data="data[indextr].desc"> {{ data[indextr].desc}} </vs-td>
                    <vs-td :data="data[indextr].hourly_rate" class="text-danger"> {{ data[indextr].amount | currency }}</vs-td>
                    <vs-td :data="data[indextr].id">
                        <div class="centerx flex">
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
import moment from 'moment'
import Datepicker from 'vuejs-datepicker';

export default {
    name: 'manage-transaction',
    components: {
        Datepicker
    },
    mounted() { // get current expenses
        
        const day = moment().format('YYYY-MM-DD');

        this.selectedDay = day;
        this.getExpenses(day);
    },
    data() {
        return {
            disabledDates: {
                to: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()-7), // Disable all dates up to specific date
                from: new Date(), // Disable all dates after specific date
            },
            expenses: [],
            showAddExpense: false,
            showViewExpense: false,
            selectedDay: null,
            desc: null,
            amount: null,
            selectedExpenseId: null
        }
    },
    methods: {

        onShowAddExpense() {
            this.showAddExpense = true
        },
        onShowViewExpense() {
            this.showViewExpense = true
        },
        resetForm() {
            this.showAddExpense = false,
            this.desc = null,
            this.amount = null
        },
        validateForm() {

            this.onShowAddExpense();

            this.$validator.validateAll().then( res => {
                if(res) return this.addExpense();
                else return window.$notif('error', 'Invalid Input', 'Please check your inputs and try again.');
            });
        },
        openConfirmDelete(expenseId) { // open delete confirmation dialog
            
            this.selectedExpenseId = expenseId; // set the selected expense Id

            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                text: 'Do you want to delete this expense?',
                accept: this.removeExpense
            })
        },
        changeExpensesDay() {
            this.getExpenses(moment(this.selectedDay).format('YYYY-MM-DD'));
        },
        async getExpenses(day) {
           this.$vs.loading();
            
            await ax.get(`/accounting/expenses/${day}`).then( res => this.expenses = res.data)
            .catch( () => window.$notif('error', 'Expenses Fetch Failed', 'Unable to retrieve expenses.'))

            this.$vs.loading.close();
        },
        async addExpense() {
            this.$vs.loading();

            await ax.post('/accounting/expenses', {day: moment(this.selectedDay).format('YYYY-MM-DD'), desc: this.desc, amount: this.amount})
            .then( () => {
                this.resetForm()
                this.changeExpensesDay()
                window.$notif('success', 'Added A New Expense', 'Successfully added a new expense.')
            })
            .catch(() => window.$notif('error', 'Adding Expenses Failed', 'Unable to add a new expenses.'))

            this.$vs.loading.close();
        },
        async removeExpense() {
            this.$vs.loading();

            await ax.delete(`/accounting/expenses/${this.selectedExpenseId}`)
            .then( () => this.getExpenses(this.selectedDay), window.$notif('success', 'Removed An Expense', 'Successfully removed an expense.'))
            .catch( () => window.$notif('error', 'Removing Expense Failed', 'Unable to remove expenses'))
        
            this.$vs.loading.close();
        }
    }
}
</script>