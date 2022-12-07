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

 // selecting every card
 const cards = document.querySelectorAll('.card');

 let cardFlipped = false;
 let boardLock = false; // the user clicks on another card before the card finish flipping thw logic will break, this will prevent that from happening
 let firstCard, secondCard;

 // adding event listener to every card
 cards.forEach(card => card.addEventListener('click', flipCard));

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
}
  function isAMatch(){
     // time to check if cards match
     if (firstCard.dataset.city === secondCard.dataset.city){
        // it's a match remove event listener
        turnCardsOff()
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

function restartBoard() {
    [cardFlipped, boardLock] = [false, false];
    [firstCard, secondCard] = [null, null];
    //if thr user clicks twice in the same card it will turn the eventLsitener off. this will prevent that to happen.
  }


 
function resetButton(){

}