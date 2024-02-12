import './styles.css';
import PropTypes from 'prop-types';

export const ListContainer= ({
    title,
    content
}) => (
    <div className='list-wrapper'>
        <div className='list-title-container'>
            <h1 className='list-title'>{title}</h1>
        </div>
        {content}
    </div>
);

ListContainer.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired
}

//Title is of data type string and is used as a title to describe what items are being listed in the container
//Content is an array of Item objects that are being listed, these could be BubbleItems or CartItems