import React, { useState } from 'react';
import { parseDate } from  '../Utilities/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown  } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


export const Fave = ({favorite, id, removeFave}) => {
    return (
        <>
            <p className='fave-quote'>{favorite}</p>
            <button id={id} onClick={removeFave} className='remove-fave' alt='X icon to remove from favorites'/>X<button/>
        </>
      )
}