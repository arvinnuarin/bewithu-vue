/*=========================================================================================
  File Name: axiosInstance.js
  Description: Axios Instance
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

import axios from 'axios'

let token = null;

try {
  token = `Bearer ${localStorage.getItem('access_token')}`;
} catch(e) {
  token = null;
}

const ax = axios.create({
    baseURL: 'http://localhost:8000/api/admin/',
    timeout: 10000,
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 
    'X-Requested-With': 'XMLHttpRequest', 'Authorization': token}
});

export default ax;