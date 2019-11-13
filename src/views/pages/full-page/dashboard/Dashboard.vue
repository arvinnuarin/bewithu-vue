<!-- =========================================================================================
    File Name: Dashboard.vue
    Description: Dashboard
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->

<template>
    <div class="vx-row">
        
        <div class="pb-4 mb-base w-full">
            <banner />
        </div>
        
        <div class="pb-4 mb-base w-full">
            <vx-card
                title="인기 많은 게임"
                title-color="primary"
                subtitle="Most Popular Game">
                <div slot="no-body" class="p-6">
                    <popular-game />
                </div>
            </vx-card>
        </div>

        <div class="pb-4 mb-base w-full">
            <vx-card
                title="인기 많은 게임"
                title-color="primary"
                subtitle="Most Popular Game">
                <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </vx-card>
        </div>
    </div>
</template>

<script>

import Banner from './Banner'
import PopularGame from './PopularGame'

export default {
    name: 'dashboard',
    components: {
        Banner,
        PopularGame,
    },
    mounted() {       
        // this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    },
}
</script>
