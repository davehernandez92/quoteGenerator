const diceBtn = document.querySelector(".dice");
const text = document.querySelector('.advice');
const authorTxt = document.querySelector('.author');
const quoteNumber = document.querySelector('#number');

diceBtn.addEventListener('click', getQuote);

const quotes = [
	{ 
		"quote" : "The only sin is ignorance", 
		"source" : "Christopher Marlowe" 
	},
	{
		"quote" : "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true", 
		"source" : "Demosthenes"
	},
	{
		"quote" : "A lie can travel halfway around the world while the truth is putting on its shoes", 
		"source" : "Mark Twain"
	},
	{
		"quote" : "Great minds discuss ideas; average minds discuss events; small minds discuss people", 
		"source" : "Eleanor Roosevelt"
	},
	{
		"quote" : "If you have a garden and a library, you have everything you need", 
		"source" : "Marcus Tullius Cicero"
	},
	{
		"quote" : "Truth comes out in wine", 
		"source" : "Pliny the Elder"
	},
	{
		"quote" : "Everything in the universe is within you. Ask all from yourself", 
		"source" : "Rumi"
	},
	{
		"quote" : "When I get a little money I buy books; and if any is left I buy food and clothes", 
		"source" : "Desiderius Erasmus"
	}
]

function getQuote() {
    lights();
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteNumber.textContent = quotes.indexOf(random) +1 ;   
    text.textContent = random.quote;
    authorTxt.textContent = random.source;
    

}

function lights() {
    const button = document.querySelector('.dice');
    button.classList.add('clicked');
    setTimeout(() => {
        
        button.classList.remove('clicked');
    }, 150);
    
}