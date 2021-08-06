import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
// import { fetchQuote } from '../Utilities/apiCalls';


export const Quote = ({ saveFave, quote, getQuote }) => {

    const passFave = (quote) => {
        console.log("QUOTE!!", quote)
        saveFave(quote)
    }
    return (
        <section className='quote-container'>
            <article>{quote}</article>
            <div className='button-options'>
                <button className='shuffle-quote' onClick={() => getQuote()}>Shuffle that scene.</button>
                <button className='save-to-faves' onClick={() => passFave(quote)}>Save to faves.</button>
            </div>
        </section>
    )
}