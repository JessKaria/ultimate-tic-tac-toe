const playerXChoices = []
//console.log(playerXChoices)
const playerOChoices = []
//console.log(playerOChoices)
const one = 'O'
const two = 'X'
let playerTurn = true
const scoreboardmayo = document.querySelector('#scoreboardmayo')
const scoreboardsauce = document.querySelector('#scoreboardsauce')
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
  [2, 10, 18]
]

const boardOneArray = [
  [3, 4, 5],
  [12, 13, 14],
  [21, 22, 23],
  [3, 12, 21],
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
  [30, 40, 50]
]


const boardFiveArray = [
  [33, 34, 35],
  [42, 43, 44],
  [51, 52, 53],
  [33, 42, 51],
  [34, 43, 52],
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

// !!------DICTATATES THE NEXT MOVE MUST BE MADE IN--------//

// !! NEED TO USE THE BELOW ARRAYS AS STOP LISTS FOR WINNING THE BELOW BOARDS

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

// !! <-----SELECTING THE CLASSES OF THE DIFFERENT BOARDS------> //

const boardOne = Array.from(document.querySelectorAll('.one'))
const boardTwo = Array.from(document.querySelectorAll('.two'))
const boardThree = Array.from(document.querySelectorAll('.three'))
const boardFour = Array.from(document.querySelectorAll('.four'))
const boardFive = Array.from(document.querySelectorAll('.five'))
const boardSix = Array.from(document.querySelectorAll('.six'))
const boardSeven = Array.from(document.querySelectorAll('.seven'))
const boardEight = Array.from(document.querySelectorAll('.eight'))
const boardNine = Array.from(document.querySelectorAll('.nine'))

// !! <-----SELECTING THE CLASSES OF THE DIFFERENT BOARDS------> //



//!!<-----CLEAN UP THE BOARD OF CLASSES TO STOP PEOPLE CLICKING TWICE-----> //

function cleanUp() {
  boardOne.forEach(e => {
    e.classList.remove('endplay')
  })
  boardTwo.forEach(e => {
    e.classList.remove('endplay')
  })
  boardThree.forEach(e => {
    e.classList.remove('endplay')
  })
  boardFour.forEach(e => {
    e.classList.remove('endplay')
  })
  boardFive.forEach(e => {
    e.classList.remove('endplay')
  })
  boardSix.forEach(e => {
    e.classList.remove('endplay')
  })
  boardSeven.forEach(e => {
    e.classList.remove('endplay')
  })
  boardEight.forEach(e => {
    e.classList.remove('endplay')
  })
  boardNine.forEach(e => {
    e.classList.remove('endplay')
  })
}

//!!<-----FUNCTIONS TO CONTROL BOARD MOVEMENT-----> //

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

function twoMove(cellNumber) {
  if (lastMove[1].includes(cellNumber) && !boardTwo[1].classList.contains('mayo') && !boardTwo[1].classList.contains('hotsauce')) {
    boardOne.forEach(e => {
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

function threeMove(cellNumber) {
  if (lastMove[2].includes(cellNumber) && !boardThree[2].classList.contains('mayo') && !boardThree[2].classList.contains('hotsauce')) {
    boardOne.forEach(e => {
      e.classList.add('endplay')
    })
    boardTwo.forEach(e => {
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

function fourMove(cellNumber) {
  if (lastMove[3].includes(cellNumber) && !boardFour[3].classList.contains('mayo') && !boardFour[3].classList.contains('hotsauce')) {
    boardOne.forEach(e => {
      e.classList.add('endplay')
    }) 
    boardTwo.forEach(e => {
      e.classList.add('endplay')
    }) 
    boardThree.forEach(e => {
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

function fiveMove(cellNumber) {
  if (lastMove[4].includes(cellNumber) && !boardFive[4].classList.contains('mayo') && !boardFive[4].classList.contains('hotsauce')) {
    boardOne.forEach(e => {
      e.classList.add('endplay')
    }) 
    boardTwo.forEach(e => {
      e.classList.add('endplay')
    }) 
    boardThree.forEach(e => {
      e.classList.add('endplay')
    }) 
    boardFour.forEach(e => {
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

function sixMove(cellNumber) {
  if (lastMove[5].includes(cellNumber) && !boardSix[5].classList.contains('mayo') && !boardSix[5].classList.contains('hotsauce')) {
    boardOne.forEach(e => {
      e.classList.add('endplay')
    }) 
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

function sevenMove(cellNumber) {
  if (lastMove[6].includes(cellNumber) && !boardSeven[6].classList.contains('mayo') && !boardSeven[6].classList.contains('hotsauce')) {
    boardOne.forEach(e => {
      e.classList.add('endplay')
    }) 
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
    boardEight.forEach(e => {
      e.classList.add('endplay')
    }) 
    boardNine.forEach(e => {
      e.classList.add('endplay')
    }) 
  } 
}

function eightMove(cellNumber) {
  if (lastMove[7].includes(cellNumber) && !boardEight[7].classList.contains('mayo') && !boardEight[7].classList.contains('hotsauce')) {
    boardOne.forEach(e => {
      e.classList.add('endplay')
    }) 
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
    boardNine.forEach(e => {
      e.classList.add('endplay')
    }) 
  } 
}

function nineMove(cellNumber) {
  if (lastMove[8].includes(cellNumber) && !boardNine[8].classList.contains('mayo') && !boardNine[8].classList.contains('hotsauce')) {
    boardOne.forEach(e => {
      e.classList.add('endplay')
    }) 
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
  } 
}

//!!<-----PLAYER ASSIGNMENT EVENT-----> //

//Add event listener to all cells and make it clickable
gameCells.forEach((cell) => {
  cell.addEventListener('click', choices)

})

function choices(event) {
  const playerCounter = playerTurn ? one : two
  console.log(playerCounter)
  const cell = event.target.id
  //get cell id to update arrays
  const cellStyle = event.target
  //console.log(cellStyle)
  cellStyle.classList.add(playerCounter)
  console.log(cell)
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
  cleanUp() 
  checkBoardZero()
  checkBoardOne()
  checkBoardTwo()
  checkBoardThree()
  checkBoardFour()
  checkBoardFive()
  checkBoardSix()
  checkBoardSeven()
  checkBoardEight()
  oneMove(cellNumber)
  twoMove(cellNumber)
  threeMove(cellNumber)
  threeMove(cellNumber)
  fourMove(cellNumber)
  fiveMove(cellNumber)
  sixMove(cellNumber)
  sevenMove(cellNumber)
  eightMove(cellNumber)
  nineMove(cellNumber)

}


//!!<-----CHECKING EACH GAMEBOARDS FOR A WIN IN DESCENDING ORDER GAME 1-9 ------>!!//

function checkBoardZero() {
  if (boardZeroArray[0].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardZeroArray[0].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardZeroArray[1].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardZeroArray[1].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardZeroArray[2].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardZeroArray[2].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardZeroArray[3].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardZeroArray[3].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardZeroArray[4].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardZeroArray[4].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardZeroArray[5].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardZeroArray[5].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('mayo')
    })


  } else if (boardZeroArray[6].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardZeroArray[6].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardZeroArray[7].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('hotsauce')
    })


  } else if (boardZeroArray[7].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 1!'
    boardOne.forEach(e => {
      e.classList.add('mayo')
    })
  }
}

function checkBoardOne() {
  if (boardOneArray[0].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardOneArray[0].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardOneArray[1].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardOneArray[1].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardOneArray[2].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardOneArray[2].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardOneArray[3].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardOneArray[3].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardOneArray[4].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardOneArray[4].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardOneArray[5].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardOneArray[5].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardOneArray[6].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardOneArray[6].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardOneArray[7].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardOneArray[7].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 2!'
    boardTwo.forEach(e => {
      e.classList.add('mayo')
    })
  }
}

function checkBoardTwo() {
  if (boardTwoArray[0].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardTwoArray[0].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardTwoArray[1].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardTwoArray[1].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardTwoArray[2].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardTwoArray[2].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardTwoArray[3].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardTwoArray[3].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardTwoArray[4].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardTwoArray[4].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardTwoArray[5].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardTwoArray[5].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardTwoArray[6].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardTwoArray[6].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardTwoArray[7].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardTwoArray[7].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 3!'
    boardThree.forEach(e => {
      e.classList.add('mayo')
    })
  }
}

function checkBoardThree() {
  if (boardThreeArray[0].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardThreeArray[0].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardThreeArray[1].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardThreeArray[1].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardThreeArray[2].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardThreeArray[2].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardThreeArray[3].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardThreeArray[3].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardThreeArray[4].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardThreeArray[4].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardThreeArray[5].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardThreeArray[5].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardThreeArray[6].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardThreeArray[6].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardThreeArray[7].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardThreeArray[7].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 4!'
    boardFour.forEach(e => {
      e.classList.add('mayo')
    })
  }
}

function checkBoardFour() {
  if (boardFourArray[0].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFourArray[0].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFourArray[1].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFourArray[1].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFourArray[2].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFourArray[2].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFourArray[3].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFourArray[3].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFourArray[4].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFourArray[4].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFourArray[5].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFourArray[5].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFourArray[6].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFourArray[6].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('mayo')
    })
    
  } else if (boardFourArray[7].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFourArray[7].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 5!'
    boardFive.forEach(e => {
      e.classList.add('mayo')
    })
  }
}

function checkBoardFive() {
  if (boardFiveArray[0].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFiveArray[0].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFiveArray[1].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFiveArray[1].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFiveArray[2].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFiveArray[2].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFiveArray[3].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFiveArray[3].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFiveArray[4].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFiveArray[4].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFiveArray[5].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFiveArray[5].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFiveArray[6].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFiveArray[6].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardFiveArray[7].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardFiveArray[7].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 6!'
    boardSix.forEach(e => {
      e.classList.add('mayo')
    })
  }
}

function checkBoardSix() {
  if (boardSixArray[0].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSixArray[0].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSixArray[1].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSixArray[1].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSixArray[2].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSixArray[2].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSixArray[3].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSixArray[3].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSixArray[4].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('hotsauce')
    })
    
  } else if (boardSixArray[4].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSixArray[5].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSixArray[5].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSixArray[6].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSixArray[6].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSixArray[7].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('hotsauce')
    })
    
  } else if (boardSixArray[7].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 7!'
    boardSeven.forEach(e => {
      e.classList.add('mayo')
    })
  }
}

function checkBoardSeven() {
  if (boardSevenArray[0].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSevenArray[0].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSevenArray[1].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSevenArray[1].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSevenArray[2].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSevenArray[2].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSevenArray[3].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSevenArray[3].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSevenArray[4].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSevenArray[4].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSevenArray[5].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSevenArray[5].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSevenArray[6].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSevenArray[6].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardSevenArray[7].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardSevenArray[7].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 8!'
    boardEight.forEach(e => {
      e.classList.add('mayo')
    })
  }
}

function checkBoardEight() {
  if (boardEightArray[0].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardEightArray[0].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardEightArray[1].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardEightArray[1].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardEightArray[2].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardEightArray[2].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardEightArray[3].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardEightArray[3].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardEightArray[4].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardEightArray[4].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardEightArray[5].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardEightArray[5].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardEightArray[6].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardEightArray[6].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('mayo')
    })

  } else if (boardEightArray[7].every(r => playerOChoices.includes(r))) {
    scoreboardsauce.innerHTML = 'Hot Sauce Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('hotsauce')
    })

  } else if (boardEightArray[7].every(r => playerXChoices.includes(r))) {
    scoreboardmayo.innerHTML = 'Mayo Wins Board 9!'
    boardNine.forEach(e => {
      e.classList.add('mayo')
    })
  }
}