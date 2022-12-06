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

 // Flipping images (is away too repetitive ask for help)

/* function flipImg() {
    let imageClick = document.getElementById('pic1')
    if (imageClick.src.match('brazil.jpg')){
        imageClick.src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/43/ac/8f/pelourinho.jpg?w=1200&h=-1&s=1"
    } else{
        imageClick.src = 'brazil.jpg'
    }
}

function flipImg2() {
    let imageClick = document.getElementById('pic2')
    if (imageClick.src.match('brazil.jpg')){
        imageClick.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe44SuPVamIj0yVSNv6KQkV0YXcSnEyVXo4w&usqp=CAU"
    } else{
        imageClick.src = 'brazil.jpg'
    }
}

 function flipImg3() {
    let imageClick = document.getElementById('pic3')
    if (imageClick.src.match('brazil.jpg')){
        imageClick.src = "https://www.traveller.com.au/content/dam/images/h/1/q/d/y/0/image.related.articleLeadwide.620x349.h1qdxw.png/1598825371635.jpg"
    } else{
        imageClick.src = 'brazil.jpg'
    }
}
function flipImg4() {
    let imageClick = document.getElementById('pic4')
    if (imageClick.src.match('brazil.jpg')){
        imageClick.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QBHXWOLqJzAD3Qn9SLviVdexUFJCNnfiWw&usqp=CAU"
    } else{
        imageClick.src = 'brazil.jpg'
    }
}

function flipImg5() {
    let imageClick = document.getElementById('pic5')
    if (imageClick.src.match('brazil.jpg')){
        imageClick.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_vZt65OuTgT6kjMhKEYNwGXoxj3or2AcVA&usqp=CAU"
    } else{
        imageClick.src = 'brazil.jpg'
    }
}

function flipImg6() {
    let imageClick = document.getElementById('pic6')
    if (imageClick.src.match('brazil.jpg')){
        imageClick.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_vZt65OuTgT6kjMhKEYNwGXoxj3or2AcVA&usqp=CAU"
    } else{
        imageClick.src = 'brazil.jpg'
    }
}

function flipImg7() {
    let imageClick = document.getElementById('pic7')
    if (imageClick.src.match('brazil.jpg')){
        imageClick.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QBHXWOLqJzAD3Qn9SLviVdexUFJCNnfiWw&usqp=CAU"
    } else{
        imageClick.src = 'brazil.jpg'
    }
}

function flipImg8() {
    let imageClick = document.getElementById('pic8')
    if (imageClick.src.match('brazil.jpg')){
        imageClick.src = "https://www.traveller.com.au/content/dam/images/h/1/q/d/y/0/image.related.articleLeadwide.620x349.h1qdxw.png/1598825371635.jpg"
    } else{
        imageClick.src = 'brazil.jpg'
    }
}
function flipImg9() {
    let imageClick = document.getElementById('pic9')
    if (imageClick.src.match('brazil.jpg')){
        imageClick.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe44SuPVamIj0yVSNv6KQkV0YXcSnEyVXo4w&usqp=CAU"
    } else{
        imageClick.src = 'brazil.jpg'
    }
}

function flipImg10() {
    let imageClick = document.getElementById('pic10')
    if (imageClick.src.match('brazil.jpg')){
        imageClick.src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/43/ac/8f/pelourinho.jpg?w=1200&h=-1&s=1"
    } else{
        imageClick.src = 'brazil.jpg'
    }
}
 */

// cities array
let cardArray = [ 
    { city: "salvador", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/43/ac/8f/pelourinho.jpg?w=1200&h=-1&s=1", },
    { city: "salvador", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/43/ac/8f/pelourinho.jpg?w=1200&h=-1&s=1", },  
    { city: "rio", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe44SuPVamIj0yVSNv6KQkV0YXcSnEyVXo4w&usqp=CAU", },
    { city: "rio", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe44SuPVamIj0yVSNv6KQkV0YXcSnEyVXo4w&usqp=CAU", },
    { name: "noronha", img: "https://www.traveller.com.au/content/dam/images/h/1/q/d/y/0/image.related.articleLeadwide.620x349.h1qdxw.png/1598825371635.jpg", },
    { name: "noronha", img: "https://www.traveller.com.au/content/dam/images/h/1/q/d/y/0/image.related.articleLeadwide.620x349.h1qdxw.png/1598825371635.jpg", },
    { name: "bonito", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QBHXWOLqJzAD3Qn9SLviVdexUFJCNnfiWw&usqp=CAU", }, 
    { name: "bonito", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QBHXWOLqJzAD3Qn9SLviVdexUFJCNnfiWw&usqp=CAU", }, 
    { name: "jalapao", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_vZt65OuTgT6kjMhKEYNwGXoxj3or2AcVA&usqp=CAU", },
    { name: "jalapao", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_vZt65OuTgT6kjMhKEYNwGXoxj3or2AcVA&usqp=CAU", },
    ]; 
    

// Storing event listeners in variables

// changing the base image to a city once clicked
function flipCards(){
    // once image is clicked src changes to array img
}
/* 

playerOneTurn is true if player has clicked in less than 2 images

    matchFunction => once player clicked in 2 verify if images src match{
if match add 1 to playerOnePairs(it starts at 0) and remove eventListener
else unflip card after 5 seconds
}
playerOnePairs{
    starts at zero and adds 1 everytime match is true
    this probably should go inside matcFunction
    returns pairs
}


fliping turn between players 


gameOver: once winning conditions are met
winning connditions: if (playerOnePairs >= 3){
    innertext player 1 won
} else if (playerTwoPairs >= 3)
    innertext player 2 won
}

 */










// restart button

function restartGame(){

}