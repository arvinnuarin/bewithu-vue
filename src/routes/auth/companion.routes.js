/*=========================================================================================
  File Name: companion.routes.js
  Description: Routes for General Companions and Rates
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

const generalRoutes = [ 
    {
        path: '/companions/add',
        name: 'companion-add',
        component: () => import('@/views/pages/dash-page/companion/CompanionForm.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Companions', url: '/companions/manage'},
                { title: 'New Companion', active: true}],
            pageTitle: 'New Companion',
            rule: 'editor'
        },
    },
    {
        path: '/companions/manage',
        name: 'companion-manage',
        component: () => import('@/views/pages/dash-page/companion/ManageCompanion.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Companions', active: true}],
            pageTitle: 'Companions List',
            rule: 'editor'
        },
    },
    {
        path: '/companions/service-rates',
        name: 'service-rates',
        component: () => import('@/views/pages/dash-page/service/ManageServices.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Service Rates', active: true}],
            pageTitle: 'Service Rates',
            rule: 'editor'
        },
    }
];

export default generalRoutes;