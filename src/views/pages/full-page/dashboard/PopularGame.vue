<!-- =========================================================================================
    File Name: NewGame.vue
    Description: New Game
    ----------------------------------------------------------------------------------------
    Author: John Arvin Nuarin
========================================================================================== -->
<template>
    <carousel :slides="slides" />
</template>

<script>

import Carousel from './Carousel'

export default {
    name: 'PopularGames',
    components: {
        Carousel
    },
    computed: {
        slides() {
            return [
                {
                    id: '1',
                    image: 'http://heathmont.imgix.net/casino-hub88/kalamba/wildcraft-thumbnail.jpg?auto=compress,format&w=194',
                    name: 'Wildcraft',
                    url: '/casino/games/wildcraft'
                },
                 {
                    id: '2',
                    image: 'http://heathmont.imgix.net/casino-hub88/kalamba/Blood-moon-express-thumbnail.jpg?auto=compress,format&w=194',
                    name: 'Blood Moon Express',
                    url: '/casino/games/blood-moon-express'
                },
                 {
                    id: '3',
                    image: 'http://heathmont.imgix.net/casino-playngo/DoomOfEgypt_thumbnail.jpg?auto=compress,format&w=194',
                    name: 'Doom of Egypt',
                    url: '/casino/games/doom-of-egypt'
                }, 
                {
                    id: '4',
                    image: 'http://heathmont.imgix.net/casino-hub88/redtiger/DaVincisMystery_thumbnail.jpg?auto=compress,format&w=194',
                    name: 'Da Vincis Mystery',
                    url: '/casino/games/da-vincis-mystery'
                },
                 {
                    id: '5',
                    image: 'http://heathmont.imgix.net/casino-booming/SnailRace_thumbnail.jpg?auto=compress,format&w=194',
                    name: 'Snail Race',
                    url: '/casino/games/wildcraft'
                },
                 {
                    id: '6',
                    image: 'http://heathmont.imgix.net/casino-hub88/kalamba/wildcraft-thumbnail.jpg?auto=compress,format&w=194',
                    name: 'Wildcraft',
                    url: '/casino/games/wildcraft'
                }
            ]
        }
    }
}

</script>