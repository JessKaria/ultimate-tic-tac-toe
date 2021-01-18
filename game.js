const playerXChoices = []
//console.log(playerXChoices)
const playerOChoices = []
//console.log(playerOChoices)
const one = 'O'
const two = 'X'
let playerTurn = true
const scoreboard = document.querySelector('#scoreboard')
let player1BoardsWon = 0
//console.log(player1BoardsWon)
let player2BoardsWon = 0
//console.log(player2BoardsWon)
const gameCells = Array.from(document.querySelectorAll('.grid div'))
//console.log(gameCells)

//const button = document.querySelector('button')
//console.log('hello)

//------WINNING ARRAYS BOARD MOVEMENT--------//

const boardZeroArray = [
  [0, 1, 2],
  [9, 10, 11],
  [18, 19, 20],
  [0, 9, 18],
  [1, 10, 19],
  [2, 11, 20],
  [0, 10, 20],
  [2, 10, 19]
]

const boardOneArray = [
  [3, 4, 5],
  [12, 13, 14],
  [21, 22, 23],
  [3, 12, 22],
  [4, 13, 22],
  [5, 14, 23],
  [3, 13, 23],
  [5, 13, 21]
]

const boardTwoArray = [
  [6, 7, 8],
  [15, 16, 17],
  [24, 25, 26],
  [6, 15, 24],
  [7, 16, 25],
  [8, 17, 26],
  [6, 16, 26],
  [8, 16, 24]
]

const boardThreeArray = [
  [27, 28, 29],
  [36, 37, 38],
  [45, 46, 47],
  [27, 36, 45],
  [28, 37, 46],
  [29, 38, 47],
  [27, 37, 47],
  [29, 37, 45]
]

const boardFourArray = [
  [30, 31, 32],
  [39, 40, 41],
  [48, 49, 50],
  [30, 39, 48],
  [31, 40, 49],
  [32, 41, 50],
  [30, 40, 50],
  [32, 40, 48]
]


const boardFiveArray = [
  [33, 34, 35],
  [42, 43, 44],
  [51, 52, 53],
  [33, 42, 51],
  [34, 43, 42],
  [35, 44, 53],
  [33, 43, 53],
  [35, 43, 51]
]

const boardSixArray = [
  [54, 63, 72],
  [55, 64, 73],
  [56, 65, 74],
  [54, 55, 56],
  [63, 64, 65],
  [72, 73, 74],
  [54, 64, 74],
  [56, 64, 72]
]

const boardSevenArray = [
  [57, 58, 59],
  [66, 67, 68],
  [75, 76, 77],
  [57, 66, 75],
  [58, 67, 76],
  [59, 68, 77],
  [57, 67, 77],
  [59, 67, 75]
]

const boardEightArray = [
  [60, 61, 62],
  [69, 70, 71],
  [78, 79, 80],
  [60, 69, 78],
  [61, 70, 79],
  [62, 71, 80],
  [60, 70, 80],
  [62, 70, 78]
]



//------LIVE BOARDS BOARD MOVEMENT--------//

// const nextMove = [
//   [0, 1, 2, 9, 10, 11, 18, 19, 20],
//   [3, 4, 5, 12, 13, 14, 21, 22, 23],
//   [6, 7, 8, 15, 16, 17, 24, 25, 26],
//   [27, 28, 29, 36, 37, 38, 45, 46, 47],
//   [30, 31, 32, 39, 40, 41, 48, 49, 50],
//   [33, 34, 35, 42, 43, 44, 51, 52, 53],
//   [54, 55, 56, 63, 64, 65, 72, 73, 74],
//   [57, 58, 59, 66, 67, 68, 75, 76, 77],
//   [60, 61, 62, 69, 70, 71, 78, 79, 80]
// ]


//------DICTATATES THE NEXT MOVE MUST BE MADE IN--------//

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



// function nextMove {
//   if (lastMove[0].every(r => playerOChoices.includes(r))) {
//     cell.classList.toggle('one')
//   } else if (boardZeroArray[0].every(r => playerXChoices.includes(r))) {
//     scoreboard.innerHTML = 'Player X Wins Board One!'
// }


//Add event listener to all cells and make it clickable
gameCells.forEach((cell) => {
  cell.addEventListener('click', choices)
  if (lastMove[1].includes(playerOChoices)) {
    cell.classList.remove('one')
    console.log(cell)
  }
})

function choices(event) {
  const playerCounter = playerTurn ? one : two
  console.log(playerCounter)
  const cell = event.target.id
  //get cell id to update arrays
  const cellStyle = event.target
  //console.log(cellStyle)
  cellStyle.classList.add(playerCounter)
  //console.log(cell)
  //add the class of current cell
  playerTurn = !playerTurn
  //switch da current player using playerTurn Boolean
  //parse the string as a Number
  const cellNumber = parseFloat(cell)
  if (playerTurn === true) {
    playerXChoices.push(cellNumber)
  } else {
    playerOChoices.push(cellNumber)
    //push the cell number to the player 1 + player 2 saved choices array 
  }
  checkBoardZero()
  checkBoardOne()
  checkBoardTwo()
  checkBoardThree()
  checkBoardFour()
  checkBoardFive()
  checkBoardSix() 
  checkBoardSeven() 
  checkBoardEight()
}

function checkBoardZero() {
  if (boardZeroArray[0].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board One!'
  } else if (boardZeroArray[0].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board One!'
  } else if (boardZeroArray[1].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board One!'
  } else if (boardZeroArray[1].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board One!'
  } else if (boardZeroArray[2].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board One!'
  } else if (boardZeroArray[2].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board One!'
  } else if (boardZeroArray[3].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board One!'
  } else if (boardZeroArray[3].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board One!'
  } else if (boardZeroArray[4].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board One!'
  } else if (boardZeroArray[4].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board One!'
  } else if (boardZeroArray[5].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board One!'
  } else if (boardZeroArray[5].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board One!'
  } else if (boardZeroArray[6].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board One!'
  } else if (boardZeroArray[6].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board One!'
  } else if (boardZeroArray[7].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board One!'
  } else if (boardZeroArray[7].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board One!'
  } 
}

function checkBoardOne() {
  if (boardOneArray[0].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Two'
  } else if (boardOneArray[0].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Two!'
  } else if (boardOneArray[1].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Two!'
  } else if (boardOneArray[1].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Two!'
  } else if (boardOneArray[2].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Two!'
  } else if (boardOneArray[2].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Two!'
  } else if (boardOneArray[3].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Two!'
  } else if (boardOneArray[3].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Two!'
  } else if (boardOneArray[4].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Two!'
  } else if (boardOneArray[4].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Two!'
  } else if (boardOneArray[5].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Two!'
  } else if (boardOneArray[5].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Two!'
  } else if (boardOneArray[6].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Two!'
  } else if (boardOneArray[6].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Two!'
  } else if (boardOneArray[7].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Two!'
  } else if (boardOneArray[7].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Two!'
  } 
}

function checkBoardTwo() {
  if (boardTwoArray[0].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Three'
  } else if (boardTwoArray[0].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Three!'
  } else if (boardTwoArray[1].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Three!'
  } else if (boardTwoArray[1].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Three!'
  } else if (boardTwoArray[2].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Three!'
  } else if (boardTwoArray[2].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Three!'
  } else if (boardTwoArray[3].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Three!'
  } else if (boardTwoArray[3].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Three!'
  } else if (boardTwoArray[4].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Three!'
  } else if (boardTwoArray[4].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Three!'
  } else if (boardTwoArray[5].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Three!'
  } else if (boardTwoArray[5].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Three!'
  } else if (boardTwoArray[6].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Three!'
  } else if (boardTwoArray[6].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Three!'
  } else if (boardTwoArray[7].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Three!'
  } else if (boardTwoArray[7].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Three!'
  } 
}

function checkBoardThree() {
  if (boardThreeArray[0].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Four'
  } else if (boardThreeArray[0].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Four!'
  } else if (boardThreeArray[1].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Four!'
  } else if (boardThreeArray[1].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Four!'
  } else if (boardThreeArray[2].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Four!'
  } else if (boardThreeArray[2].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Four!'
  } else if (boardThreeArray[3].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Four!'
  } else if (boardThreeArray[3].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Four!'
  } else if (boardThreeArray[4].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Four!'
  } else if (boardThreeArray[4].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Four!'
  } else if (boardThreeArray[5].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Four!'
  } else if (boardThreeArray[5].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Four!'
  } else if (boardThreeArray[6].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Four!'
  } else if (boardThreeArray[6].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Four!'
  } else if (boardThreeArray[7].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Four!'
  } else if (boardThreeArray[7].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Four!'
  } 
}

function checkBoardFour() {
  if (boardFourArray[0].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Five'
  } else if (boardFourArray[0].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Five!'
  } else if (boardFourArray[1].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Five!'
  } else if (boardFourArray[1].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Five!'
  } else if (boardFourArray[2].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Five!'
  } else if (boardFourArray[2].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Five!'
  } else if (boardFourArray[3].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Five!'
  } else if (boardFourArray[3].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Five!'
  } else if (boardFourArray[4].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Five!'
  } else if (boardFourArray[4].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Five!'
  } else if (boardFourArray[5].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Five!'
  } else if (boardFourArray[5].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Five!'
  } else if (boardFourArray[6].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Five!'
  } else if (boardFourArray[6].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Five!'
  } else if (boardFourArray[7].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Five!'
  } else if (boardFourArray[7].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Five!'
  } 
}

function checkBoardFive() {
  if (boardFiveArray[0].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Six!'
  } else if (boardFiveArray[0].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Six!'
  } else if (boardFiveArray[1].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Six!'
  } else if (boardFiveArray[1].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Six!'
  } else if (boardFiveArray[2].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Six!'
  } else if (boardFiveArray[2].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Six!'
  } else if (boardFiveArray[3].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Six!'
  } else if (boardFiveArray[3].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Six!'
  } else if (boardFiveArray[4].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Six!'
  } else if (boardFiveArray[4].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Six!'
  } else if (boardFiveArray[5].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Six!'
  } else if (boardFiveArray[5].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Six!'
  } else if (boardFiveArray[6].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Six!'
  } else if (boardFiveArray[6].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Six!'
  } else if (boardFiveArray[7].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Six!'
  } else if (boardFiveArray[7].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Six!'
  } 
}

function checkBoardSix() {
  if (boardSixArray[0].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Seven!'
  } else if (boardSixArray[0].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Seven!'
  } else if (boardSixArray[1].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Seven!'
  } else if (boardSixArray[1].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Seven!'
  } else if (boardSixArray[2].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Seven!'
  } else if (boardSixArray[2].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Seven!'
  } else if (boardSixArray[3].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Seven!'
  } else if (boardSixArray[3].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Seven!'
  } else if (boardSixArray[4].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Seven!'
  } else if (boardSixArray[4].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Seven!'
  } else if (boardSixArray[5].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Seven!'
  } else if (boardSixArray[5].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Seven!'
  } else if (boardSixArray[6].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Seven!'
  } else if (boardSixArray[6].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Seven!'
  } else if (boardSixArray[7].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Seven!'
  } else if (boardSixArray[7].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Seven!'
  } 
}

function checkBoardSeven() {
  if (boardSevenArray[0].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Eight!'
  } else if (boardSevenArray[0].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Eight!'
  } else if (boardSevenArray[1].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Eight!'
  } else if (boardSevenArray[1].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Eight!'
  } else if (boardSevenArray[2].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Eight!'
  } else if (boardSevenArray[2].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Eight!'
  } else if (boardSevenArray[3].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Eight!'
  } else if (boardSevenArray[3].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Eight!'
  } else if (boardSevenArray[4].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Eight!'
  } else if (boardSevenArray[4].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Eight!'
  } else if (boardSevenArray[5].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Eight!'
  } else if (boardSevenArray[5].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Eight!'
  } else if (boardSevenArray[6].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Eight!'
  } else if (boardSevenArray[6].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Eight!'
  } else if (boardSevenArray[7].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Eight!'
  } else if (boardSevenArray[7].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Eight!'
  } 
}

function checkBoardEight() {
  if (boardEightArray[0].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Nine!'
  } else if (boardEightArray[0].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Nine!'
  } else if (boardEightArray[1].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Nine!'
  } else if (boardEightArray[1].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Nine!'
  } else if (boardEightArray[2].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Nine!'
  } else if (boardEightArray[2].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Nine!'
  } else if (boardEightArray[3].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Nine!'
  } else if (boardEightArray[3].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Nine!'
  } else if (boardEightArray[4].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Nine!'
  } else if (boardEightArray[4].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Nine!'
  } else if (boardEightArray[5].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Nine!'
  } else if (boardEightArray[5].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Nine!'
  } else if (boardEightArray[6].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Nine!'
  } else if (boardEightArray[6].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Nine!'
  } else if (boardEightArray[7].every(r => playerOChoices.includes(r))) {
    scoreboard.innerHTML = 'Player O Wins Board Nine!'
  } else if (boardEightArray[7].every(r => playerXChoices.includes(r))) {
    scoreboard.innerHTML = 'Player X Wins Board Nine!'
  } 
}