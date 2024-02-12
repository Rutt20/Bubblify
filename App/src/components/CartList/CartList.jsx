import './styles.css';
import { CartItem } from '../CartItem/CartItem';
import PropTypes from 'prop-types';

export const CartList = ({items}) => {
    return (
        <div className='cart-list-wrapper'>
            {items.map(i => <CartItem 
                key = {i.id}
                id = {i.id}
                name = {i.name}
                price = {i.price}
                image = {i.image}
                quantity = {i.quantity}
            />)}
        </div>
    );
};

CartList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

//Items is an array of CartItem objects
//CartItem has been documented in the CartItem.jsx file