import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { fetchQuote } from '../Utilities/apiCalls';


export const Quote = () => {
    const [ quote, setQuote ] = useState('');
    const [ faves, setFaves ] = useState([]);

    const getQuote = () => {
        fetchQuote()
            .then(quote => setQuote(quote))
    }

    useEffect(() => {
        getQuote()
    }, [])

    handleClick = () => {
        getQuote();
    }

    saveFave = () => {
    //prepends the favorite to the front of the list
        setFaves([quote].concat(faves))
    }

    return (
        <section className='quote-container'>
            <article>{quote}</article>
            <div className='button-options'>
                <button className='shuffle-quote' onClick={() => handleClick()}>Shuffle that scene.</button>
                <button className='save-to-faves' onClick={() => saveFave()}>Save to faves.</button>
            </div>
        </section>
    )























}