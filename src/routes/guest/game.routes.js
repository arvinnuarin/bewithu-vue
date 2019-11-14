/*=========================================================================================
  File Name: game.routes.js
  Description: Routes for Games
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/
import _ from 'lodash'

const gameRoutes = [ 
    {
        path: '/games/:game',
        name: 'game-list',
        component: () => import('@/views/pages/dash-page/games/GameList.vue'),
        meta: {
            rule: 'editor',
            breadcrumb: [
              { title: 'Dashboard', url: '/'},
              { title: 'Games', url: null },
              { title: 'Games', active: true }],
            pageTitle: 'Game',
            requiresAuth: false
        },
        beforeEnter: (to, from, next) => {
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
        }
    }
];

export default gameRoutes;