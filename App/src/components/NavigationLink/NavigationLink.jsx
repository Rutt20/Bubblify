import './styles.css';
import CartImg from '../../resources/images/cart.png'
import PropTypes from 'prop-types';

export const NavigationLink = ({
    title,
    href
}) => {
    if(title == 'Cart'){
        return (
            <>
                <li className='nav-link'>
                    <a href={href}>
                        <img id='cart-icon' alt='Cart' src={CartImg}/>
                    </a>
                </li>
            </>
        )
    }
    else {
        return (
            <>
                <li className='nav-link'>
                    <a href={href}>{title}</a>
                </li>
            </>
        )
    }
}

NavigationLink.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}

//Title is of the data type string and is used to distinguish the type of the navigation link
//Href is of the data type string and is used to distinguish the link to where the user should be navigated
   