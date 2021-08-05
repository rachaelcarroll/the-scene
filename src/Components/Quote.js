import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
// import { fetchQuote } from '../Utilities/apiCalls';


export const Quote = ({faves, saveFave}) => {
    const [ quote, setQuote ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState('');

    const getQuote = async () => {
        const url = 'https://binaryjazz.us/wp-json/genrenator/v1/story/1'
        try {
            let response = await fetch(url)
            const quote = await response.json()
            setQuote(quote)
            setIsLoading(false)
            console.log("FETCHED", quote)
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        getQuote()
    }, [])

    const handleClick = () => {
        getQuote();
    }

    // const saveFave = (e) => {
    //     e.preventDefault()
    // //prepends the favorite to the front of the list
    //     setFaves([quote].concat(faves))
    //     console.log(faves)
    // }

    return (
        <section className='quote-container'>
            <article>{quote}</article>
            <div className='button-options'>
                <button className='shuffle-quote' onClick={() => handleClick()}>Shuffle that scene.</button>
                <button className='save-to-faves' onClick={() => saveFave(quote)}>Save to faves.</button>
            </div>
        </section>
    )

}