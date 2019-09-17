/*=========================================================================================
  File Name: auth.routes.js
  Description: Routes for authentication
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

import ax from '@/axiosInstance'

const authRoutes = [
    {
        path: '/callback',
        name: 'authCallback',
        component: () => import('@/views/Callback.vue'),
        meta: {
            authRoute: 'true'
        }
    },
    {
        path: '/auth/login',
        name: 'authLogin',
        component: () => import('@/views/pages/full-page/auth/Login.vue'),
        meta: {
            rule: 'public',
            authRoute: 'true'
        }
    },
    {
        path: '/auth/forgot-password',
        name: 'authForgotPassword',
        component: () => import('@/views/pages/full-page/auth/ForgotPassword.vue'),
        meta: {
            rule: 'public',
            authRoute: 'true'
        }
    },
    {
        path: '/auth/reset-password/:token',
        name: 'authResetPassword',
        component: () => import('@/views/pages/full-page/auth/ResetPassword.vue'),
        meta: {
            rule: 'public',
            authRoute: 'true'
        },
        beforeEnter: (to, from, next) => {

            ax.get(`/auth/find/${to.params.token}`).then(res => {
                next( vm => vm.setResetData(res.data));
            }).catch(() => next({ name: 'pageError404' }));
        }
    },
    {
        path: '/auth/lock-screen',
        name: 'authLockScreen',
        component: () => import('@/views/pages/full-page/auth/LockScreen.vue'),
        meta: {
            rule: 'public',
            authRoute: 'true'
        }
    }
];

export default authRoutes;