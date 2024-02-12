import './styles.css';
import { useState,useEffect } from 'react';
import { OrderList } from '../OrderList/OrderList';
import { getAllUserItems } from '../../services/userService';
import { getAllOrders } from '../../services/orderService';
import PropTypes from 'prop-types';

export const OrderModal = ({onClose}) => {
    
    const [ items,setItems ] = useState([]);
    const [ orders,setOrders ] = useState([]);
    const checkedNumbers = [];

    useEffect(() => {
        async function getOrders(items) {
            const users = await getAllUserItems();
            for(let i = 0; i < users.length; i++) {
                let curr_nr = users[i].telephone;
                if (!checkedNumbers.includes(curr_nr) && curr_nr){
                    checkedNumbers.push(curr_nr);
                    const data = await getAllOrders(curr_nr);
                    if (data){
                        for (let i = 0; i < data.length; i++){
                            setOrders(orders => [...orders, data[i].products])
                        }
                    }
                }
            }
        }
        getOrders(items);
    },[])

    return( 
        <div className="order-modal">
            <div className="order-modal-content">
                <div className='order-modal-button-container'>
                    <button 
                        className='order-modal-button'
                        onClick={onClose}>
                            Go Back
                    </button>
                </div>
                {(orders.length === 0) ? (
                    <div>
                        <p className='no-orders'>Oh no you haven't made any orders</p>
                    </div>
                 ):(
                    <div>
                        {orders.map((order,index)=> (
                            <OrderList 
                                key={index}
                                items={order}
                                counter={index+1}/>)
                        )}
                    </div>
                 )
                }
            </div>
        </div>
    );
}

OrderModal.propTypes = {
    onClose: PropTypes.func.isRequired
}