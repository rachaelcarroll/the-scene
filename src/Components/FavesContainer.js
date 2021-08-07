import React from 'react';
import { Fave } from './Fave';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';


export const FavesContainer = ({faves, removeFave}) => {

    const faveQuote = faves.map((fave, i) => {
        return (
            <Fave 
            key={i}
            id={i}
            favorite={fave}
            removeFave={removeFave}
            />
        )
    })

    return (
        <article className='fave-quotes'>
            {faveQuote}
        </article>
    )

}

FavesContainer.propTypes = {
    faves: PropTypes.array
}