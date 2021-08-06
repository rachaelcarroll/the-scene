import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';


export const Quote = ({ saveFave, quote, getQuote }) => {

    const passFave = (quote) => {
        console.log("QUOTE!!", quote)
        saveFave(quote)
    }
    return (
        <section className='quote-container'>
            <article className='quote'>{quote}</article>
            <div className='button-options'>
                <button className='shuffle-quote' onClick={() => getQuote()}>Shuffle that scene.</button>
                <button className='save-to-faves' onClick={() => passFave(quote)}>Save to faves.</button>
            </div>
        </section>
    )
}

Quote.propTypes = {
    saveFave: PropTypes.func,
    quote: PropTypes.string,
    getQuote: PropTypes.func
}