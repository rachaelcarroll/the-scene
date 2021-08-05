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

    const handleClick = (e) => {
        e.preventDefault()
        getQuote();
    }

    const saveFave = (e) => {
        e.preventDefault()
    //prepends the favorite to the front of the list
        setFaves([quote].concat(faves))
    }

    return (
        <section className='quote-container'>
            <article>{quote}</article>
            <div className='button-options'>
                <button className='shuffle-quote' onClick={(e) => handleClick(e)}>Shuffle that scene.</button>
                <button className='save-to-faves' onClick={(e) => saveFave(e)}>Save to faves.</button>
            </div>
        </section>
    )

}