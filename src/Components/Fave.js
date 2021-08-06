import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const Fave = ({favorite, id, removeFave}) => {
    return (
        <>
            <p className='fave-quote'>{favorite}</p>
            <button id={id} onClick={removeFave} className='remove-fave' alt='X icon to remove from favorites'/>X<button/>
        </>
      )
}

Fave.propTypes = {
    favorite: PropTypes.string,
    id: PropTypes.number,
    removeFave: PropTypes.func
}