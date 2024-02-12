import './styles.css';
import { ListContainer } from '../ListContainer/ListContainer';
import { BubbleItem } from '../BubbleItem/BubbleItem';
import PropTypes from 'prop-types';

export const BubbleList= ({bubbles}) => (
    <>
        <ListContainer 
            title={"World's Best Bubbles!"} 
            content={bubbles.map(b => <BubbleItem
                key = {b.id}
                id = {b.id}
                name = {b.name}
                description = {b.description}
                price = {b.price}
                image = {b.image}
            />) }/>
    </>
);

BubbleList.propTypes = {
    bubbles: PropTypes.arrayOf(PropTypes.shape({ 
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired
}

//BubbleList is a object that holds all of the current bubbles
//bubbles is an array which holds all of the corresponding bubble items
//Each element in the array is a bubble item which has been documented in the BubbleItem.jsx file
