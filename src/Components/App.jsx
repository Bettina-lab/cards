import React, { useState } from 'react';
import Cards from './Cards';
import Header from './Header';
import Footer from './Footer';
import quotes from '../quotes';

function App() {

const [quotesArr, setQuotes] = useState([]);



function addQuotes(newQuotes) {
  let randomNum = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNum];

  setQuotes(prev =>{
    return [...prev, randomQuote];
  });
  
}


function deleteCards(id) {
  setQuotes(prev => { 
    return  prev.filter((item, index) => {
    return index!==id;
    
    })
  })
}



  return (
    <div className="container">
      <Header/>
      <div className="cards-container">
        {quotesArr.map((quoteItem,index) => ( 
          <Cards
             id={index}
            key = {quoteItem.key}
            quote = {quoteItem.quote}
            author = {quoteItem.author}
            onClicked ={deleteCards}
          />
         ))}
      
        <div className="add-btn" onClick={addQuotes}>ADD MORE</div>
       </div>
      <Footer/>
    </div>
  );
}

export default App;
