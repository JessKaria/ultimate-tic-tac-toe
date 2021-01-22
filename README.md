
### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, SEI 

## Ultimate-tic-tac-toe | Hot Sauce Editions

 

## Overview

This was my first project at General Assembly immersive course at GA London. We were tasked with creating a grid-based game to be rendered in the browser, and deployed online. We were given seven days to complete the project and were expected to build the project on our own.

Being my first time making anything, I opted for Ultimate Tic-Tac-Toe, but recreated the game with my own spicy twist.

You can play the game on GitHub pages [here](https://jesskaria.github.io/ultimate-tic-tac-toe//), or find the GitHub repo [here](https://github.com/JessKaria/ultimate-tic-tac-toe).

## Brief

- **Render a game in the browser**
- **The game should be playable for two players on the same computer, taking turns to make their moves**
- **Include separate HTML / CSS / JavaScript files**
- **The winner should be displayed when the game is over**
- **Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles**
- **Deploy your game online, where the rest of the world can access it**
- **Use semantic markup for HTML and CSS (adhere to best practices)**
- **Build a game individually.**
- **Be creative.**

## Rules

* [Ultimate Tic-Tac-Toe: The Rules - Youtube](https://www.youtube.com/watch?v=37PC0bGMiTI)

## Technologies used !

- HTML
- CSS
- JavaScript (ES6)
- Git and GitHub
- Canva
- Google Fonts

## Challenges

The first challenge is to make a standard Tic Tac Toe game with win condition. Once this has been achieved the larger game also needs to be implemented. A good use of Object Oriented Programming can be very helpful here.

## Approach

This was my first time building anything, so I was nervous but also really excited to see what I could achieve. I spent a day or so planning and whiteboarding out my thoughts around how I wanted the game mechanics to work, I then broke the game down into smaller 'codeable' components and began writing pseudo code for each of the parts. The first challenge was to make the basic tic-tac-toe game, but I always had one eye on how I was going to go about creating the larger game...

## The Game!

![ultimate-tic-tac-toe](https://github.com/JessKaria/ultimate-tic-tac-toe/blob/main/images/Tic-Tac-Toe.gif)


## Identifying and storing element ID in an array.

const boardZeroArray = [
  [0, 1, 2],
  [9, 10, 11],
  [18, 19, 20],
  [0, 9, 18],
  [1, 10, 19],
  [2, 11, 20],
  [0, 10, 20],
  [2, 10, 18]
]

I hard coded the winning combinations for each of the boards and stored them in an array of arrays. I would use the index of the array to then check the players choices against these hard-coded winning combinations. After testing this logic out I was confident I could scale out the same methodology to build the larger game scenario.


## Identifying and storing ID cellnumber of the users click

The next thing I wanted to achieve was adding event listeners to all the cells and storing their location by ID in an array or player 1 choices and player 2 choices. I passed a second parameter into that event listener and used my choices function to then return the cell ID and store it in a global array that I could later use to test against my choices.

gameCells.forEach((cell) => {
  cell.addEventListener('click', choices)
})

function choices(event) {
  const playerCounter = playerTurn ? one : two
  const cell = event.target.id
  const cellStyle = event.target
  cellStyle.classList.add(playerCounter)
  playerTurn = !playerTurn
  const cellNumber = parseFloat(cell)
  if (playerTurn === true) {
    playerXChoices.push(cellNumber)
  } else {
    playerOChoices.push(cellNumber)
  }
}


## Game movement

Once I had worked out the win logic for the wider game, I wanted to use the same idea to control the movement of the board. I solved this by using another array of arrays and using this to add classes to the cells that were not in play.

const lastMove = [
  [0, 3, 6, 27, 30, 33, 54, 57, 60],
  [1, 4, 7, 28, 31, 34, 55, 58, 61],
  [2, 5, 8, 29, 32, 35, 56, 59, 62],
  [9, 12, 15, 36, 39, 42, 63, 66, 69],
  [10, 13, 16, 37, 40, 43, 64, 67, 70],
  [11, 14, 17, 38, 41, 44, 65, 68, 71],
  [18, 21, 24, 45, 48, 51, 72, 75, 78],
  [19, 22, 25, 46, 49, 52, 73, 76, 79],
  [20, 23, 26, 47, 50, 53, 74, 77, 80]
]

The below function applied the 'endplay' class below which prevented players from placing a counter in an area of the board that wasn't in play. The function also checked if the board had already been won by a player and in that case would open the entire board up to play!

.endplay {
  pointer-events: none;
  background-color: #000103;
} 

function oneMove(cellNumber) {
  if (lastMove[0].includes(cellNumber) && !boardOne[0].classList.contains('mayo') && !boardOne[0].classList.contains('hotsauce')) {
    boardTwo.forEach(e => {
      e.classList.add('endplay')
    })
    boardThree.forEach(e => {
      e.classList.add('endplay')
    })
    boardFour.forEach(e => {
      e.classList.add('endplay')
    })
    boardFive.forEach(e => {
      e.classList.add('endplay')
    })
    boardSix.forEach(e => {
      e.classList.add('endplay')
    })
    boardSeven.forEach(e => {
      e.classList.add('endplay')
    })
    boardEight.forEach(e => {
      e.classList.add('endplay')
    })
    boardNine.forEach(e => {
      e.classList.add('endplay')
    })
  } 
}

## Wins !

![ultimate-tic-tac-toe](https://github.com/JessKaria/ultimate-tic-tac-toe/blob/main/images/Sauce.png)

One of our stretch goals was to make the game responsive, and I was super happy to achieve this.


## Bugs !

The game doesn't have any bugs, but there are most definatley a few improvements I would like to make!

## Potential future features

- Scoreboard
- Select your condiment
- Pop-up modal displaying winner
- 1 player mode
- Move the game description to modal

## What I learned...

My biggest learning would be to refactor as I go, I started off with this intention but as I got on my code became more reptative and harder to untangle, a rookie mistake. This was such a fun and rewarding experience and I am already keen to start on another!









