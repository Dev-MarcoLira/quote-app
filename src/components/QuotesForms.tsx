import styled from "styled-components"
import QuoteData from '../model/quote'
import { useRef } from "react"

const StyledDiv = styled.form`
    .quotesForm {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }
  
  .inputSection {
    display: flex;
    flex-direction: column;
    width: 30%;
  }
  
  .inputSection label {
    margin-bottom: 0.5em;
    font-family: sans-serif;
    color: rgb(56, 56, 56);
  }
  
  .inputSection input {
    height: 2em;
    border: none;
    border-bottom: 1px solid rgb(102, 180, 170);
    color: rgb(56, 56, 56);
  }
  
  .inputSection input:focus {
    outline: none;
  }
  
  .inputSection textarea {
    outline: none;
    resize: none;
    font-family: sans-serif;
    padding: 0.5em 0.5em;
    border: 1px solid rgb(102, 180, 170);
    border-radius: 0.4em;
    height: 5em;
    color: rgb(56, 56, 56);
  }
  
  .quotesForm button {
    width: 5em;
    height: 2em;
    border: 1px solid rgb(102, 180, 170);
    background-color: rgb(102, 180, 170);
    color: white;
  }
  
  .quotesForm button:hover {
    cursor: pointer;
    background-color: rgb(127, 211, 200);
  }
`

type QuotesFormProps = {
    onAddQuote: (quote: QuoteData) => void
}

export const QuotesForm: React.FC<QuotesFormProps> = ({ onAddQuote }) =>{
    
    const authorRef = useRef<HTMLInputElement>(null)
    const quoteRef = useRef<HTMLTextAreaElement>(null)

    const addButtonClickHandler = (event: React.FormEvent) =>{
        event.preventDefault()

        const quote = new QuoteData(
            Math.floor(Math.random() * 100000 + 1),
            quoteRef.current? quoteRef.current.value : '',
            authorRef.current ? authorRef.current.value : ''
        )

        onAddQuote(quote)
    }
    
    return (
        <StyledDiv className="quotesForm" onSubmit={ addButtonClickHandler }>
            <div className='inputSection'>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" placeholder="Name" ref={authorRef}/>
            </div>

            <div className="inputSection">
                <label htmlFor="quote">Quote</label>
                <textarea id="quote" name="quote" placeholder="Quote body" ref={quoteRef}/>
            </div>

            <button type="submit">Add</button>
        </StyledDiv>
    )
}