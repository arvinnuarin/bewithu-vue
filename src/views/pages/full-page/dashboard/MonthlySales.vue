<!-- =========================================================================================
    File Name: MonthlySales.vue
    Description: Dashboard Monthly Sales Graph
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <!-- LINE CHART -->
    <div class="vx-col w-full md:w-2/3 mb-base">
        <vx-card title="Monthly Sales">
            <div slot="no-body" class="p-6 pb-0">
                <div class="flex">
                    <div class="mr-6">
                        <p class="mb-1 font-semibold">This Month</p>
                        <p class="text-3xl text-success">{{ this.sales | currency}}</p>
                    </div>
                    <div>
                        <p class="mb-1 font-semibold">Last Month</p>
                        <p class="text-3xl">{{ 0 | currency }}</p>
                    </div>
                </div>
                <vue-apex-charts type=line height=266 :options="monthlySalesGraph.chartOptions" :series="monthlySalesGraph.series" />
            </div>
        </vx-card>
    </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'

export default {
    name: 'dashboard-monthly-sales',
    components: {
        VueApexCharts
    },
    props: ['sales'],
    computed: {
        history() {
            return [0,0,0,0,0,0,0,0,0,0,this.sales,0]
        },
        monthlySalesGraph() {
            return {
                 series: [{
                        name: "Monthly Sales",
                        data: this.history
                    },
                ],
                chartOptions: {
                    chart: {
                        toolbar: { show: false },
                    },
                    stroke: {
                        curve: 'smooth',
                        dashArray: [0, 8],
                        width: [4, 2],
                    },
                    grid: {
                        borderColor: '#e7e7e7',
                    },
                    legend: {
                        show: false,
                    },
                    colors: ['#F97794', '#b8c2cc'],
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'dark',
                            inverseColors: false,
                            gradientToColors: ['#7367F0', '#b8c2cc'],
                            shadeIntensity: 1,
                            type: 'horizontal',
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 100, 100, 100]
                        },
                    },
                    markers: {
                        size: 0,
                        hover: {
                            size: 5
                        }
                    },
                    xaxis: {
                        labels: {
                            style: {
                                cssClass: 'text-grey fill-current',
                            }
                        },
                        axisTicks: {
                            show: false,
                        },
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        axisBorder: {
                            show: false,
                        },
                    },
                    yaxis: {
                        tickAmount: 5,
                        labels: {
                            style: {
                                cssClass: 'text-grey fill-current',
                            },
                            formatter: function(val) {
                                return val > 999 ? (val / 1000).toFixed(1) + 'k' : val;
                            }
                        }
                    },
                    tooltip: {
                        x: { show: false }
                    }
                }
            }
        }
    }
}
</script>