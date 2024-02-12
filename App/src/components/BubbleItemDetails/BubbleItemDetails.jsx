import './styles.css';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BubblesContext } from '../../context/BubblesContext';
import { CartButtons } from '../CartButtons/CartButtons';
import { Orders } from '../Orders/Orders';

export const BubbleItemDetails = () => {
    const { bubbleItemId } = useParams();
    const { oneProduct } = useContext(BubblesContext);
    const [ product, setProduct ] = useState({});
   

    useEffect(() => {
        async function getProduct() {
            const data = await oneProduct(bubbleItemId);
            setProduct(data);
        }

        getProduct();
    },[]);

    return (
        <div className='details-wrapper'>
            <div className='bubble-details-image-wrapper'>
                <button className='bubble-details-image-button'>
                    <Link to='/bubbles'>
                        Back
                    </Link>
                </button>
                <img className='bubble-details-image' src={product.image}/>
            </div>
            <div className='bubble-details-info-wrapper'>
                <h1 className='bubble-details-name'>{product.name}</h1>
                <p className='bubble-details-price'>{product.price} ISK</p>
                
                <p className='bubble-details-description'>{product.description}</p>
                {product.id && (
                    <CartButtons 
                        item={product} 
                        type='product'/>

                )}
                <Orders />
            </div>
        </div>
    );
}
