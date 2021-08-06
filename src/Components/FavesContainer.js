import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';


export const FavesContainer = ({faves}) => {

    const faveQuote = faves.map(fave => {
        return (
            <Fave singleFave={fave}/>
        )
    })


    return (
        <article className='fave-quote'>
            <p>{faveQuote}</p>
        </article>
    )

}

FavesContainer.propTypes = {
    faves: PropTypes.array
}