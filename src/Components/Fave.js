import React from 'react';
import { FiX } from "react-icons/fi";
import PropTypes from 'prop-types';


export const Fave = ({favorite, id, removeFave}) => {
    return (
        <>
            <p className='fave-quote'>{favorite}</p>
            <button id={id} onClick={(event) => removeFave(event)} className='remove-fave' alt='X icon to remove from favorites'>
                <FiX />
            </button>
        </>
      )
}

Fave.propTypes = {
    favorite: PropTypes.string,
    id: PropTypes.number,
    removeFave: PropTypes.func
}