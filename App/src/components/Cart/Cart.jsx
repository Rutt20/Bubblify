import './styles.css';
import { CartEmpty } from '../CartEmpty/CartEmpty';
import { CartList } from '../CartList/CartList';
import { CartTotal } from '../CartTotal/CartTotal';
import { getCartAllItems } from '../../services/cartService';
import { useEffect, useState } from 'react';

export const Cart = () => {
    const [items,setItems] = useState([]);

    useEffect(() => {
        setItems(getCartAllItems());
    },[]);
    
    return (
        <div className='wrapper'>
            <div className='cart-container'>
                <div className='cart-header'>
                    <h1 className='cart-title'>Cart</h1>
                </div>
                <div className='cart-content'>
                    
                    {(items.length <= 0) ? (
                        <div className='cart-empty-container'>
                            <CartEmpty />
                        </div>
                        ):(
                            <>
                                <div className='cart-list-container'>
                                    <CartList items={items}/>
                                </div>
                                <div className='cart-total-container'>
                                    <CartTotal 
                                        items={items}
                                        buttonText={"Checkout"}
                                        link={"/checkout"}
                                    />
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}