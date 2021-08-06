import { useEffect, useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Header } from './Header.js';
import { Quote } from './Quote';
import { FavesContainer } from './FavesContainer';
import { Welcome } from './Welcome';
// import { fetchQuote } from '../Utilities/apiCalls';
import PropTypes from 'prop-types';

export const App = () => {
  // const [ loading, setLoading ] = useState(true);
  // const [ error, setError ] = useState('');
  // const defaultValue = []
  const [ faves, setFaves ] = useState([]);
  const [ quote, setQuote ] = useState('');
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState('');

    const getQuote = async () => {
        const url = 'https://binaryjazz.us/wp-json/genrenator/v1/story/1'
        try {
            let response = await fetch(url)
            const quote = await response.json()
            setIsLoading(false)
            console.log("FETCHED", quote)
            return setQuote(quote)
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        getQuote()
    }, [])
 
    const saveFave = (faveQuote) => {
    
      console.log("FAVES ARRAY BEFORE >>>", faves)
      console.log("THE QUOTE??", faveQuote)
      setFaves([faveQuote].concat(faves))
      // if (!faves.includes(faveQuote)){
      // setFaves(faves => [...faves, faveQuote])
      console.log("AFTER ARRAY>>>", faves)
    }

    const removeFave = (event) => {
      console.log("EVENT REMOVE", event)
      console.log("THESE ARE THE FAVES BEFORE REMOVING", faves)
      const updatedFaves = faves.filter((quote, i) => {
        if(i !== parseFloat(event.target.id)) {
          return quote
        }
      })
      console.log("UPDATED FAVES",updatedFaves)
      setFaves(updatedFaves)
      console.log("AFTER REMOVE>>>>", faves)
    }


  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path= '/' component={ Welcome }/>
          <Route exact path= '/quote' render={() => 
          <Quote 
            saveFave={saveFave}
            quote={quote}
            getQuote={getQuote}
          />
          }/>
          <Route exact path= '/faves' render={() =>
          <FavesContainer 
            faves={faves}
            removeFave={removeFave}
          />
          }/>
        </Switch>
      </main>
    </>
  );
}

export default App;
