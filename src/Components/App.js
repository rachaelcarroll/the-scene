import { useEffect, useState } from 'react';
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

  const saveFave = (quote) => {
    // e.preventDefault()
  //prepends the favorite to the front of the list
    if(!faves.includes(quote)){
      setFaves(faves.concat(quote))
      console.log(faves)
    }
  }

  // useEffect(() => {
  //     saveFave()
  // }, [])

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path= '/' component={ Welcome }/>
          <Route exact path= '/quote' render={() => 
          <Quote 
            saveFave={saveFave}
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
