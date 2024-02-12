import './styles.css';
import PropTypes from 'prop-types';

export const OrderItem = ({
    name,
    quantity,
    price
}) => {
    return (
        <div className='order-item-container'>
            <h2 className='order-item-label'>{name}: {quantity}</h2>
            <h2 className='order-item-price'>{quantity*price}</h2>
        </div>
    );
}

OrderItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}

//Name is of the data type string and holds the name of the OrderItem
//Price is of the data type number and holds the price of the OrderItem
//Quantity is of the data type number and holds the quantity of the OrderItem, how many of this OrderItem do we have