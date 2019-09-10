/*=========================================================================================
  File Name: mini-app.routes.js
  Description: Routes for mini applications
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

const miniApps = [ 
    {
        path: '/apps/todo',
        name: 'todo',
        component: () => import('@/views/pages/dash-page/mini-apps/todo/Todo.vue'),
        meta: {
            rule: 'editor'
        }
    },
   /* {
        path: '/apps/calendar',
        name: 'calendar',
        component: () => import('@/views/pages/dash-page/mini-apps/Calendar.vue'),
        meta: {
            rule: 'editor'
        }
    } */
];

export default miniApps;