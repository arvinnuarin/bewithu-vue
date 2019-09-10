/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/


import auth from "@/auth/authService";

export default {
    isUserLoggedIn: () => {
        let isAuthenticated = false;

        isAuthenticated ? auth.isAuthenticated = true : false;
        return (localStorage.getItem('userInfo') && isAuthenticated);
    },
}