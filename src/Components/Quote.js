import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import loadingGif from '../images/loadingGif.gif'


export const Quote = ({ saveFave, quote, getQuote, isLoading }) => {

    const [ message, setMessage ] = useState(false);

    const passFave = (quote) => {
        saveFave(quote)
    }

    const onClick = (event) => {
        event.preventDefault();
        passFave(quote);
        setMessage(true)
        setTimeout(() => setMessage(false), 2000);
        setTimeout(() => getQuote(), 2000);
    }
    return (
        <section className='quote-container'>
            {isLoading && <article className='quote'>
                <img src={loadingGif} alt='loading animation'></img>
            </article>}
            <article className='quote'>{quote}</article>
            <div className='button-options'>
                <button className='save-to-faves' onClick={(event) => onClick(event)}>wow, that's good. save to faves.</button>
                <button className='shuffle-quote' onClick={() => getQuote()}>shuffle that scene.</button>
            {message && <div className='message-container'>
                <img src='https://img.icons8.com/fluency/48/000000/like.png' alt='heart'></img>
            </div>}
            </div>
        </section>
    )
}

Quote.propTypes = {
    message: PropTypes.bool,
    saveFave: PropTypes.func,
    quote: PropTypes.string,
    getQuote: PropTypes.func,
    isLoading: PropTypes.bool
}