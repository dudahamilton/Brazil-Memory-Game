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

 // selecting h1
 let message = document.getElementById('title');
 // selecting div that counts time
 let divTime = document.getElementById('time')

 // selecting restart button
 const reset = document.querySelector('.restart');
 //adding event listener to restart button
 reset.addEventListener('click', resetButton);
 // selecting start button
 const start = document.querySelector('.start')
 //  adding event listener to start button
 start.addEventListener('click', startGame);

 const divShows = document.getElementById('instructions-div');

 const instructionBtn = document.getElementById('instructions');

 const startBtn = document.getElementById('start');


//Functions;

// displaying instructuions and hiding with user click
instructionBtn.onclick = function (){
    if (divShows.style.display !== "block"){
        divShows.style.display = "block";
    } else {
        divShows.style.display = "none";
    }
}

// start button should not appear once the game starts
startBtn.onclick = function (){
    if (startBtn.style.display !== 'none'){
        startBtn.style.display = 'none';
    } else{
        startBtn.style.display = 'inline';
    }
}

// function that flips the card once clicked
 function flipCard() {
     if(boardLock) return;
     if (this === firstCard) return; //if thr user clicks twice in the same card it will turn the eventLsitener off. this will prevent that to happen.
    this.classList.add('flip');
    if(!cardFlipped){
       cardFlipped = true;
       firstCard = this;
}   else {
       secondCard = this;
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
        winner()
    } else{
        // it's not a match
        unflipCards()
    }
}
function startGame(){
    timer = 60000;
    timeLeft = setInterval(setTimer, 1000)
     // adding event listener to every card
    cards.forEach(card => card.addEventListener('click', flipCard));
    shuffle();
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

// Setting timer of the game
//let timer = 10000
function setTimer() {
	myStopFunction()
	console.log(timer)
	timer -= 1000
    divTime.textContent = `You have ${timer / 1000} seconds left`;
}
//let timeLeft = setInterval(setTimer, 1000)
function myStopFunction() {
	if (timer <= 0) {
		clearInterval(timeLeft);
        cards.forEach(card => card.removeEventListener('click', flipCard));
        message.textContent = 'You lose! Try again!'
	} 
}

// fixing bugs
function restartBoard() {
    [cardFlipped, boardLock] = [false, false];
    [firstCard, secondCard] = [null, null];
    //if thr user clicks twice in the same card it will turn the eventLsitener off. this will prevent that from happening.
  }

function shuffle(){
    cards.forEach(card =>{
        let randomPosition = Math.floor(Math.random() * 10);
        card.style.order = randomPosition;
    })
}

function winner (){
    if(counter === 5){
        message.textContent = 'Congratulations!! You win!!'
        clearInterval(timeLeft);
    }
}


 // add eventListener to restart button
function resetButton(){
// assigning the scores back to 0
    clearInterval(timeLeft);
    timer = 60000;
    timeLeft = setInterval(setTimer, 1000)
    counter = 0;
    message.textContent = 'Memory Game'
// .cards unflip all cards
    cards.forEach(card => card.classList.remove('flip'));
// making the cards clickable again
    cards.forEach(card => card.addEventListener('click', flipCard));
    shuffle();
}
