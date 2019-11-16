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
    },
    {
        path: '/customer/funds/deposit',
        name: 'customer-deposit',
        component: () => import('@/views/pages/dash-page/transaction/Deposit.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Funds', url: '/customer/funds' },
                { title: 'BTC Funds Deposit', url: '/customer/funds/deposit', active: true }],
            pageTitle: 'Fund Account',
            rule: 'editor',
            requiresAuth: true
        }
    },
    {
        path: '/customer/funds/withdraw',
        name: 'customer-withdraw',
        component: () => import('@/views/pages/dash-page/transaction/Withdrawal.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Funds', url: '/customer/funds' },
                { title: 'BTC Funds Withdrawal', url: '/customer/funds/withdraw', active: true }],
            pageTitle: 'Withdraw BTC',
            rule: 'editor',
            requiresAuth: true
        }
    },
    {
        path: '/customer/funds/transactions',
        name: 'customer-transactions',
        component: () => import('@/views/pages/dash-page/transaction/Transaction.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Funds', url: '/customer/funds' },
                { title: 'Transactions', url: '/customer/funds/transactions', active: true }],
            pageTitle: 'Your Transactions',
            rule: 'editor',
            requiresAuth: true
        }
    }
];

export default customerRoutes;