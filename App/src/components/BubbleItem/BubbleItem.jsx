import './styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BubbleItem = ({
    id,
    name,
    description,
    price,
    image
}) => {
    return (
        <div className='bubble-item-wrapper'>
            <div className='bubble-item-highlight'></div>
            <img className='bubble-item-img' src={image}/>
            <h1 className='bubble-item-name'>{name}</h1>
            <button className='bubble-item-button'>
                <Link to={`/bubbles/${id}`}>
                    Details
                </Link>
            </button>
        </div>
    );
};

BubbleItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}

//id has the data type number and is used as a unique identifier for the bubble item
//name has the data type string and holds the name for a particular bubble item
//description has the data type string and holds the description for a particular bubble item
//price has the the data type number and holds the price for a particular bubble item
//image has the data type string and holds the url to the image for a particular bubble item