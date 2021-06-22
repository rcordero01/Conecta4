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

let currentPlayer = 1;

const divEl = document.querySelectorAll(".grid-container div");

const divArray = [];
for (let i = 0; i < divEl.length; i++){
    divArray.push(divEl[i])
}

let render = () => {
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

        // document.querySelector(
        //   ".players-turn"
        // ).innerHTML = ` It's ${player2}'s turn! `;
        } else (alert("move not allowed"))
        // document.querySelector(
        //   ".players-turn"
        // ).innerHTML = ` It's ${player1}'s turn! `;
        console.log(divEl)
      }
    }
}



// function check (){
//     if (divArray[0].classList.contains("player-1") &&
//         divArray[1].classList.contains("player-1") &&
//         divArray[2].classList.contains("player-1") &&
//         divArray[3].classList.contains("player-1")){
//             alert("player one wins")
// } 
// }

render();
