# Brazil-Memory-Game

## Elevator pitch

The game starts with 10 "squares" that shows the same picture, once you click on one of the squares a picture of one of my favorites spots in Brazil will show. There will be 5 different beautiful spots total. Once you see the picture you will click on a second picture, the goal is to find the pair of the first picture you clicked on. If both of the pictures are the same they will stay showing on the browser, otherwise the pictures will unflip after a few seconds. You have 1 min to find all the pairs in order to win. This game will test your memory and hopefully will make you want to visit my country.

---
## Wireframe:

![1](https://user-images.githubusercontent.com/117694604/204959235-537c7872-3081-4328-bafc-0555f8c438d1.jpg)

![2](https://user-images.githubusercontent.com/117694604/204959311-40dcedb5-a0c1-41ff-b837-31039f8fc66f.jpg)


## Tech stack:

* HTML5
* CSS3
* JavaScript
* DOM

---

## MVP Goals

* Have the 10 squares with plain pictures on it
* Button to hide the picture in case you didn't find a pair
* Button to restart the game
* Winning Message
* timer 
* Track of how many pairs each player got

---

## Stretch Goals:

* Make the pictures disappear in 15 seconds in case of a mismatch instead of the button that hides the pictures.
* putting the pictures in different order everytime the game is restarted.
* Making an AI kind of thing that will be the second player.
* Have the 20 squares with plain pictures on it

---

## Potential roadblocks:

I believe that showing the picture and then hiding it will be hard, keeping track of how many pairs each player found will also be difficult.

---

## References:
* MDN 
* Colt Steele udemy course (The web Developer Bootcamp)
* Code Sketch: https://www.youtube.com/watch?v=eMhiMsEC9Uk&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw&index=1

---

## Deploy link:
https://dudahamilton.github.io/Brazil-Memory-Game/

---

### Aproach:
I decided to start with the logic of the cards, flipping (half of it happens through CSS), checking for a match, unflipping, storing the numbers of pairs, once the card logic was done I added the time obstacle, the reset button, the start button and the instructions button. Working with CSS flexbox was challenging but rewarding, (this) was also a roadblock but after watching a few classes and youtube video I now think I master it (I hope I don't prove myself wrong in the future) and adding the timer was also challenging but it worked well in the end. Shuffling using flexbox was easier than I though it would be and unfliping the cards using a selfTimeOut was also easier than I thout it would be.

### Post project thoughts:
I am very happy with the final results of my project, I learned a lot with it. I now have a better understanding of the DOM, have a solid idea of what (this) means and how to apply it, learned setInterval and setTimeOut, learned to console.log properly and have a habit of commiting often which I did not have before. I will keep updating this project, but as far as right now I am very happy with the learning it provided me.
