import React from 'react';
import { NavLink } from 'react-router-dom';

export const Welcome = () => {

    return (
        <>
        <article className='welcome-container'>
            <h1 className='welcome'>Welcome to <i>the scene...</i></h1>
            <p className='welcome-intro'>We take the effort out of sounding <i>hip</i> in the music scene.</p>
            <p className='welcome-question'>Ready to spark up a convo?</p>
            <NavLink to= '/quote'>
                <button className='go-to-quote'>click here</button>
            </NavLink>
        </article>
        </>
    )
}