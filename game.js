const playerXChoices = []
console.log(playerXChoices)
const playerOChoices = []
console.log(playerOChoices)
const one = 'O'
const two = 'X'
let playerTurn = true
const scoreboard = document.querySelector('#scoreboard')
//console.log(player1score)
//console.log(player2score)
//console.log(playerTurn)
//const player1BoardsWon = 0
//console.log(player1BoardsWon)
//const player2BoardsWon = 0
//console.log(player2BoardsWon)
const gameCells = Array.from(document.querySelectorAll('.grid div'))
//console.log(gameCells)

//const button = document.querySelector('button')
//console.log('hello)


const boardOneArray = [
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
  const playerCounter = playerTurn ? one : two
  //console.log(playerCounter)
  //console.log(playerCounter)
  const cell = event.target.id
  //get cell id to update arrays
  const cellStyle = event.target
  //console.log(cellStyle)
  cellStyle.classList.add(playerCounter)
  //console.log(cell)
  //add the class of current cell
  playerTurn = !playerTurn
  //switch da current player using playerTurn Boolean
  const cellNumber = parseFloat(cell)
  if (playerTurn === true) {
    playerXChoices.push(cellNumber)
  } else {
    playerOChoices.push(cellNumber)
    //push the cell number to the player 1 + player 2 saved choices array // this isnt working 
  }
  checkForWinner()
  
}



function checkForWinner () {


  if (boardOneArray[0].every(r => playerXChoices.includes(r))){
    scoreboard.innerHTML = 'XZIBIT WINS'
  } else if (boardOneArray[0].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Oooox WINS'
  } else if (boardOneArray[1].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'XZIBIT WINS'
  } else if (boardOneArray[1].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Oooox WINS'
  } else if (boardOneArray[2].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'XZIBIT WINS'
  } else if (boardOneArray[2].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Oooox WINS'
  } else if (boardOneArray[3].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'XZIBIT WINS'
  } else if (boardOneArray[3].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Oooox WINS'
  } else if (boardOneArray[4].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'XZIBIT WINS'
  } else if (boardOneArray[4].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Oooox WINS'
  } else if (boardOneArray[5].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'XZIBIT WINS'
  } else if (boardOneArray[5].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Oooox WINS'
  } else if (boardOneArray[6].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'XZIBIT WINS'
  } else if (boardOneArray[6].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Oooox WINS'
  } else if (boardOneArray[7].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'XZIBIT WINS'
  } else if (boardOneArray[7].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Oooox WINS'
  } else if (boardOneArray[8].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'XZIBIT WINS'
  } else if (boardOneArray[8].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Oooox WINS'
  }
}

