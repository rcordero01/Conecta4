// Query selectors
const gameBoard = document.querySelector('.grid-container')
const tiles = document.querySelectorAll('.grid-container div')

// Initialized variables
let currentPlayer = 1
let board = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// const player1 = window.prompt("Player one, enter your name!");
// const player2 = window.prompt("Player two, enter your name!");
//Event listener
gameBoard.addEventListener('click', render)

//Functions
// function gameInfo(){
//   document.getElementByTagName("h2").innerHTML = `It's ${player1} vs. ${player2}!`
// }

function buildBoard() {
    for (let i = 0; i < 20; i++) {
        let space = document.createElement('div')
        space.id = i
        space.setAttribute('class', 'open')
        gameBoard.appendChild(space)
    }
}

function render(evt) {
    let link = evt.target
    if (link.classList.contains('open')) {
        if (currentPlayer === 1) {
            link.classList.remove('open')
            link.classList.add('taken')
            link.style.backgroundColor = "red"
            currentPlayer = 2
            board[link.id] = "red"
        } else if (currentPlayer === 2) {
            link.classList.remove('open')
            link.classList.add('taken')
            link.style.backgroundColor = "yellow"
            currentPlayer = 1
            board[link.id] = "blue"
        } check();
    } else if (link.classList.contains('taken')) {
        alert('Move not allowed!')
    }   console.log(link.id) 
}

function check(){

  //horizontal hard-coded wins for red player one
if (board[16] == "red" && board[17] == "red" && board[18] == "red" && board[19] == "red"){
  alert("Player one wins") 
} else if (board[12] == "red" && board[13] == "red" && board[14] == "red" && board[15] == "red"){
  alert("Player one wins")
} else if (board[8] == "red" && board[9] == "red" && board[10] == "red" && board[11] == "red"){
  alert("Player one wins")
} else if (board[4] == "red" && board[5] == "red" && board[6] == "red" && board[7] == "red"){
  alert("Player one wins")
} else if (board[0] == "red" && board[1] == "red" && board[2] == "red" && board[3] == "red"){
  alert("Player one wins")

//horizontal hard-coded wins for blue player two
} else if (board[16] == "blue" && board[17] == "blue" && board[18] == "blue" && board[19] == "blue"){
  alert("Player two wins")
} else if (board[12] == "blue" && board[13] == "blue" && board[14] == "blue" && board[15] == "blue"){
  alert("Player two wins")
} else if (board[8] == "blue" && board[9] == "blue" && board[10] == "blue" && board[11] == "blue"){
  alert("Player two wins")
} else if (board[4] == "blue" && board[5] == "blue" && board[6] == "blue" && board[7] == "blue"){
  alert("Player two wins")
} else if (board[0] == "blue" && board[1] == "blue" && board[2] == "blue" && board[3] == "blue"){
  alert("Player two wins")

//vertical hard-coded wins for red player one 
} else if (board[16] == "red" && board[12] == "red" && board[8] == "red" && board[4] == "red") {
  alert("Player one wins")
} else if (board[12] == "red" && board[8] == "red" && board[4] == "red" && board[0] == "red") {
  alert("Player one wins")
} else if (board[17] == "red" && board[13] == "red" && board[9] == "red" && board[5] == "red") {
  alert("Player one wins")
} else if (board[13] == "red" && board[9] == "red" && board[5] == "red" && board[1] == "red") {
  alert("Player one wins")
} else if (board[18] == "red" && board[14] == "red" && board[10] == "red" && board[6] == "red") {
  alert("Player one wins")
} else if (board[14] == "red" && board[10] == "red" && board[6] == "red" && board[2] == "red") {
  alert("Player one wins")
} else if (board[19] == "red" && board[15] == "red" && board[11] == "red" && board[7] == "red") {
  alert("Player one wins")
} else if (board[15] == "red" && board[11] == "red" && board[7] == "red" && board[3] == "red") {
  alert("Player one wins")

//vertical hard-coded wins for blue player two
} else if (board[16] == "blue" && board[12] == "blue" && board[8] == "blue" && board[4] == "blue") {
  alert("Player two wins")
} else if (board[12] == "blue" && board[8] == "blue" && board[4] == "blue" && board[0] == "blue") {
  alert("Player two wins")
} else if (board[17] == "blue" && board[13] == "blue" && board[9] == "blue" && board[5] == "blue") {
  alert("Player two wins")
} else if (board[13] == "blue" && board[9] == "blue" && board[5] == "blue" && board[1] == "blue") {
  alert("Player two wins")
} else if (board[18] == "blue" && board[14] == "blue" && board[10] == "blue" && board[6] == "blue") {
  alert("Player two wins")
} else if (board[14] == "blue" && board[10] == "blue" && board[6] == "blue" && board[2] == "blue") {
  alert("Player two wins")
} else if (board[19] == "blue" && board[15] == "blue" && board[11] == "blue" && board[7] == "blue") {
  alert("Player two wins")
} else if (board[15] == "blue" && board[11] == "blue" && board[7] == "blue" && board[3] == "blue") {
  alert("Player two wins")
 
// Diagonal wins for red player one
}else if (board[12] == "red" && board[9] == "red" && board[6] == "red" && board[3] == "red") {
  alert("Player one wins")
}else if (board[16] == "red" && board[13] == "red" && board[10] == "red" && board[7] == "red") {
  alert("Player one wins")
}else if (board[19] == "red" && board[14] == "red" && board[9] == "red" && board[4] == "red") {
  alert("Player one wins")
}else if (board[15] == "red" && board[10] == "red" && board[5] == "red" && board[0] == "red") {
  alert("Player one wins")

// Diagonal wins for blue player two  
} else if (board[12] == "blue" && board[9] == "blue" && board[6] == "blue" && board[3] == "blue") {
  alert("Player two wins")
}else if (board[16] == "blue" && board[13] == "blue" && board[10] == "blue" && board[7] == "blue") {
  alert("Player two wins")
}else if (board[19] == "blue" && board[14] == "blue" && board[9] == "blue" && board[4] == "blue") {
  alert("Player two wins")
}else if (board[15] == "blue" && board[10] == "blue" && board[5] == "blue" && board[0] == "blue") {
  alert("Player two wins")
}
}

function resetBoard() {
  for (let i = 0; i < board.length; i++) {
      board[i] = 0
  }
}
buildBoard();