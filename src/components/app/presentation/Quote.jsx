import React from 'react';
import PropTypes from 'prop-types';

function Quote({ image, name, text }) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>{text}</p>
        </div>
    )
}

Quote.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Quote;

