import axios from 'axios';
import store from './store/index';
let baseURL = '';
if (store.getters.DEVELOPMODE) baseURL = 'http://localhost:8877/';
else baseURL = 'https://profileglance.site:8877/';

export default axios.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
