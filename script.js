const quoteContainer = document.getElementById('quote-container');
const message = document.getElementById('quote');
const author = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
//const loader = document.getElementById('loader');


//Show loading

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide loading

function complete (){
    if (!loader.hidden){
        quoteContainer.hidden =false;
        loader.hidden = true;
    }
}

//Get quote from API
function getQuote(){
    loading();
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
    .then(data => data.json())
    .then(data => {
        message.innerHTML = data.message
        author.innerHTML = 'TRUMP'
    })

    //loading();
    // const apiURL = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
    // try {
    //     const response = await fetch(apiURL);
    //     const data = await response.json();
    //     // If Author is blank add unknown
    //     if (data.author === ''){
    //         authorText.innerText = 'TRUMP';
    //     } else {
    //         authorText.innerText = data.quoteAuthor;
    //     }
    //     // Reduce font size for long quotes 
    //     if( data.message.length > 120) {
    //         quoteText.classList.add('long-quote');

    //    } else {
    //        quoteText.classList.remove('long-quote');
    //    }
    //     quoteText.innerText = data.message;
        //Stop loader, show  quote
        complete();
}


// tweet quote
function tweetQuote(){
    const quote = message.innerText;
    const author = 'Trump';
    const twitterURL = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterURL, '_blank');
}

// event listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);


//On Load

getQuote();
