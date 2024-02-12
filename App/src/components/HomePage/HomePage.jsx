import './styles.css';
import { Background } from '../Background/Background';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div className='homepage'>
            <Background />
            <h1 className='homepage-title' >Welcome to Bubblify</h1>
            <h1 className='homepage-subtitle'>Be careful not to burst your bubble</h1>
            <button className='homepage-button'>
                <Link to='/bubbles'>
                    Explore Bubbles
                </Link>
            </button>
        </div>
    )
}
