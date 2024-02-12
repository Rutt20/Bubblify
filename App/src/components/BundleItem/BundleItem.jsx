import './styles.css';
import PropTypes from 'prop-types';
import { BundleBubble } from '../BundleBubble/BundleBubble';
import { Link } from 'react-router-dom';

export const BundleItem = ({
    id,
    name,
    items
}) => {
    return (
        <div className='item-wrapper'>
            <div id={`image-wrapper-${id}`}>
                {items.map(i => <BundleBubble 
                    key = {i.id}
                    title = {i.name}/>)
                }
            </div>
            
            <div className='bundle-text-wrapper'>
                <h1 className='item-name'>{name}</h1>
                <button className='item-button'>
                    <Link to={`/bundles/${id}`}>
                        Details about Bundle
                    </Link>
                </button>
            </div>
        </div>
    );
};

BundleItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    }))
}

//Id is of the data type number and is the unique identifier for the BundleItem
//Name is of the data type string and holds the name for the BundleItem
//Items is a array which holds all of the BubbleItems that belong to this BundleItem, 
//each element in the array is a BubbleItem object which has been documented in the BubbleItem.jsx file
