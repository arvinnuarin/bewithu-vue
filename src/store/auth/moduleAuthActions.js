/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

import ax from '../../axiosInstance'
import router from '@/routes/router'
import notification from '@/plugins/notification'

const logoutAction = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userInfo');
    router.go('/auth/login');

    notification('success', 'Successful Logout','Your session has been successfully terminated.');
};

export default {
    async login({ commit }, payload) { //login user

        await ax.post('/auth/login', payload).then(user => {
            
            localStorage.setItem('access_token', user.data.access_token); // save to local storage
            localStorage.setItem('expires_at', user.data.expires_at);
            
            commit('UPDATE_AUTHENTICATED_USER', {displayName: user.data.user.name, email: user.data.user.email, uid: user.data.user.id});
            notification('success', 'Successful Login', 'Thank you! You are now logged in.' );
            router.go(router.currentRoute.query.to || '/dashboard');

        }).catch( () => {
            notification('error', 'Unable to Login', 'Please check your credentials and try again.');
        });
    },
    async logout() {

        await ax.post('/auth/logout').then(() => {
           logoutAction();
        }).catch( () => {
            logoutAction();
        }); 
    }
}
