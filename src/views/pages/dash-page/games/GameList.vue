<!-- =========================================================================================
    File Name: GameList.vue
    Description: List of Games page
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-row pt-6">
        <game-card :key="i" v-for="(game, i) in filtered_games" :type="$route.params.game" :title="game.name" :image="game.image"/>
    </div>
</template>

<script>

import GameCard from './GameCard'
import _ from 'lodash'

import ax from '@/axiosInstance'

export default {
    name: 'GameList',
    components: {
        GameCard
    },
    beforeRouteUpdate (to, from, next) {
        function apptStat (param) {
            const pages = [{ type: 'slot', name: 'Slots' }, { type: 'jackpot-slots', name: 'Jackpot Slots' },
            { type: 'baccarat', name: 'Baccarat' }, { type: 'blackjack', name: 'Blackjack' },
            { type: 'roulettes', name: 'Roulette' }, { type: 'table-games', name: 'Table Games' },
            { type: 'all-games', name: 'All Games' }, 
            { type: 'live-baccarat', name: 'Live Baccarat' }, { type: 'live-blackjack', name: 'Live Blackjack' },
            { type: 'live-roulette', name: 'Live Roulette' },
        ]
            return _.find(pages, {type: param});
        }

        const data = apptStat(to.params.game);
        const isValid = data ? true : false;

        to.meta.pageTitle = data.name;
        to.meta.breadcrumb[2] = { title: data.name, active: true };
        
        if (!isValid) { next({ name: 'pageError404' }); }
        
        next();
    },
    mounted() {
        this.initGames()
    },
    data() {
        return {
            games: []
        }
    },
    computed: {
       filtered_games() {
           return window.$v.$route.params.game === 'all-games' ? this.games : this.games.filter(function(game) {
               return game.type === window.$v.$route.params.game
           })
       }
    },
    methods: {
        async initGames() {
            await ax.get('/games').then(res => this.games = res.data).catch(() => this.games = [])
        },
    }
}
</script>