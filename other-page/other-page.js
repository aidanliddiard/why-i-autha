// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout

import { logout, checkAuth } from '../fetch-utils.js';

const logOutBtn = document.getElementById('logout');

checkAuth();

logOutBtn.addEventListener('click', () => {
    logout();
});
