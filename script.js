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
    let image_click = document.getElementById('pic1')
    if (image_click.src.match('brazil.jpg')){
        image_click.src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/43/ac/8f/pelourinho.jpg?w=1200&h=-1&s=1"
    } else{
        image_click.src = 'brazil.jpg'
    }
}

