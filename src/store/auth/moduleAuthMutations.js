/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/


export default {
	UPDATE_AUTHENTICATED_USER(state, user) {
		localStorage.setItem('userInfo', JSON.stringify(user));
    localStorage.setItem('userRole', 'admin');
    state.user = user;
	},
}