import './styles.css';
import { removeCartItem } from '../../services/cartService';
import PropTypes from 'prop-types';


export const CartItem = ({
    id,
    name,
    price,
    image,
    quantity
}) => {
    function HandleButtonClick () {
        removeCartItem(id);
        window.location.reload(false);
    }

    return (
        <div className='cart-item-container'> 
            {(image != '') ? (
                    <img src={image} className='item-img'/>
                )
                :(
                    <div className='img-filler'>
    
                    </div>
                )
            }
            <div className='cart-item-text-container'>
                <h2 className='cart-item-name'>{name}</h2>
                <h2 className='cart-item-quantity'>Quantity: {quantity}</h2>
                <h2 className='cart-item-price'>Price: {price}</h2>
            </div>
            <button 
                className='cart-remove-button'
                onClick={HandleButtonClick}>
                X
            </button>  
        </div>
    )
} ;

CartItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
}

//Id is of data type number and is used as a unique identifier for each cartItem
//Name is of data type string and holds the name of the cartItem
//Price is of data type number and holds the price of the cartItem
//Image is of data type string and holds the url to the image for the cartItem
//Quantity is of data type number and holds the quantity for the cartItem (how many of this cartItem)