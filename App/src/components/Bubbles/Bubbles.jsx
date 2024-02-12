import './styles.css';
import { useContext } from 'react';
import { BubbleList } from '../BubbleList/BubbleList';
import { BubblesContext } from '../../context/BubblesContext';


export const Bubbles = () => {
    const { products } = useContext(BubblesContext);
    return (
        <div className='bubbles-container'>
            <BubbleList bubbles={ products }/>
        </div>
    );
};