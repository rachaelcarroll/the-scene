import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './Header.js';
import { Quote } from './Quote';
import { FavesContainer } from './FavesContainer';
import { Welcome } from './Welcome';
import { fetchQuote } from '../Utilities/apiCalls';
import PropTypes from 'prop-types';

export const App = () => {
  const [ faves, setFaves ] = useState([]);
  const [ quote, setQuote ] = useState('');
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState('');

  const getQuote = async () => {
    setIsLoading(true)
    setError('')
    setQuote('')
    try {
        let quote = await fetchQuote()
        setIsLoading(false);
        setQuote(`"${quote}"`)
      } catch (error) {
        setError(error.message)
        setIsLoading(false);
    }
  }

  useEffect(() => {
    getQuote();
  }, [])

  const saveFave = (faveQuote) => {
    if(!faves.includes(faveQuote)){
      setFaves([faveQuote].concat(faves))
    }
  }

  const removeFave = (event) => {
    const updatedFaves = faves.filter((quote, i) => {
      if(i !== parseFloat(event.target.id)) {
        return quote
      }
    })
    setFaves(updatedFaves)
  }


  return (
      <main>
        <Switch>
          <Route exact path= '/' component={ Welcome }/>
          {error && !isLoading && <h2 className='error'>{error}</h2>}
          <Route exact path= '/quote' render={() => 
            <>
            <Header 
              getQuote={getQuote}
              faves={faves}
            />
            <Quote 
              isLoading={isLoading}
              saveFave={saveFave}
              quote={quote}
              getQuote={getQuote}
            />
            </>
          }/>
          <Route exact path= '/faves' render={() =>
            <>
            <Header 
              getQuote={getQuote}
              faves={faves}
            />
            <FavesContainer 
              faves={faves}
              removeFave={removeFave}
            />
            </>
          }/>
        </Switch>
      </main>
  );
}

App.propTypes = {
  quote: PropTypes.string,
  faves: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  getQuote: PropTypes.func,
  saveFave: PropTypes.func,
  removeFave: PropTypes.func
}
