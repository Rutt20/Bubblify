import './styles.css';
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"
import { CartTotal } from "../CartTotal/CartTotal";
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutModal } from '../CheckoutModal/CheckoutModal';
import { clearCart, getCartAllItems } from "../../services/cartService";
import { postOrder } from "../../services/service";
import { addUserItem } from "../../services/userService";


export const Checkout = ({}) => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()

    const [items,setItems] = useState([])
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      setItems(getCartAllItems());
    },[])

    const toggleModal = () => {
      setShowModal(!showModal);
    }

    const handleFormSubmit = (data) => {
        setFormData(data);
        toggleModal();
    }

    const handleConfirmOrder  =  () =>{
        const cartItems = getCartAllItems();
        const data = {"user": formData, "products": cartItems};
        const response = postOrder(data, formData.telephone);
        addUserItem(formData);
        clearCart();
        navigate('/confirmed');
    }

    //For Checkout
    const submitForm = () => {
        let formButton = document.getElementById('submit-form');
        if(formButton) {
            formButton.click();
        }
    }
   
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <h1 className='checkout-title'>Checkout</h1>
            </div>
            <div className='checkout-content'>
                <div className='checkout-info'>
                    <h1 className='checkout-info-title'>Your Information</h1>
                    <CheckoutForm formSubmit={handleFormSubmit}/>
                </div>
                <div className='checkout-total'>
                    <CartTotal 
                    items={items}
                    buttonText={"Finish Checkout"}
                    link={""}
                    handleClick={submitForm}/>  
                </div>
            </div>
            {showModal && 
            <CheckoutModal  
                onClose={toggleModal} 
                items={items}
                finalizeOrder={handleConfirmOrder}/>}
        </div>
    )
}