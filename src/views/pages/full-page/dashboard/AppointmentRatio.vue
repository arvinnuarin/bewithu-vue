<!-- =========================================================================================
    File Name: AppointmentRatio.vue
    Description: Dashboard Appointment Ratio Graph
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <!-- RADIAL CHART -->
    <div class="vx-col w-full md:w-1/3 mb-base">
        <vx-card title="Completed Appointments">

            <!-- CHART -->
            <template slot="no-body">
                <div class="mt-10">
                    <vue-apex-charts type=radialBar height=240 :options="appointmentRatioRadialBar.chartOptions" :series="appointmentRatioRadialBar.series" />
                </div>
            </template>

            <!-- DATA -->
            <div class="flex justify-between text-center" slot="no-body-bottom">
                <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0">
                    <p class="mt-4">Completed</p>
                    <p class="mb-4 text-3xl font-semibold">{{ appointment.completed }}</p>
                </div>
                <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0">
                    <p class="mt-4">All Appointments</p>
                    <p class="mb-4 text-3xl font-semibold"> {{ appointment.all }}</p>
                </div>
            </div>
        </vx-card>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    name: 'dashboard-appointment-ratio',
    props: ['appointment'],
    components: {
        VueApexCharts
    },
    computed: {
        ratio() {
            return (this.appointment.completed / this.appointment.all) * 100
        },
        appointmentRatioRadialBar() {
            return {
                series: [this.ratio],
                chartOptions: {
                    plotOptions: {
                        radialBar: {
                            size: 110,
                            startAngle: -150,
                            endAngle: 150,
                            hollow: {
                                size: '77%',
                            },
                            track: {
                                background: "#bfc5cc",
                                strokeWidth: '50%',
                            },
                            dataLabels: {
                                name: {
                                    show: false
                                },
                                value: {
                                    offsetY: 18,
                                    color: '#99a2ac',
                                    fontSize: '4rem'
                                }
                            }
                        }
                    },
                    colors: ['#00db89'],
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'dark',
                            type: 'horizontal',
                            shadeIntensity: 0.5,
                            gradientToColors: ['#00b5b5'],
                            inverseColors: true,
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 100]
                        },
                    },
                    stroke: {
                        lineCap: 'round'
                    },
                    chart: {
                        sparkline: {
                            enabled: true,
                        },
                        dropShadow: {
                            enabled: true,
                            blur: 3,
                            left: 1,
                            top: 1,
                            opacity: 0.1
                        },
                    },
                }
            }
        }
    }
}
</script>