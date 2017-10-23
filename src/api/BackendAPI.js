import axios from 'axios';
import uuid from 'node-uuid';

const BASE_URL = 'http://localhost:8000';

let BackendAPI = {
  getCustomers: function () {
    const requestURL = `${BASE_URL}/api/customers`;
    return axios.get(requestURL).then((res) => {
      return res.data;
    });
  },
  getProducts: function () {
    const requestURL = `${BASE_URL}/api/products`;
    return axios.get(requestURL).then((res) => {
      console.log(res);
      return res.data;
    });
  }
};

export default BackendAPI;
