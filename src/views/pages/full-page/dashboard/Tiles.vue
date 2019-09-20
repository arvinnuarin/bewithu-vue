<!-- =========================================================================================
    File Name: Tiles.vue
    Description: Dashboard Tiles
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-row">
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
            <statistics-card-line icon="UsersIcon" :statistic="dashtiles.users" statisticTitle="Active Users" :chartData="analyticsData.subscribersGained" type='area'></statistics-card-line>
        </div>
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
            <statistics-card-line icon="DollarSignIcon" :statistic="dashtiles.sales | currency" statisticTitle="Sales Generated" :chartData="analyticsData.revenueGenerated" color='success' type='area'></statistics-card-line>
        </div>
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
            <statistics-card-line icon="ShoppingCartIcon" :statistic="dashtiles.expenses | currency" statisticTitle="Expenses" :chartData="analyticsData.quarterlySales" color='danger' type='area'></statistics-card-line>
        </div>
        <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
            <statistics-card-line icon="ShoppingBagIcon" :statistic="dashtiles.appointment" statisticTitle="Active Appointments" :chartData="analyticsData.ordersRecevied" color='warning' type='area'></statistics-card-line>
        </div>
    </div>
</template>

<script>


import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from '@/views/ui-elements/card/analyticsData.js'

export default {
    name: 'dashboard-tiles',
    data() {
        return {
            analyticsData: analyticsData,
            dashtiles: this.$store.state.report.dash,
        } 
    },
    components: {
        StatisticsCardLine
    }
}
</script>