/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/


export default {
    isUserLoggedIn: () => {
        let isAuthenticated = false;
        isAuthenticated ? true : false;
        
        return (localStorage.getItem('userInfo') && isAuthenticated);
    },
    user: null
}