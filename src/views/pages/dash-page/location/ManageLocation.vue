<!-- =========================================================================================
    File Name: ManageLocation.vue
    Description: Manage All Appointment Locations
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <page-card>
        <!-- New Location Button -->
        <div class="mb-5">
            <vs-button color="success" type="gradient" icon-pack="feather" icon="icon-plus" @click="onAddLocation">New Location</vs-button>
        </div>
        <!-- New Locations Table -->
        <vs-table max-items="10" pagination :data="users">

            <template slot="thead">
                <vs-th>Image</vs-th>
                <vs-th>Name</vs-th>
                <vs-th>Address</vs-th>
                <vs-th>Count</vs-th>
            </template>
        </vs-table>
    </page-card>
</template>

<script>

export default {
    name: 'manage-locations',
    data() {
        return {
            users: []
        }
    },
    methods: {
      onAddLocation() {
        this.$router.push({name:'location-add'})
      }
    }
}
</script>