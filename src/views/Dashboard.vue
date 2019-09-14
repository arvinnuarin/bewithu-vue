<!-- =========================================================================================
    File Name: Dashboard.vue
    Description: Dashboard
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->

<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line icon="UsersIcon" statistic="92.6k" statisticTitle="Active Users" :chartData="analyticsData.subscribersGained" type='area'></statistics-card-line>
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line icon="DollarSignIcon" statistic="97.5K" statisticTitle="Sales Generated" :chartData="analyticsData.revenueGenerated" color='success' type='area'></statistics-card-line>
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line icon="ShoppingCartIcon" statistic="36%" statisticTitle="Companions" :chartData="analyticsData.quarterlySales" color='danger' type='area'></statistics-card-line>
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
                <statistics-card-line icon="ShoppingBagIcon" statistic="97.5K" statisticTitle="Active Appointments" :chartData="analyticsData.ordersRecevied" color='warning' type='area'></statistics-card-line>
            </div>
        </div>

        <div class="vx-row">

            <!-- LINE CHART -->
            <div class="vx-col w-full md:w-2/3 mb-base">
                <vx-card title="Monthly Sales">
                    <template slot="actions">
                        <feather-icon icon="SettingsIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>
                    <div slot="no-body" class="p-6 pb-0">
                        <div class="flex">
                            <div class="mr-6">
                                <p class="mb-1 font-semibold">This Month</p>
                                <p class="text-3xl text-success"><sup class="text-base mr-1">₱</sup>86,589</p>
                            </div>
                            <div>
                                <p class="mb-1 font-semibold">Last Month</p>
                                <p class="text-3xl"><sup class="text-base mr-1">₱</sup>73,683</p>
                            </div>
                        </div>
                        <vue-apex-charts type=line height=266 :options="analyticsData.revenueComparisonLine.chartOptions" :series="analyticsData.revenueComparisonLine.series" />
                    </div>
                </vx-card>
            </div>

            <!-- RADIAL CHART -->
            <div class="vx-col w-full md:w-1/3 mb-base">
                <vx-card title="Completed Appointments">
                    <template slot="actions">
                        <feather-icon icon="HelpCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>

                    <!-- CHART -->
                    <template slot="no-body">
                        <div class="mt-10">
                            <vue-apex-charts type=radialBar height=240 :options="analyticsData.goalOverviewRadialBar.chartOptions" :series="analyticsData.goalOverviewRadialBar.series" />
                        </div>
                    </template>

                    <!-- DATA -->
                    <div class="flex justify-between text-center" slot="no-body-bottom">
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0">
                            <p class="mt-4">Completed</p>
                            <p class="mb-4 text-3xl font-semibold">786,617</p>
                        </div>
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0">
                            <p class="mt-4">Scheduled</p>
                            <p class="mb-4 text-3xl font-semibold">13,561</p>
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>

        <div class="vx-row">

            <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
                <vx-card title="Companion Statistics">
                    <div v-for="(browser, index) in analyticsData.browserAnalytics" :key="browser.id" :class="{'mt-4': index}">
                        <div class="flex justify-between">
                            <div class="flex flex-col">
                                <span class="mb-1">{{ browser.name }}</span>
                                <h4>{{ browser.ratio }}%</h4>
                            </div>
                            <div class="flex flex-col text-right">
                                <span class="flex -mr-1">
                                    <span class="mr-1">{{ browser.comparedResult }}</span>
                                    <feather-icon :icon=" browser.comparedResult < 0 ? 'ArrowDownIcon' : 'ArrowUpIcon'" :svgClasses="[browser.comparedResult < 0 ? 'text-danger' : 'text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                                </span>
                                <span class="text-grey">{{ browser.time | time(true) }}</span>
                            </div>
                        </div>
                        <vs-progress :percent="browser.ratio"></vs-progress>
                    </div>
                </vx-card>
            </div>

            <div class="vx-col w-full md:w-2/3 mb-base">
                <vx-card title="Monthly Active Users">
                    <div class="flex">
                        <span class="flex items-center"><div class="h-3 w-3 rounded-full mr-1 bg-primary"></div><span>New Clients</span></span>
                        <span class="flex items-center ml-4"><div class="h-3 w-3 rounded-full mr-1 bg-danger"></div><span>Retained Clients</span></span>
                    </div>
                    <vue-apex-charts type=bar height=277 :options="analyticsData.clientRetentionBar.chartOptions" :series="analyticsData.clientRetentionBar.series" />
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'

export default{
    data() {
        return {
            analyticsData: analyticsData,
            chatMsgInput: '',
            contentImg1: 'content-img-1.jpg',
            profileUser1: 'avatar-s-18.png',
            profileUser2: 'avatar-s-1.png',
            profileUser3: 'avatar-s-12.png',
            overlayImg2: 'card-image-5.jpg',
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
        }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        VuePerfectScrollbar,
        ChangeTimeDurationDropdown
    },
    mounted() {
        // this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    }
}
</script>

<style lang="scss">
.chat-card-log {
    height: 400px;

    .chat-sent-msg {
        background-color: #f2f4f7 !important;
    }
}
</style>
