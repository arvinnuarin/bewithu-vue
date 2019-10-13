/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
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

import Vue from 'vue'
import Router from 'vue-router'

// AUTHENTICATED DASHBOARD ROUTES
import miniApps from './auth/mini-app.routes'
import companionRoutes from './auth/companion.routes'
import apppointmentRoutes from './auth/appointment.routes'
import customerRoutes from './auth/customer.routes'
import accountingRoutes from './auth/accounting.routes'
import settingsRoutes from './auth/settings.routes'

// UNAUTHENTICATED FULL PAGE ROUTES
import errorRoutes from './guest/error.routes'
import authRoutes from './guest/auth.routes'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('@/layouts/main/Main.vue'),
            meta: { requiresAuth: true},
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
                {
                    path: '/',
                    redirect: '/dashboard'
                },
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/pages/full-page/dashboard/Dashboard.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/schedule',
                    name: 'schedule',
                    component: () => import('@/views/pages/dash-page/schedule/ScheduleCalendar.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },

        // =============================================================================
        // Dashboard Routes (Authenticated)
        // =============================================================================
               ...miniApps, ...companionRoutes, ...apppointmentRoutes, ...customerRoutes, ...accountingRoutes, 
               ...settingsRoutes
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
               ...errorRoutes,
               ...authRoutes
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/sorry/error-404-not-found'
        }
    ],
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(r => r.meta.requiresAuth)) { // if route requires authentication
        if(localStorage.getItem('userInfo')) {
            next()
        } else {
            next({ path: '/auth/login', query: { redirect: to.fullPath } });
        }
    } else { // if doesn't need authentication

        if(localStorage.getItem('userInfo')) { // if user is authenticated
            if(to.matched.some(r => r.meta.authRoute)) { // if authentication route
                next({ path: '/dashboard', query: { redirect: to.fullPath } }); // redirect to dashboard
            } else {
                next()
            }
        } else {
            next()
        }
    }
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
      if (appLoading) {
          appLoading.style.display = "none";
      }
  })

export default router
