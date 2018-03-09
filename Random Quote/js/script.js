//Quotation Array
var quotes = [
    {quote: 'Children do what feels good, adults devise a plan and follow it',
    source: 'Dave Ramsey',
    tags: 'Money Tips',
      },
   {quote: 'In the End, we will remember not the words of our enemies, but the silence of our friends.',
   source: 'Martin King Luther',
   tags: 'Black History',
   citation: 'Letter from a Birmingham Jail',
   year: '1963'
  },
  {quote: 'Remind yourself, nobody’s built like you. You design yourself',
   source: 'Jay-Z',
   tags: 'HipHop',
   citation: 'Blueprint 2',
   year: '2002'
 },
  {quote: 'When dealing with people remember you are not dealing with creatures of logic, but creatures of emotion.',
  source: 'Dale Carnegie',
  tags: "Self Improvement",
  citation: 'How to win Friends and Influence People',
  year:'1936'
},
  {quote: 'The Best revenge is massive success',
  source: 'Frank Sinatra',
  tags: "Success"
},
  {quote: 'All life is an experiment. The more experiments you make the better.',
  source: 'Ralph Waldo Emerson',
   tags: "Self Improvement",
 }
];

//Random background color Generator
function getRandomColor () {
  var hex = Math.floor(Math.random() * 0xFFFFFF); //Gets a random number that is a good length
  var randomColor = "#" + ("000000" + hex.toString(16)).substr(-6); //Converts to hexadecimal and stores color in variable
  document.body.style.background = randomColor;
}

// function for selecting a random number
function getRandomQuote() {
var randomNum = Math.floor(Math.random()* quotes.length); //Random Number Generator
var randomQuote = quotes[randomNum];//Stores Random Number
  return randomQuote;
}
//Gets Random Quote and Prints it
function printQuote() {
  var randomQ = getRandomQuote();
    var comQuote = document.getElementById('quote-box');

    //If no citation or year defined create this innerHTML
    if (typeof randomQ.citation === "undefined" && typeof randomQ.year === "undefined") {
            comQuote.innerHTML = '<p class="quote">' + randomQ.quote + '</p>' + '<p class="source">' + randomQ.source + '<span class=" tags">' + randomQ.tags + '</span>';

    //If no year defined create this innerHTML
        } else if (typeof randomQ.year !== "undefined" && typeof randomQ.citation === "undefined"){
        comQuote.innerHTML = '<p class="quote">' + randomQ.quote + '</p>' + '<p class="source">' + randomQ.source + '<span class=" tags">' + randomQ.tags + '</span>' + '<span class="year">' + randomQ.year + '</span></p>';

    //If no citation defined create this innerHTML
      } else if (typeof randomQ.citation !== "undefined" && typeof randomQ.year === "undefined") {
        comQuote.innerHTML = '<p class="quote">' + randomQ.quote + '</p>' + '<p class="source">' + randomQ.source + '<span class=" tags">' + randomQ.tags + '</span>' + '<span class="citation">' + randomQ.citation + '</span>';

    //Prints all the properties is none undefined
  } else {
    comQuote.innerHTML = '<p class="quote">' + randomQ.quote + '</p>' + '<p class="source">' + randomQ.source + '<span class=" tags">' + randomQ.tags + '</span>' + '<span class="citation">' + randomQ.citation + '</span>' + '<span class="year">' + randomQ.year + '</span></p>';
  }
  getRandomColor (); //Calls random background color function
}
// the quotes page will refresh every 10 seconds
setInterval(printQuote, 10000);


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
