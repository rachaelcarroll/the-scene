import React, { useState } from 'react';
import { parseDate } from  '../Utilities/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faChevronCircleDown  } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


export const Fave = ({favorite, id}) => {
    return (
        <>
            <p className='fave-quote'>{quote}</p>
            <img id={id} onClick={removeFromFavorites} className='trash-icon' src={trashCanIcon} alt='trash can icon to remove from favorites'/>
        </>
      )
}