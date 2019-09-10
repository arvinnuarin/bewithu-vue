/*=========================================================================================
  File Name: error.routes.js
  Description: Routes for web errors
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

const webRoutes = [ 
   
    {
        path: '/sorry/error-404-not-found',
        name: 'pageError404',
        component: () => import('@/views/pages/full-page/error/Error404.vue'),
        meta: {
            rule: 'editor'
        }
    },
    {
        path: '/sorry/error-500-server',
        name: 'pageError500',
        component: () => import('@/views/pages/full-page/error/Error500.vue'),
        meta: {
            rule: 'editor'
        }
    },
    {
        path: '/sorry/not-authorized',
        name: 'pageNotAuthorized',
        component: () => import('@/views/pages/full-page/error/NotAuthorized.vue'),
        meta: {
            rule: 'editor'
        }
    },
    {
        path: '/sorry/maintenance',
        name: 'pageMaintenance',
        component: () => import('@/views/pages/full-page/error/Maintenance.vue'),
        meta: {
            rule: 'editor'
        }
    }
];

export default webRoutes;