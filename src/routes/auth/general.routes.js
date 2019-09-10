/*=========================================================================================
  File Name: general.routes.js
  Description: Routes for General Companions and Location
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
        path: '/appointment/locations/add',
        name: 'location-add',
        component: () => import('@/views/pages/dash-page/location/AddLocation.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Appointment Locations', url: '/appointment/locations/manage'},
                { title: 'New Location', active: true}],
            pageTitle: 'New Location',
            rule: 'editor'
        },
    },
    {
        path: '/appointment/locations/manage',
        name: 'location-manage',
        component: () => import('@/views/pages/dash-page/location/ManageLocation.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Appointment Locations', active: true}],
            pageTitle: 'Appointment Locations List',
            rule: 'editor'
        },
    }
];

export default generalRoutes;