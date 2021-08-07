import React from 'react';
import { FiX } from "react-icons/fi";
import PropTypes from 'prop-types';


export const Fave = ({favorite, id, removeFave}) => {
    return (
        <div className='fave-quote-container'>
            <button id={id} onClick={(event) => removeFave(event)} className='remove-fave' alt='X icon to remove from favorites'>
                <FiX />
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