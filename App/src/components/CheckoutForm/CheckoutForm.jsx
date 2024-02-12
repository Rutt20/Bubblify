import './styles.css';
import { useState } from 'react';
import React from 'react';
import { Input } from '../Input/Input';
import PropTypes from 'prop-types';


export const CheckoutForm = ({formSubmit}) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [telephone, setTelephone] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [ isDelivery,setIsDelivery ] = useState(false);
    const [nameError, setNameError] = useState('');
    const [telephoneError, setTelephoneError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [cityError, setCityError] = useState('');
    const [postCodeError, setPostCodeError] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission based on delivery method
        if (validateSubmit()){
            if(isDelivery) {
                formSubmit({name, telephone, address, city, postalCode});
            }else {
                formSubmit({name, telephone})
            }
        }
    }

    function handleClick() {
        setIsDelivery(!isDelivery);
    }

    function validateSubmit() {
        var isValid = true;
        if (name == ''){
            setNameError('This is a required field!');
            isValid = false;
        }
        if (telephone == ''){
            setTelephoneError('This is a required field!');
            isValid = false;
        }
        if (address == '' && isDelivery){
            setAddressError('This is a required field!');
            isValid = false;
        }
        if (postalCode == '' && isDelivery){
            setPostCodeError('This is a required field!');
            isValid = false;
        }
        if (city == '' && isDelivery){
            setCityError('This is a required field!');
            isValid = false;
        }
        return isValid;
    }
    
    function validateInput(id) {
        let curr_input = document.getElementById(id);
        switch(id) {
            case 'checkout-name':
                let curr_name = curr_input.value;
                if(curr_name.length >= 3){
                    curr_input.classList.remove('invalid');
                    setNameError('');
                    setName(curr_name);
                }else {
                    curr_input.classList.add('invalid');
                    setName('');
                    setNameError('Minimum length of name is 3');
                }
                break;
            case 'checkout-pn':
                let curr_pn = curr_input.value;
                if (curr_pn.length > 6 && curr_pn.length < 13){
                    curr_input.classList.remove('invalid');
                    setTelephoneError('');
                    setTelephone(curr_pn)
                }
                else {
                    curr_input.classList.add('invalid');
                    setTelephone('')
                    setTelephoneError('Phone number needs to be longer than 6 and shorter than 13 digits');
                }
                break;
            case 'checkout-address':
                let curr_address = curr_input.value;
                if (curr_address.length >= 5){
                    curr_input.classList.remove('invalid');
                    setAddressError('');
                    setAddress(curr_address);
                }
                else {
                    curr_input.classList.add('invalid');
                    setAddress('');

                    setAddressError('Please enter a valid address');
                }
                break;
            case 'checkout-city':
                let curr_city = curr_input.value;
                if (curr_city.length >= 3){
                    curr_input.classList.remove('invalid');
                    setCityError('');
                    setCity(curr_city);
                }
                else {
                    curr_input.classList.add('invalid');
                    setCity('');
                    setCityError('Please enter a valid city');
                }
                break;
            case 'checkout-zip':
                let curr_zip = curr_input.value;
                if (curr_zip.length == 3){
                    curr_input.classList.remove('invalid');
                    setPostCodeError('');
                    setPostalCode(curr_zip);
                }
                else {
                    curr_input.classList.add('invalid');
                    setPostalCode('');
                    setPostCodeError('Postal code needs to be 3 digits');
                }
                break;
        }
    }

    return (
        <div>
            <form id="order-form" onSubmit={handleSubmit}>
                <Input 
                    id={'checkout-name'}
                    title={'Name'}
                    type={'text'}
                    handleOnInput={validateInput}
                    required
                />
                <p className='error'>{nameError}</p>
                <Input 
                    id={'checkout-pn'}
                    title={'Phone Number'}
                    type={'number'}
                    handleOnInput={validateInput}
                />
                <p className='error'>{telephoneError}</p>

                <div className='delivery-content'>
                    <p className='delivery-text'>Delivery</p>
                    <input 
                        type='checkbox' 
                        className='delivery-checkbox' 
                        id="delivery"
                        onClick={handleClick}
                    />
                </div>
                {isDelivery && (
                    <>
                        <Input 
                            id={'checkout-address'}
                            title={'Address'}
                            type={'text'}
                            handleOnInput={validateInput}
                        />
                            <p className='error'>{addressError}</p>

                            <Input
                                id={'checkout-city'}
                                title={'City'}
                                type={'text'}
                                handleOnInput={validateInput}
                            />
                            <p className='error'>{cityError}</p>

                            <Input
                                id={'checkout-zip'}
                                title={'Zip'}
                                type={'number'}
                                handleOnInput={validateInput}
                                
                            />
                            <p className='error'>{postCodeError}</p>
                    </>
                )}
                <button type="submit" id="submit-form" className='hidden'></button>
            </form>
        </div>
    );
}

CheckoutForm.propTypes = {
    formSubmit: PropTypes.func.isRequired
}

//onsubmit specifies the function that should be called when the form in the checkout has been submitted