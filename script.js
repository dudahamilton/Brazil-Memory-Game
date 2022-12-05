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

function flipImg() {
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


/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QBHXWOLqJzAD3Qn9SLviVdexUFJCNnfiWw&usqp=CAU" */


/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_vZt65OuTgT6kjMhKEYNwGXoxj3or2AcVA&usqp=CAU" */