import './styles.css';
import { useState } from 'react';
import { addCartItem } from '../../services/cartService';
import PropTypes from 'prop-types';

export const CartButtons = ({item,type}) => {
    const [stock,setStock] = useState(1);
    function toggleStock(type) {
        switch(type) {
            case '-':
                if(stock > 1) {
                    setStock(stock-1)
                }
                break;
            case '+':
                setStock(stock + 1)
                break; 
        }
    }

    function handleButtonClick() {
        let key = '';

        //Define cartObject
        var cartItemObject = {
            id: '',
            name: item.name,
            price: 0,
            image: '',
            quantity: parseInt(document.getElementById('stock-amount').innerHTML)
        }

        //Check if bundle or individual product
        switch(type) {
            case 'bundle':
                key = 'bundle'+item.id;
                
                let price = 0;
                item.products.forEach(p => {
                    price += p.price;
                });

                cartItemObject.price = price;
                cartItemObject.id = key;
                
                break;
            case 'product':
                key = 'product'+item.id;

                cartItemObject.price = item.price;
                cartItemObject.image = item.image;
                cartItemObject.id = key;
                break;
        }

        addCartItem(cartItemObject);
    }

    return (
        <div className='cart-buttons-container'>
            <div className='stock-container'>
                <p id='stock-amount'>{stock}</p>
                <div className='stock-button-container'>
                    <button 
                        className='stock-plus'
                        onClick={() => toggleStock('+')}>
                        +
                    </button>
                    <button 
                        className='stock-minus'
                        onClick={() => toggleStock('-')}>
                            -
                    </button>
                </div>
            </div>
            <button 
                className='cart-button'
                onClick={() => handleButtonClick()}>
                Pop to Cart
            </button>
        </div>
    );
}

CartButtons.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number,
        image: PropTypes.string
    }),
    type: PropTypes.string.isRequired,
}

//Item is a single CartItem object which has been documented in CartItem.jsx
//Type is of data type string and is used to distinguish between a bundle item and a bubble item