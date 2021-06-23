// const player1 = window.prompt("Enter name for player 1: ");
// const player2 = window.prompt("Enter name for player 2: ");

// document.querySelector(".players-names").innerHTML = `${player1} vs ${player2}`;

// function createDivs(){
// for ( i = 0; i< 42; i++){
//    let newDiv = document.createElement("div")
//    divEl.appendChild(newDiv);  
// }
// }
// createDivs();

// const divArray = [];
// for (let i = 0; i < divEl.length; i++){
//     divArray.push(divEl[i])
// }

let currentPlayer = 1;

const divEl = document.querySelectorAll(".grid-container div");

function check (){
  for (let i = 0; i < divEl.length; i++)
  //Check for a horizontal win for player one
  if (divEl[i].classList.contains("player-1") &&
  divEl[i + 1].classList.contains("player-1") &&
  divEl[i + 2].classList.contains("player-1") &&
  divEl[i + 3].classList.contains("player-1") &&
  divEl[i] != [5,11,17,23,29,35,41]
  ){
    alert("Player one wins!")
  //Check for a horizontal win for player two
} else if (divEl[i].classList.contains("player-2") &&
  divEl[i + 1].classList.contains("player-2") &&
  divEl[i + 2].classList.contains("player-2") &&
  divEl[i + 3].classList.contains("player-2") &&
  divEl[i] != [5,11,17,23,29,35,41]
  ){
    alert("Player two wins!")

//  Check for a vertical win for player one

} else if (divEl[i].classList.contains("player-1") &&
  divEl[i + 6].classList.contains("player-1") &&
  divEl[i + 12].classList.contains("player-1") &&
  divEl[i + 18].classList.contains("player-1")
  // divEl[i] != [5,11,17,23,29,35,41]
  alert("player one wins!")
)}
  }


function render() {
  for (let i = 0; i < divEl.length; i++) {
    divEl[i].onclick = () => {
      if (currentPlayer == 1 && divEl[i].classList.contains("open")) {
        divEl[i].style.backgroundColor = "red";
        divEl[i].classList.add("player-1");
        divEl[i].classList.remove("open");
        currentPlayer = 2;
      } else if (currentPlayer == 2 && divEl[i].classList.contains("open")) {
        divEl[i].style.backgroundColor = "blue";
        divEl[i].classList.add("player-2");
        divEl[i].classList.remove("open");
        currentPlayer = 1;
check();
        // document.querySelector(
        //   ".players-turn"
        // ).innerHTML = ` It's ${player2}'s turn! `;

        } else (alert("move not allowed"))

        // document.querySelector(
        //   ".players-turn"
        // ).innerHTML = ` It's ${player1}'s turn! `;
      }
    } 
}
render();