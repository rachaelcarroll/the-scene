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
        <>
        {!faveQuote.length && <h2 className='no-faves-yet'>You don't have any faves yet. Start shufflin'!</h2>}
        <article className='all-fave-quotes'>
            {faveQuote}
        </article>
        </>
    )

}

FavesContainer.propTypes = {
    faves: PropTypes.array
}