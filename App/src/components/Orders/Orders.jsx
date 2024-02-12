import './styles.css';
import { OrderModal } from '../OrderModal/OrderModal';
import { useState } from 'react';


export const Orders = () => {
    const [ showModal, setShowModal ] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }
    return(
        <div className='previous-order-container'>
            <h1 className='previous-order-title'>
                Have you ordered here before?
            </h1>
            <button 
                className='previous-order-button'
                onClick={toggleModal}>
                Check Existing Orders
            </button>
            {showModal && (
                <OrderModal onClose={toggleModal}/>
            )}
        </div>
    );
}
