## Dot Game

#### https://mlinvilleengler.github.io/dots/

Welcome to the dot game.\
A game where objects fall from the top of the screen and users can catch them to earn points by clicking them.\
The game is set up with a configuration file so that it can be easily changed for different themes.\
It is currently themed for parachuting `Awesome` cows set upon a mountainous landscape.\
You may notice that the user is awarded a different and unique mountain landscape each time they come back to the game. \
The game was designed with accessibility in mind and you will notice the blue focus box around any focused element.\
The game isn't perfect and there are a number of ways it can be improved.\
Have fun and mark any issues/ideas in the git/issues section.

## Screenshots

![Dots (Awesome Cow)](https://github.com/mlinvilleengler/dots/raw/master/public/dots_small.png "Dots (Awesome Cow)")

## Info

To Run and Develop The Application:
* Clone the repo
* npm i
* npm run start

## Reflections

I wanted to create a game using react + redux to test performance of the frameworks for game rendering.\
The game was easy to structure and extend using react-redux design patterns.\
Rendering is occasionally janky. I believe that is caused by these reasons: 
 * The game state/dot animation is updating using requestAnimationFrame but react doesn't update the dom using requestAnimationFrame.
 * It updates when it's ready so i believe this timing sequence occasionally causes a small amount of jank.
 
In the future I would like to develop a similar game using redux and canvas and potentially pixi. http://www.pixijs.com/\
It would be very interesting building this game in 3d using playcanvas. https://playcanvas.com/

## TODO

  * Add Tests
  * Add Flow Type
  * Improve click animation for dot
  * Add colors for cows
  * Improve responsiveness/UX for toolbar/navigation
  * Add multiplayer
  * Add db leaderboard
  * Implement keyboard controls for a more exciting a11y experience 
