<!-- =========================================================================================
    File Name: GameList.vue
    Description: List of Games page
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <div class="vx-row pt-6">
        <game-card :key="i" v-for="(game, i) in filtered_games" :type="$route.params.game" :title="game.name" :image="game.img"/>
    </div>
</template>

<script>

import GameCard from './GameCard'
import _ from 'lodash'

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
        console.log(this.$route.params.game)
    },
    data() {
        return {
            games: [
                {
                    type: 'blackjack',
                    name: 'Boombay Club Blackjack',
                    img: '//heathmont.imgix.net/casino-evolution/evolution-baccarat-lobby-thumb.jpg?auto=compress,format&w=194'
                },
                {
                    type: 'roulettes',
                    name: 'Boombay Club Speed Roulette',
                    img: '//heathmont.imgix.net/casino-evolution/bombay-speed-roulette-thumbnail.jpg?auto=compress,format&w=194'
                },
                {
                    type: 'roulettes',
                    name: 'MONOPOLY Live',
                    img: '//heathmont.imgix.net/casino-evolution/monopoly-live.jpg?auto=compress,format&w=194'
                },
                {
                    type: 'baccarat',
                    name: 'Boombay Club Squeeze Baccarat',
                    img: '//heathmont.imgix.net/casino-evolution/squeeze-baccarat-thumbnail.jpg?auto=compress,format&w=194'
                },
                {
                    type: 'blackjack',
                    name: 'Evolution Blackjack Lobby',
                    img: '//heathmont.imgix.net/casino-evolution/evolution-blackjack-lobby-thumb.jpg?auto=compress,format&w=194'
                },
                {
                    type: 'baccarat',
                    name: 'Bombay Club Salon Prive Baccarat',
                    img: '//heathmont.imgix.net/casino-evolution/bombay-saloon-private-baccarat-thumbnail.jpg?auto=compress,format&w=194'
                },
                {
                    type: 'roulettes',
                    name: 'Evolution Roulette Lobby',
                    img: '//heathmont.imgix.net/casino-evolution/evolution-roulette-lobby-thumb.jpg?auto=compress,format&w=194'
                },
                {
                    type: 'baccarat',
                    name: 'Evolution Live Speed Baccarat B',
                    img: '//heathmont.imgix.net/casino-evolution/speed-baccarat-b-thumb.jpg?auto=compress,format&w=194'
                },
                {
                    type: 'baccarat',
                    name: 'Evolution Live Speed Baccarat A',
                    img: '//heathmont.imgix.net/casino-evolution/speed-baccarat-a-thumb.jpg?auto=compress,format&w=194'
                },
                {
                    type: 'baccarat',
                    name: 'Evolution Live Casino Holdem',
                    img: '//heathmont.imgix.net/casino-evolution/casino-holdem-thumb.jpg?auto=compress,format&w=194'
                },
                {
                    type: 'live-blackjack',
                    name: 'Evolution Live Blackjack Party',
                    img: '//heathmont.imgix.net/casino-evolution/blackjack-party-thumb.jpg?auto=compress,format&w=194'
                },
                 {
                    type: 'live-blackjack',
                    name: 'Blackjack Diamond VIP',
                    img: '//heathmont.imgix.net/casino-evolution/blackjack-diamond-vip-thumb.jpg?auto=compress,format&w=194'
                },
            ]
        }
    },
    computed: {
       filtered_games() {
           return window.$v.$route.params.game === 'all-games' ? this.games : this.games.filter(function(game) {
               return game.type === window.$v.$route.params.game
           })
       }
    }
}
</script>