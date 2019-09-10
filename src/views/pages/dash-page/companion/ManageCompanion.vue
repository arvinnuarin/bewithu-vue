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
                <vs-th>Mobile</vs-th>
                <vs-th>Email</vs-th>
            </template>
        </vs-table>
    </page-card>
</template>

<script>

export default {
    name: 'manage-companion',
    data() {
        return {
            users: []
        }
    },
    methods: {
      onAddCompanion() {
        this.$router.push({name:'companion-add'})
      }
    }
}
</script>