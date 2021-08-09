import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Header = ({ getQuote, faves }) => {

    return (
        <nav>
            <NavLink to = '/'>
                <header>
                    <h1 className='header'><i>the</i>scene</h1>
                </header>
            </NavLink>
            <div className='nav-btns'>
            <Route exact path='/quote' render={() => 
                <NavLink to ='/faves'>
                    <button className={faves.length ? 'has-faves' : ''}>faves</button>
                </NavLink>
            }/>
            <Route exact path='/faves' render={() => 
                <NavLink to='/quote'>
                    <button className='return-to-home' onClick={() => getQuote()}>back to home</button>
                </NavLink>
            }/>
            </div>
        </nav>
    )
}

Header.propTypes = {
    getQuote: PropTypes.func,
    faves: PropTypes.array
}
