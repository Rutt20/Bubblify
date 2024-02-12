import './styles.css';
import PropTypes from 'prop-types';


export const BundleBubble = ({title}) => (
    <div className='bundle-bubble-container'>
        <div className='bundle-bubble-highlight'></div>
        <h1  className='bundle-bubble-title'>{title}</h1>
    </div>
);

BundleBubble.propTypes = {
    title: PropTypes.string.isRequired,
}

//Title has the data type string and holds the title for the BundleBubble