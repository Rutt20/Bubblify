import './styles.css';
import PropTypes from 'prop-types';

export const Input = ({
    id,
    title,
    type,
    handleOnInput
}) => (
    <div className='input-container'>
        <p className='label-input'>{title}</p>
        <input 
            id={id}
            className='input-style'
            type={type}  
            onInput={() => handleOnInput(id)}/>
    </div>
);

Input.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    handleOnInput: PropTypes.func.isRequired
}
//Id is of the data type number and is used as a unique identifier for the input
//Title is of the data type string and is used as a title for the input element to label the input box
//Type is of the data type string and is used to specifiy the type of the input element
//HandleOnInput is a function that is called OnInput for the input element
