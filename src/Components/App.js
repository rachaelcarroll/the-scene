import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './Header.js';
import { Quote } from './Quote';
import { FavesContainer } from './FavesContainer';
import { Welcome } from './Welcome';

export const App = () => {
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
            return setQuote(quote)
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        getQuote()
    }, [])
 
    const saveFave = (faveQuote) => {
      if(!faves.includes(faveQuote)){
        setFaves([faveQuote].concat(faves))
      }
      // console.log(hasFaves())
      // hasFaves()
    }

    const removeFave = (event) => {
      const updatedFaves = faves.filter((quote, i) => {
        if(i !== parseFloat(event.target.id)) {
          return quote
        }
      })
      setFaves(updatedFaves)
    }

    const bounceHeart = () => {
      const faveClass = [".has-fave"];
      faveClass.push(".bounce")
    }
    // faves.length ? document.querySelector('.has-faves').className.add = 'bounce' : document.querySelector('.fave-btn').className.add = 'bounce'

  return (
      <main>
        <Switch>
          <Route exact path= '/' component={ Welcome }/>
          <Route exact path= '/quote' render={() => 
          <>
          <Header 
            getQuote={getQuote}
            // hasFaves={hasFaves}
            faves={faves}
          />
          <Quote 
            saveFave={saveFave}
            quote={quote}
            getQuote={getQuote}
            bounceHeart={bounceHeart}
          />
          </>
          }/>
          <Route exact path= '/faves' render={() =>
          <>
          <Header 
            getQuote={getQuote}
            // hasFaves={hasFaves}
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

export default App;
