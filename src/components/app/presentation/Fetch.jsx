import React from 'react'
import PropTypes from 'prop-types';

function Fetch({ onClick }) {
    return (
        <div>
          <button onClick={onClick}>Get Character</button>  
        </div>
    )
}

Fetch.propTypes = {
onClick: PropTypes.func.isRequired,
}

export default Fetch;

