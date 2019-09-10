/*=========================================================================================
  File Name: accounting.routes.js
  Description: Routes for Accounting Module
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

const accountingRoutes = [ 
    {
        path: '/accounting/transactions/appointment',
        name: 'accounting-transaction',
        component: () => import('@/views/pages/dash-page/accounting/transactions/ManageTransaction.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Transactions', active: true }],
            pageTitle: 'Transactions',
            rule: 'editor'
        }
    },
];

export default accountingRoutes;