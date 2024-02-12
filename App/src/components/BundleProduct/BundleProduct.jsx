import './styles.css';
import PropTypes from 'prop-types';

export const BundleProduct = ({
    img,
    name,
    description
}) => (
    <div className='bundle-product-container'>
        <div className='product-image-container'>
            <img src={img} className='product-image'/>
        </div>
        <div className='product-text-container'>
            <h2 className='product-name'>{name}</h2>
            <p className='product-description'>{description}</p>
        </div>
    </div>
);

BundleProduct.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

//img is of the data type string and is used to keep the url to the image for the BundleProduct
//name is of the data type string and holds the name of the BundleProduct
//description is of the data type string and holds the description for the BundleProduct