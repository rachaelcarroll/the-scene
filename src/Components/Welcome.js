import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Welcome = () => {

    return (
        <>
        <article className='welcome-container'>
            <h1 className='welcome'>Welcome to <i>the scene...</i></h1>
            <p>We take the effort out of sounding <i>hip</i> in the music scene.</p>
            <p>Ready to spark up a convo?</p>
            <NavLink to= '/quote'>
                <button>click here</button>
            </NavLink>
        </article>
        </>
    )

}