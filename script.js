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
// function that flips the card once clicked
function flipCard() {
    //console.log("I was clicked")
   // console.log(this)
   this.classList.toggle('flip');
  }
 // adding event listener to every card
 cards.forEach(card => card.addEventListener('click', flipCard));