import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';


export const Fave = ({favorite, id, removeFave}) => {
    return (
        <div className='fave-quote-container'>
            <button id={id} onClick={(event) => removeFave(event)} className='remove-fave' alt='X icon to remove from favorites'> X
                {/* <FontAwesomeIcon icon={faTimes} /> */}
            </button>
            <p className='fave-quote'>{favorite}</p>
        </div>
      )
}

Fave.propTypes = {
    favorite: PropTypes.string,
    id: PropTypes.number,
    removeFave: PropTypes.func
}