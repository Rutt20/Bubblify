
const ORDERS_URL = 'http://localhost:3500/api/orders';

async function getAllOrders(telephone){
    try {
        const resp = await fetch(ORDERS_URL + '/' + telephone);
        const data = await resp.json();
        return data;
      } catch (error) {
        console.error(error);
      }
}

module.exports = {
    getAllOrders
}


