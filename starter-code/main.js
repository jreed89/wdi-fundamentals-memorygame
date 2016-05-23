var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
    alert("Sorry, try again.")
}
if (cardTwo === cardThree) {
	alert("Sorry, try again.")
}
if (cardOne === cardThree) {
	alert("Sorry, try again.")
}
if (cardOne === cardFour) {
	alert("Sorry, try again.")
}
if (cardOne === cardTwo) {
	alert("You found a match")
}
if (cardThree === cardFour) {
	alert("You found a match")
}
var win = document.createElement("game-board");
 for(var i = 0; i < card; i++){ 
        var board = document.getElementById("div");
        board.className = "card";
        win.appendChild(board);
    }

var createBoard = function() {
	for(var i = createBoard; i < 4; i++) {
		card = document.getElementById("div");
		document.className = "card";
		card.appendChild(board);
	}
var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = []

for (var i = 0; i< cards.length; i++) {
cardElement.setAttribute('data-card', cards[i]);
}
for (var i=0; i<cards.length; i++) {
    cardElement.addEventListener('click', isTwoCards)
    cardElement.innerHTML = '<img src="Spades 13.png" alt="King of Spades" />';
    cardElement.innerHTML = '<img src="Spades 12.png" alt="Queen of Spades" />';
    cardElement.innerHTML = '<img src="Clubs 13.png" alt="King of Clubs" />';
    cardElement.innerHTML = '<img src="Clubs 12.png" alt="Queen of Clubs" />';
}
var isMatch = function ()
var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
	if cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	if isMatch ();
		document.cardElement(".card")removeAttribute(innerHTML)
	}
}
