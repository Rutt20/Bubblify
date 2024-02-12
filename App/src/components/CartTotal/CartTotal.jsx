import './styles.css';
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';

export const CartTotal = ({
    items,
    title='Total',
    buttonText,
    link,
    handleClick
}) => {
    let sum = 0;
    items.forEach(i => {
        sum += (i.price*i.quantity);
    })

    return (<div className='cart-total'>
        <div className='cart-total-header'>
            <h1 className='cart-total-title'>
                {title}
            </h1>
        </div>
        <div className='cart-total-items'>
            {items.map(i => (
                <div className='cart-total-item-name-text' key={i.id}>
                    <p className='item-name-quantity'>{i.name} - {i.quantity}</p>
                    <p className='item-total-price'>{(i.price*i.quantity)} ISK</p>
                </div>
            ))}
        </div>
        <div className='cart-subtotal-container'>
            <h1 className='cart-subtotal-title'>Subtotal</h1>
            <h1 className='cart-subtotal-text'>{sum} ISK</h1>
        </div>
        <div className='cart-total-button-container'>
            <button 
                className='cart-total-button'
                onClick={handleClick}>
                <Link to={link}>
                    {buttonText}
                </Link>
            </button>
        </div>
    </div>
)};


CartTotal.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    title: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    link: PropTypes.string,
    handleClick: PropTypes.func
}

//Items is an array of CartItems, the CartItem has been documented in the CartItem.jsx file
//Title is of the data type string and is used as a title for the page where the CartTotal is being viewed. 
    //Can be used both in the Cart and when reviewing the order
//ButtonText is of the data type string and is used to set the text for the button being used
//Link is of the data type string and is used to say where the user is navigated to after the button is clicked
//HandleClick is a function and specifies the function that should be called when the button is clicked. 

//The purpose of most of the prop types is so the CartTotal object can be utilized in more than one place in the application

