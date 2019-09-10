/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

import ax from '../../axiosInstance'
import router from '@/routes/router'

export default {
    async login({ commit, dispatch }, payload) { //login user
        
        await ax.post('/auth/login', payload).then(user => {
            
            localStorage.setItem('access_token', user.data.access_token); // save to local storage
            localStorage.setItem('expires_at', user.data.expires_at);
            
            commit('UPDATE_AUTHENTICATED_USER', {displayName: user.data.user.name, email: user.data.user.email, uid: user.data.user.id})
            dispatch('notif/pushSuccess', {title: 'Successfully Authenticated User', desc: 'You are now logged in!'}, {root: true});
            router.push(router.currentRoute.query.to || '/dashboard');
        }).catch(err => {
            dispatch('notif/pushError', {title: `Unable to authenticate user. [${err.response.status}]`, desc: err.response.data.message}, {root: true});
        });
    },
    async logout({ dispatch }) {

        await ax.post('/auth/logout').then(() => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('expires_at');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userInfo');
            router.replace('/auth/login');
        }).catch(err => {
            dispatch('notif/pushError', {title: `Unable to logout user. [${err.response.status}]`, desc: err.response.data.message}, {root: true});
        });
    }
}
