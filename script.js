/* console.log("Brasil HEXA campeao"); */
 /* Javascript steps:
 1- add event listerns to the cards
 2- make the flip once clicked
 3-not possible to click in the same pic twice in a row
 4- switch player every two cards clickes 
 5- flip last two cards once hide button was clicked
 6- count pair matches
 7- winning conditionals
 8- restart button unflips all cards at once and restart players count
 9- display winning message*/

 // Flipping images (is away too repetitive ask for help)*/


// Assigning variables for later use:

 let cardFlipped = false;
 let boardLock = false; // the user clicks on another card before the card finish flipping thw logic will break, this will prevent that from happening
 let firstCard, secondCard;
 //let playerOne = true
 //let player
 let counter = 0;

// DOM:

 // selecting every card
 const cards = document.querySelectorAll('.card');

 // adding event listener to every card
 cards.forEach(card => card.addEventListener('click', flipCard));

 // selecting restart button
 const reset = document.querySelector('.restart');
 //adding event listener to restart button
 reset.addEventListener('click', resetButton);

//Functions;

// function that flips the card once clicked
 function flipCard() {
     if(boardLock) return;
     if (this === firstCard) return; //if thr user clicks twice in the same card it will turn the eventLsitener off. this will prevent that to happen.

    //console.log("I was clicked")
   // console.log(this) refers to flipcard
    this.classList.add('flip');
    if(!cardFlipped){
       // first time player clicked a card
       cardFlipped = true;
       firstCard = this;
       //console.log(cardFlipped, firstCard)
}   else {
       secondCard = this;
       //console.log(cardFlipped, secondCard)
       //console.log(firstCard.dataset.city);
       //console.log(secondCard.dataset.city)
       isAMatch();
  }
  //switch player
}
  function isAMatch(){
     // time to check if cards match
     if (firstCard.dataset.city === secondCard.dataset.city){
        // it's a match remove event listener
        turnCardsOff()
        counter++
        console.log(counter)
        winner()
    } else{
        // it's not a match
        unflipCards()
    }
  //console.log('inside the function')
}

function turnCardsOff(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard)
    restartBoard();
}

function unflipCards(){
    boardLock = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        restartBoard();
       }, 1500);
}

/* function loseTimer(){
    setTimeout(() => {
       /*  cards.forEach(card => {
            card.removeEventListener;
        }) */
        /* console.log("you lose")
       }, 30000);
}
let timeOut = setTimeout(function(){
    //console.log(``)
}, 5000)
setInterval(function(){
    console.log(`time left ${timeOut}`)
}, 1000)
 */ 

let timer = 5000
function setTimer() {
	myStopFunction()
	console.log(timer)
	timer -= 1000
}
let timeLeft = setInterval(setTimer, 1000)
function myStopFunction() {
	if (timer <= 0) {
		clearInterval(timeLeft)
	}
}
function restartBoard() {
    [cardFlipped, boardLock] = [false, false];
    [firstCard, secondCard] = [null, null];
    //if thr user clicks twice in the same card it will turn the eventLsitener off. this will prevent that from happening.
  }

function winner (){
    if(counter === 5){
        document.getElementById('title').textContent = 'You win!!'
    }
}


 // add eventListener to restart button
function resetButton(){
// assigning the scores back to 0
    counter = 0;
    document.getElementById('title').textContent = 'Memory Game'
// .cards unflip all cards
    cards.forEach(card => card.classList.remove('flip'));
// reset button is still buggy
}

/* to do:
reset button
instructions button

winning conditions
track of pairs
winning message
shuffle
add 10 more pics (maybe)
add references to read me */

/* playerOneTurn = true
playerOneTurn= false (inside secondCard)
if (playerOneTurn = false){
    playerTwoTurn = true)*/