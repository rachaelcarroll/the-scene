import { useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Header } from './Header.js';
import { Quote } from './Quote';
import { Faves } from './Faves';
import { Welcome } from './Welcome';
// import { fetchQuote } from '../Utilities/apiCalls';
import PropTypes from 'prop-types';

export const App = () => {
  // const [ loading, setLoading ] = useState(true);
  // const [ error, setError ] = useState('');
  
  return (
    <>
      {/* <Header /> */}
      <main>
        <Switch>
          <Route exact path= '/welcome' component={ Welcome }/>
          <Route exact path= '/quote' component={ Quote }/>
          <Route exact path= '/faves' component={ Faves }/>
        </Switch>
      </main>
    </>
  );
}

export default App;
