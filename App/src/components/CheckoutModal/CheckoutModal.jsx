import './styles.css';
import { CartTotal } from '../CartTotal/CartTotal';
import PropTypes from 'prop-types';

export const CheckoutModal = ({
    onClose,
    items,
    finalizeOrder
}) => {
    return( 
        <div className="confirm-modal">
            <div className="confirm-modal-content">
                <div className='confirm-modal-button-container'>
                    <button 
                        className='confirm-modal-button'
                        onClick={onClose}>
                            Go Back
                    </button>
                </div>
                <CartTotal 
                    items={items}
                    title={'Review Order'}
                    buttonText={"Confirm Order"}
                    link={"/confirmed"}
                    handleClick={finalizeOrder}/>
            </div>
        </div>
    );
}

CheckoutModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    finalizeOrder: PropTypes.func.isRequired
}

//OnClose is a function that specifies the function that should be called when the Go Back button is clicked
//Items is an array of CartItem object, they have been documented in the CartItem.jsx file
//FinalizeOrder is a function that is used in the CartTotal object, the CartTotal object has been documented in the CartTotal.jsx file