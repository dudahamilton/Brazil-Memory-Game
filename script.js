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


    
const memoryGame = (function(){
    // grabbing the game container from html
    const container = document.getElementById('game-container');
    // array holding the images 
    let cardArray = [ 
        { city: "salvador", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/43/ac/8f/pelourinho.jpg?w=1200&h=-1&s=1", },
        { city: "salvador", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/43/ac/8f/pelourinho.jpg?w=1200&h=-1&s=1", },  
        { city: "rio", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe44SuPVamIj0yVSNv6KQkV0YXcSnEyVXo4w&usqp=CAU", },
        { city: "rio", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe44SuPVamIj0yVSNv6KQkV0YXcSnEyVXo4w&usqp=CAU", },
        { city: "noronha", img: "https://www.traveller.com.au/content/dam/images/h/1/q/d/y/0/image.related.articleLeadwide.620x349.h1qdxw.png/1598825371635.jpg", },
        { city: "noronha", img: "https://www.traveller.com.au/content/dam/images/h/1/q/d/y/0/image.related.articleLeadwide.620x349.h1qdxw.png/1598825371635.jpg", },
        { city: "bonito", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QBHXWOLqJzAD3Qn9SLviVdexUFJCNnfiWw&usqp=CAU", }, 
        { city: "bonito", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QBHXWOLqJzAD3Qn9SLviVdexUFJCNnfiWw&usqp=CAU", }, 
        { city: "jalapao", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_vZt65OuTgT6kjMhKEYNwGXoxj3or2AcVA&usqp=CAU", },
        { city: "jalapao", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_vZt65OuTgT6kjMhKEYNwGXoxj3or2AcVA&usqp=CAU", },
        ];
        
        const boxes= [];
        let preeviousBoxIndex = null; //the last clicked img. starts as null but changes with the game
        let gameActive = false; // if game is still active


        // Creating the grid
        const grid = document.createElement('div');
        grid.classList.add("grid")
        container.appendChild(grid) // making the new div a child of the container div
        


        // Creating the boxes inside the grid

         // stablishing number of rows and columns inside the gridr
        const row = 2;
        const column = 5;
        // devinding the space of the container between the images boxes
        const boxWidth = container.offsetWidth /column;
        const boxHeight = container.offsetHeight / row;

        for (let i = 0; i < row*column; i +=2) {
            const image = randomImage();

            for (let j = 0; j < 2; j++){
                currentBoxIndex = i + j;
                const boxElement = document.createElement("div");
                boxElement.innerText = image;
                boxElement.classList.add('cell');
                boxElement.style.width = (100 /column) + '%'
            const box = {
                image: image,
                element: boxElement,
                isAMatch: false
            }

            // hiding the images that do not match after a few seconds
            setTimeout(() => {
                boxElement.classList.add("hide");
            }, randomImg());
        

            }
        }

}

)











// Storing event listeners in variables

// changing the base image to a city once clicked
/* function flipCards(){
    // once image is clicked src changes to array img
}
/*  */

/* playerOneTurn is true if player has clicked in less than 2 images

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