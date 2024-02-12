import React from 'react';
import PropTypes from 'prop-types';


const Container = ({ children }) => <div className="container container-custom">{ children }</div>;

export default Container;


Container.propTypes = {
    children: PropTypes.object.isRequired
}

//Children is an object which holds the children html elements that need to be rendered in the container