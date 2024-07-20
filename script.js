const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

// for loader
function loading(){
    loader.hidden  = false;
    quoteContainer.hidden = true;
}

// for quoteContainer
function complete(){
    quoteContainer.hidden = false;  
    loader.hidden  = true;
}

let apiQuotes = [];


// for displaying quotes
 function newQuote() {
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
     
    if(!quote.author){
        authorText.textContent ='Unknown'
    }
    else{
        author.textContent = quote.author;
    }
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }

    
    quoteText.textContent = quote.text;
    complete();
 }

// for getting quotes from api 
async function getQuotes(){
    loading();
    const apiUrl ='https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
      newQuote();
    }
    catch(error){

    }
}

// for twitter 
 function tweetQuote(){
    const twitterUrl =` https://twitter.com/intent/tweet?text= ${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
 }

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();
