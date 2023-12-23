import styled from "styled-components"
import QuoteData from '../model/quote'

type QuoteProps = {
    quote: QuoteData,
    onRemove: (id: number) => void
}

type QuoteListProps = {
    quotes: QuoteData[],
    onRemove: (id: number) => void
}

const StyledDiv = styled.div`
    .quotesContainer {
        margin-top: 5em;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3em;
    }
  
  .quote {
    display: flex;
    flex-direction: column;
    border-radius: 0.4em;
    padding: 2em;
    width: 35%;
    gap: 1em;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  
  .quote:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.1s;
  }
  
  .quote p {
    color: rgb(95, 94, 94);
    margin: 0;
  }
  
  .quote p:nth-child(2) {
    align-self: flex-end;
  }
`

const Quote: React.FC<QuoteProps> = ({ quote, onRemove }) =>{

    return(
        <StyledDiv className='quote' onClick={ onRemove.bind(null, quote.id) }>
            <p>{ quote.body }</p>
            <p>- { quote.author }</p>
        </StyledDiv>
    )

}

export const QuotesList: React.FC<QuoteListProps> = ({ quotes, onRemove }) =>{

    const AllQuotes = quotes.map(quote => {
        return <Quote quote={quote} key={quote.id} onRemove={onRemove}/>
    }) 

    return (
        <StyledDiv className='quotesContainer'>
            { AllQuotes }
        </StyledDiv>
    )
}