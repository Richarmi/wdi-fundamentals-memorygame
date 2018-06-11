//console.log("Up and running!");

/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];

var cardsInPlay = [];

var checkForMatch = function(card) {
		if(cardsInPlay[cardId] === cardsInPlay[cardsId + 1])
			alert("You found a match!");
		else
			alert("Sorry, try again.");
}

var flipCard = function() {
	cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	
	cardId.setAttribute('src', this.cardImage).appendChild();
	if(cardsInPlay.length === 2)
		checkForMatch();
}

var creatBoard = function() {
	for (var i = 0; i < arrayName.length; i++)
	{
		var cardElement = document.createElement('img');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener(click, flipCard);
	}
}







creatBoard();