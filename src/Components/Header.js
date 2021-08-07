import { getQueriesForElement } from '@testing-library/react';
import React from 'react';
import { Route, NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = ({ getQuote }) => {

    return (
        <nav>
            <NavLink to = '/'>
                <header>
                    <h1>TS</h1>
                </header>
            </NavLink>
            <div className='nav-btns'>
            <Route exact path='/quote' render={() => 
                <NavLink to ='/faves'>
                    <button className='fave-btn'>Faves</button>
                </NavLink>
            } />
            <Route exact path='/faves' render={() => 
                <NavLink to='/quote'>
                    <button className='return-to-home' onClick={() => getQuote()}>Back to Home</button>
                </NavLink>
            } />
            </div>
        </nav>
    )
}
