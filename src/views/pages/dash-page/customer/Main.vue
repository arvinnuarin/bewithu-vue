<!-- =========================================================================================
  File Name: Main.vue
  Description: Customer Main Component
  Component Name: Main
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div>
        <vs-tabs>
            <vs-tab label="Funds">
                <div class="tab-text">
                    <funds />
                </div>
            </vs-tab>
             <vs-tab label="Loyalty">
                <div class="tab-text">
                    <loyalty />
                </div>
            </vs-tab>
             <vs-tab label="Bonuses">
                <div class="tab-text">
                    <bonus />
                </div>
            </vs-tab>
             <vs-tab label="Account">
                <div class="tab-text">
                    <account />
                </div>
            </vs-tab>
             <vs-tab label="Security">
                <div class="tab-text">
                    <security />
                </div>
            </vs-tab>
             <vs-tab label="Settings">
                <div class="tab-text">
                    <settings />
                </div>
            </vs-tab>
            <vs-tab label="Notifications">
                <div class="tab-text">
                    <notification />
                </div>
            </vs-tab>
        </vs-tabs>
    </div>
</template>

<script>

import Funds from './Funds'
import Loyalty from './Loyalty'
import Bonus from './Bonus'
import Account from './Account'
import Security from './Security'
import Settings from './Settings'
import Notification from './Notification'

export default {
    name: 'customer-main',
    components: {
        Funds,
        Loyalty,
        Bonus,
        Account,
        Security,
        Settings,
        Notification
    }   
}
</script>
<style scoped>
.tab-text {
    margin-top: 2em;    
}
</style>