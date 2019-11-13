<!-- =========================================================================================
  File Name: Loyalty.vue
  Description: Customer Fund Component
  Component Name: Loyalty
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-row w-full">
        <!--Note -->
        <div class="vx-col w-full">
             <vs-alert color="danger" icon-pack="feather" icon="icon-info" closable :active.sync="showNote" @click="showNote = false" class="mb-base">
                <span class="font-bold pr-3">Note:</span>
                <span>Each month your milestones and points will reset. Use your already achieved milestones by end of the month in order to not lose them.</span>
            </vs-alert>
        </div>
        <!-- Loyalty Board -->
         <div class="vx-col mb-base w-full">
            <vx-card>
                <div slot="no-body" class="p-6">
                    
                </div>
            </vx-card>
        </div>

        <div class="vx-col w-full lg:w-1/2">
            <vx-card  title="Milestones" title-color="primary">

                <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </vx-card>
        </div>

        <div class="vx-col w-full lg:w-1/2">
            <!-- Loyalty FAQ -->
           <div class="w-full mb-base">
               <vx-card  title="Loyalty FAQ" title-color="primary">

                <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </vx-card>
            </div>
            <!-- Terms & Conditions -->
            <div class="w-full mb-base">
                <vx-card  title="Terms & Conditions" title-color="primary">

                <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </vx-card>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    name: 'CustomerLoyalty',
    data() {
        return {
            showNote: true
        }
    }
}
</script>