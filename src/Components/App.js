import { useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Header } from './Header.js';
import { Quote } from './Question';
import { Faves } from './QuestionBoard';
import { Welcome } from './QuestionDetails';
import { fetchQuote } from '../Utilities/apiCalls';
import PropTypes from 'prop-types';

export const App = () => {
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState('');
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
