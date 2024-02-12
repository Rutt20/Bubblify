import './styles.css';
import { OrderItem } from '../OrderItem/OrderItem';
import { addCartItem } from '../../services/cartService';
import PropTypes from 'prop-types';

export const OrderList = ({items,counter}) => {
    const addToCart = () => {
        for(let i = 0; i < items.length; i++) {
            addCartItem(items[i]);
        }
    }
    return (
        <div className='order-list-container'>
            <div className='orderlist-content'>
                <h1 className='orderlist-title'>Order {counter}</h1>
                {items.map(o => 
                    <OrderItem
                        key={o.id}
                        name={o.name}
                        quantity={o.quantity}
                        price={o.price}
                    />
                )}
            </div>
            <button 
                className='orderlist-button'
                onClick={addToCart}>
                Add To Cart
            </button>
        </div>
    );
};

OrderList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })),
    counter: PropTypes.number
}

//items is an array of the items who were in the order
//counter is the number of the order