// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//create quote array
var quotes = [
    {
        quote: 'You can do anything but not everything',
        source:'David Allen',
        citation:'Making It All Work',
        year:'2009'
    },
    {
        quote: 'Reality is merely an illusion, albeit a very persistent one. ',
        source:'Albert Einstein',
        citation:'BrainyQuote',
        year:'1950'
        
    },
    {
        quote: 'I love you more than my skin.',
        source:'Frida Kahlo',
        citation:'Brainyquote',
        year:'1970'
    }
];

//randomly generate a number
function getRandomQuote(array){
    var length = array.length;
    var random = Math.floor(Math.random() * length);
    return array[random];
}

function printQuote(){
    //get the random quote object from the array
    var randomQuote = getRandomQuote(quotes);
    //build the message 
    var messageHTML = '<p class="quote">' + randomQuote["quote"] + '</p>';
    messageHTML += '<p class="source">' + randomQuote["source"];
    messageHTML += ' <span class="citation">'+ randomQuote["citation"] + '</span>';
    messageHTML += ' <span class="year">' + randomQuote["year"] + '<span> </p>';   
    var message = document.getElementById('quote-box');
    message.innerHTML = messageHTML;
}
    
    
    
    
    
    