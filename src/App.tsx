import React, { useState } from 'react';
import { QuotesList } from './components/QuotesList';
import { QuotesForm } from './components/QuotesForms';
import QuoteData from './model/quote'
import styled from 'styled-components';

const StyledApp = styled.div`
  padding: 2em 0;
`

const App: React.FC = () => {

  const [ quotes, setQuotes ] = useState<QuoteData[]>([])

  const addQuoteHandler = (quote: QuoteData): void => {
    setQuotes(prevState => {
      return [ ...prevState, quote ]
    })
  }

  const removeQuoteHandler = (id: number): void => {
    setQuotes(prevState => {

      const filteredQuotes = prevState.filter(quote => quote.id !== id)

      return filteredQuotes;
    })
  }

  return (
    <StyledApp className='App'>

      <QuotesForm onAddQuote={ addQuoteHandler }/>
      <QuotesList quotes={quotes} onRemove={ removeQuoteHandler } />

    </StyledApp>
  );
}

export default App;
