<!-- =========================================================================================
    File Name: ManageCompanion.vue
    Description: Manage All Companions
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <page-card>
        <!-- Item Category Button -->
        <div class="mb-5">
            <vs-button color="success" type="gradient" icon-pack="feather" icon="icon-plus" @click="onAddCompanion">New Companion</vs-button>
        </div>
        <!-- Categories Table -->
        <vs-table max-items="10" pagination :data="users">

            <template slot="thead">
                <vs-th>Image</vs-th>
                <vs-th>Name</vs-th>
                <vs-th>Gender</vs-th>
                <vs-th>Email</vs-th>
                <vs-th>Phone</vs-th>
            </template>

             <template slot-scope="{data}">
                <vs-tr :key="idx" v-for="(tr, idx) in data">

                    <vs-td :data="data[idx].name"> {{ fullName(data[idx].name)}} </vs-td>
                    <vs-td :data="data[idx].gender"> {{ data[idx].gender }} </vs-td>
                    <vs-td :data="data[idx].email"> {{ data[idx].email}} </vs-td>
                    <vs-td :data="data[idx].phone"> {{ data[idx].phone}} </vs-td>
                    <vs-td :data="data[idx].status"> {{ data[idx].status}} </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </page-card>
</template>

<script>

import ax from '@/axiosInstance'

export default {
    name: 'manage-companion',
    mounted() {
        this.initCompanions(); // initialize companions
    },
    data() {
        return {
            users: []
        }
    },
    methods: {

        async initCompanions() { // retrieve list of companions
            await ax.get('/companion').then( res => {
                this.users = res.data;
                console.log(res.data);
            }).catch(err => {

            });
        },
        fullName(obj) {
            const name = JSON.parse(obj);
            return `${name.last}, ${name.first}`;
        },
        onAddCompanion() {
            this.$router.push({name:'companion-add'})
        }
    }
}
</script>