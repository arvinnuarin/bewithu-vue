/*=========================================================================================
  File Name: customer.routes.js
  Description: Routes for Managing Customers
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

const customerRoutes = [ 
    {
        path: '/customer/:page',
        name: 'customer-main',
        component: () => import('@/views/pages/dash-page/customer/Main.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Customer Account', active: true }],
            pageTitle: 'Customer Account',
            rule: 'editor',
            requiresAuth: true
        },
        beforeEnter: (to, from, next) => {
            function apptStat (param) {
               const pages = [{ type: 'funds', name: 'Funds' }, { type: 'loyalty', name: 'Loyalty' },
               { type: 'bonuses', name: 'Bonuses' }, { type: 'account', name: 'Account' },
               { type: 'security', name: 'Security' }, { type: 'settings', name: 'Settings' },
               { type: 'notifications', name: 'Notifications' },
            ]
               return _.find(pages, {type: param});
            }

            const data = apptStat(to.params.page);
            const isValid = data ? true : false;
            
            if (!isValid) { next({ name: 'pageError404' }); }
            
            next();
        }
    }
];

export default customerRoutes;