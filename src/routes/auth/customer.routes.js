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
        path: '/customers/:status',
        name: 'customer-status',
        component: () => import('@/views/pages/dash-page/customers/ManageCustomers.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Customers', active: true }],
            pageTitle: 'Customers',
            rule: 'editor'
        },
        beforeEnter: (to, from, next) => {
            function apptStat (param) {
               const status = [{ type: 'active', name: 'Active' }, 
               { type: 'inactive', name: 'Inactive' }]
      
               return _.find(status, {type: param});
            }

            const data = apptStat(to.params.status);
            const isValid = data ? true : false;
            
            if (!isValid) { next({ name: 'pageError404' }); }

            to.meta.pageTitle = `${data.name} Customers`;
            to.meta.breadcrumb[1] = { title: `${data.name} Customers`, active: true };

            next();
        }
    },
];

export default customerRoutes;