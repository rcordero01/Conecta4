const player1 = window.prompt("Enter name for player 1: ");
const player2 = window.prompt("Enter name for player 2: ");

let currentPlayer = [1];
document.querySelector(".players-names").innerHTML = `${player1} vs ${player2}`;

// if(currentPlayer = 1){
// document.querySelector(".players-turn").innerHTML = ` It's ${player1}'s turn! `
// } else document.querySelector(".players-turn").innerHTML = ` It's ${player2}'s turn! `

document.addEventListener("click", () => {
  const divEl = document.querySelectorAll(".grid-container div");

  for (let i = 0; i < divEl.length; i++) {
    divEl[i].onclick = () => {
      if (currentPlayer == 1) {
        red = divEl[i].style.backgroundColor = "red";
        divEl[i].classList.add("bottom-row");
        currentPlayer = 2;
        document.querySelector(
          ".players-turn"
        ).innerHTML = ` It's ${player2}'s turn! `;
      } else if (currentPlayer == 2) {
        blue =  divEl[i].style.backgroundColor = "blue";
        divEl[i].classList.add("bottom-row");
        currentPlayer = 1;
        document.querySelector(
          ".players-turn"
        ).innerHTML = ` It's ${player1}'s turn! `;
      }
    };
  }
});
