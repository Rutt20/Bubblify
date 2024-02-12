import './styles.css';
import { ListContainer } from '../ListContainer/ListContainer';
import { BundleItem } from '../BundleItem/BundleItem';
import PropTypes from 'prop-types';

export const BundleList = ({bundles}) => {
    return (
        <>
            <ListContainer 
                title={"Amazing Bundles!"}
                content={bundles.map(b => <BundleItem
                    key = {b.id}
                    id = {b.id}
                    name = {b.name}
                    items = {b.items}
                />) }
            />
        </>
    );
};

BundleList.propTypes = {
    bundles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired
        }))
    }))
}

//Bundles is an array of BundleItem objects and the BundleItem has an array of BubbleItems
//Both the BundleItem and BubbleItem objects have been documented in BundleItem.jsx and BubbleItem.jsx files