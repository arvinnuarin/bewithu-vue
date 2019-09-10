/*=========================================================================================
  File Name: settings.routes.js
  Description: Routes for Settings Module
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

const settingsRoutes = [ 
    {
        path: '/settings/user/profile',
        name: 'user-profile',
        component: () => import('@/views/pages/dash-page/settings/Profile.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'User Profile', active: true }],
            pageTitle: 'User Profile',
            rule: 'editor'
        }
    },
    {
        path: '/settings/manage-users',
        name: 'manage-users',
        component: () => import('@/views/pages/dash-page/settings/ManageUsers.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Manage Users', active: true }],
            pageTitle: 'Manage Users',
            rule: 'editor'
        }
    },
];

export default settingsRoutes;