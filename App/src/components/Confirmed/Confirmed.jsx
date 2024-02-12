import './styles.css';
import { Link } from 'react-router-dom';

export const Confirmed = () => (
    <div className='confirmed-container'>   
        <div className='confirmed-content'>
            <div className='confirmed-highlight'></div>
            <p className='confirmed-title'>Hurray!</p>
            <p className='confirmed-text'>Bubble-tastic your order has been placed!</p>
            <button className='confirmed-button'>
                <Link to={`/bubbles`}>
                    Explore More
                </Link>
            </button>

        </div>
    </div>
    
);
