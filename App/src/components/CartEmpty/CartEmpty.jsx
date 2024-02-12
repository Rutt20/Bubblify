import './styles.css';

export const CartEmpty = () => (
    <div className='empty-cart-container'>
        <h2 className='empty-cart-title'>
            Oh no your cart is empty
        </h2>
        <p className='empty-cart-text'>
            Pop on over to our products to fill it with some bubbly fun
        </p>
    </div>
);