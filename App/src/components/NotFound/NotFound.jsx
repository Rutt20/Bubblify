import './styles.css';
import { Link } from 'react-router-dom';

export const NotFound = () => (
    <div className='notfound-container'>
        <h1 className='notfound-title'>OH NO! you burst the bubble</h1>
        <button className='notfound-button'>
            <Link to={'/'}>
                Back to Home Page
            </Link>
        </button>
    </div>
);