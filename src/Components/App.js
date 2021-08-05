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
  const [ faves, setFaves ] = useState([]);
  
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path= '/' component={ Welcome }/>
          <Route exact path= '/quote' render={() => 
          <Quote 
            faves={faves}
          />
          }/>
          <Route exact path= '/faves' render={() =>
          <Faves 
            faves={faves}
          />
          }/>
        </Switch>
      </main>
    </>
  );
}

export default App;
