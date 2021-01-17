const player1Choices = []
//console.log(player1Choices)
const player2Choices = []
//console.log(player2Choices)

const one = 'one'
const two = 'two'
let playerTurn = true

//const player1score = document.document.querySelector('#player1score')
//console.log(player1score)
//const player2score = document.getElementsByClassName('.player2score')
//console.log(player2score)
//console.log(playerTurn)
//const player1BoardsWon = 0
//console.log(player1BoardsWon)
//const player2BoardsWon = 0
//console.log(player2BoardsWon)
const gameCells = Array.from(document.querySelectorAll('.grid div'))
//console.log(gameCells)


const button = document.querySelector('button')
console.log(button)

const combo1 = [0, 1, 2]
const combo2 = [3, 4, 5]
const combo3 = [6, 7, 8]
const combo4 = [0, 3, 6]
const combo5 = [1, 4, 7]
const combo6 = [2, 5, 8]
const combo7 = [0, 4, 8]
const combo8 = [2, 4, 6]



function checkForWin() {
  if (player1Choices === combo1 || player1Choices === combo2 || player1Choices === combo3 || player1Choices === combo4 || player1Choices === combo5 
    || player1Choices === combo6 || player1Choices === combo7 || player1Choices === combo8) {
    console.log('player 1 wins')
  } else if (player2Choices === combo1 || player2Choices === combo2 || player2Choices === combo3 || player2Choices === combo4 || player2Choices === combo5 
      || player2Choices === combo6 || player2Choices === combo7 || player2Choices === combo8) {
    console.log('player 1 wins')
  }
}



//Add event listener to all cells
gameCells.forEach((cell) => {
  cell.addEventListener('click', choices) 
  
})

function choices(event) {
  //console.log(cell)
  const currentCell = playerTurn ? one : two
  //console.log(currentCell)
  const cell = event.target
  cell.classList.add(currentCell)
  //add the class of current cell
  console.log(currentCell.target.id)
  playerTurn = !playerTurn
  //switch da current player using playerTurn Boolean
  if (playerTurn === true) {
    player1Choices.push(cell)
  } else {
    player2Choices.push(cell)
    //push the cell number to the player 1 + player 2 saved choices array
    checkForWin()
  }
}


