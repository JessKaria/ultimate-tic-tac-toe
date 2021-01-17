const player1Choices = []
//console.log(player1Choices)
//const player2Choices = []
//console.log(player2Choices)
const one = 'one'
const two = 'two'
let playerTurn = true
const player1score = document.getElementsByClassName('.player1score')
//console.log(player1score)
const player2score = document.getElementsByClassName('.player2score')
//console.log(player2score)
//console.log(playerTurn)
//const player1BoardsWon = 0
//console.log(player1BoardsWon)
//const player2BoardsWon = 0
//console.log(player2BoardsWon)
const gameCells = Array.from(document.querySelectorAll('.grid div'))
//console.log(gameCells)

const boardOneWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

//Add event listener to all cells
gameCells.forEach((cell) => {
  cell.addEventListener('click', choices)
})

function choices(event) {
  const cell = event.target
  //console.log(cell)
  player1Choices.push(cell)
  const currentCell = playerTurn ? one : two
  addClass(cell, currentCell)
  swapPlayersTurns()
  //checkForWin()
}

function addClass(cell, currentCell) {
  cell.classList.add(currentCell)

}

function swapPlayersTurns() {
  playerTurn = !playerTurn
}

// function checkForWin() {
//   if (player1Choices === boardOneWin) {
// }





// gameCells.forEach((cell) => {
//   cell.addEventListener('click', (event) => {
//     cell.classList.add('one')
//     //console.log(event.target.id)
//     const firstChoice = event.target.id
//     //console.log(firstchoice)
//     player1Choices.push(firstChoice)
//     cell.innerHTML = firstChoice
//   })
// })






