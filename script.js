let currentPlayer = "X";

const winPatterns = [

  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6]

];

function play(cell){

  if(cell.innerHTML === ""){

    cell.innerHTML = currentPlayer;

    checkWinner();

    if(currentPlayer === "X"){
      currentPlayer = "O";
    }
    else{
      currentPlayer = "X";
    }

  }

}

function checkWinner(){

  let cells = document.querySelectorAll(".cell");

  let values = [];

  cells.forEach(cell => {
    values.push(cell.innerHTML);
  });

  for(let pattern of winPatterns){

    let a = pattern[0];
    let b = pattern[1];
    let c = pattern[2];

    if(
      values[a] !== "" &&
      values[a] === values[b] &&
      values[a] === values[c]
    ){

      alert(values[a] + " Wins!");

      disableGame();

      return;
    }

  }

  // Draw Condition
  if(!values.includes("")){

    alert("Match Draw!");

  }

}

function disableGame(){

  let cells = document.querySelectorAll(".cell");

  cells.forEach(cell => {
    cell.style.pointerEvents = "none";
  });

}

function resetGame(){

  let cells = document.querySelectorAll(".cell");

  cells.forEach(cell => {

    cell.innerHTML = "";
    cell.style.pointerEvents = "auto";

  });

  currentPlayer = "X";

}