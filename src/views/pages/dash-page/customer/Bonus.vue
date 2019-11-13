<!-- =========================================================================================
  File Name: Bonus.vue
  Description: Customer Bonus Component
  Component Name: Loyalty
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-row w-full">
        <div class="vx-col w-full lg:w-1/3 md:w-2/3 mb-base">
             <vx-card title="Total Balance" title-color="primary">
                <div class="">
                    <h2>0.00 µɃ</h2>
                </div>

                <vs-divider />

                <div class="vx-row">
                    <div class="vx-col w-full lg:w-1/2">
                        <label class="text-gray-100">Bonus amount:</label>
                        <h5>0.00 µɃ</h5>
                    </div>
                    <div class="vx-col w-full lg:w-1/2">
                        <label class="text-gray-100">Available balance:</label>
                        <h5>0.00 µɃ</h5>
                    </div>
                </div>
            </vx-card>
        </div>
         <div class="vx-col w-full lg:w-2/3 md:w-1/3"></div>
        <!-- Bonus code -->
        <div class="vx-col w-full lg:w-1/3 md:w-2/3 mb-base">
             <vx-card title="Bonus Code" title-color="primary">
                 <vs-input placeholder="Enter bonus code" v-model="bonus" class="w-full"/>
            </vx-card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CustomerBonus',
    data() {
        return {
            bonus: null
        }
    }
}
</script>