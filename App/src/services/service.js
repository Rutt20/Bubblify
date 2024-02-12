import axios from 'axios';

const BUBBLE_URL = 'http://localhost:3500/api/bubbles';
const BUNDLES_URL = 'http://localhost:3500/api/bundles';
const ORDERS_URL = 'http://localhost:3500/api/orders';

export const getAllProducts = async () => {
    const response = await fetch(BUBBLE_URL);
    const data = await response.json();
    return data;
}

export const getProductById = async (id) => {
    const response = await fetch(BUBBLE_URL+'/'+id);
    const data = await response.json();
    return data;
}

export const getAllBundles = async () => {
    const response = await fetch(BUNDLES_URL);
    const data = await response.json();
    return data;
}

export const getBundleById = async (id) => {
    const response = await fetch(BUNDLES_URL+'/'+id);
    const data = await response.json();
    return data;
}

export const postOrder = async(order, telephone) => {
    axios.post(ORDERS_URL + '/' + telephone, order)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


