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
 let firstCard, secondCard;

// function that flips the card once clicked
 function flipCard() {
    //console.log("I was clicked")
   // console.log(this) refers to flipcard
   this.classList.add('flip');
   if(!cardFlipped){
       // first time player clicked a card
       cardFlipped = true;
       firstCard = this;
       //console.log(cardFlipped, firstCard)
   } else {
       cardFlipped = false;
       secondCard = this;
       //console.log(cardFlipped, secondCard)
   }
  }
 // adding event listener to every card
 cards.forEach(card => card.addEventListener('click', flipCard));