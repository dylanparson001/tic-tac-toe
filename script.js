// Author: Dylan Parson
// Purpose: Tic-Tac-Toe game player in the browser, utilizing modules and factory functions

//Factory Function to create players
const Player = (name) => {
  let score = 0;
  const incScore = () => {
    return score++;
  };
  const getScore = () => {
    // will use to return score
    return score;
  };
  const getSymbol = () => {
    return (symbol = _setSymbol());
  };
  //Player symbol
  const _setSymbol = () => {
    if (name === "1") {
      symbol = "X";
    } else {
      symbol = "O";
    }
    return symbol;
  }; // end setSymbol

  return {
    getSymbol,
    getScore,
    incScore,
  };
}; // end Player

//module to create game board
const gameBoard = (() => {
  const board = new Array(9);
  const zero = board[0];
  const one = board[1];
  const two = board[2];
  const three = board[3];
  const four = board[4];
  const five = board[5];
  const six = board[6];
  const seven = board[7];
  const eight = board[8];
  const container = document.querySelector("#game-container");
  
  const checkWin = () => {
    //loop through rows, columns, and diagonals
  
  }

  const createBoard = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
      const space = document.createElement("div");
      space.classList.add("space");
      space.id = i;
      container.appendChild(space);
    }
  };

  const playerChoice = (choice, symbol) => {
    if (board[choice.id] === "") {
      // checks if space has been chosen
      board[choice.id] = symbol;
      console.log(board);
    }
  };

  //check for win, or tie
  const checkWin = () => {
<<<<<<< HEAD
    const result = "";
=======
    let result;
>>>>>>> f8f30bbc8c690a488728876aae2c44d02566a70c

    result = _checkRows();
    
    if (result === 'draw') { 
     result = _checkDiag();
    } 
    else if (result === 'draw'){
    result = _checkCol();
    }
  }; // end checkWin

  const _checkRows = () => {
    let result;
    
    if (zero === one && zero === two) {
      // checks first row
<<<<<<< HEAD
      if (zero === "x") {
        return "x";
      }
      if (zero === "o") {
        return "o";
      }
      return "draw";
=======
      if (zero === 'x') {
        result = 'x';
      } if(zero === 'o') {
        result = "o";
      }else {
        result = 'draw';
      }
>>>>>>> f8f30bbc8c690a488728876aae2c44d02566a70c
    }
    if (three === four && three === five) {
      // checks first row
      if (three === "x") {
<<<<<<< HEAD
        return "x";
      }
      if (three === "o") {
        return "o";
      } else {
        return "draw";
=======
        result = "x";
      } if (three === 'o') {
        result = "o";
      }
      else {
        result = 'draw';
>>>>>>> f8f30bbc8c690a488728876aae2c44d02566a70c
      }
    }
    if (six === seven && six === eight) {
      // checks first row
      if (six === "x") {
<<<<<<< HEAD
        return "x";
      }
      if (six === "o") {
        return "o";
      } else {
        return "draw";
      }
    }
=======
        result = "x";
      } if (six === 'o') {
        result = "o";
      }
      else {
        result = 'draw';
      }
    }
    
    return result;
>>>>>>> f8f30bbc8c690a488728876aae2c44d02566a70c
  }; // end _checkRows
  
  const _checkCol = () =>{
    let result;
    if (zero === three && zero === six){
      if (zero === 'x'){
        result = 'x';
        }
      if (zero === 'o'){
        result = 'o';
      }
      else { 
      result = 'draw';
      
    }
    }
  if (one === four && one === seven){
      if (zero === 'x'){
        result = 'x';
        }
      if (zero === 'o'){
        result = 'o';
      }
      else { 
      result = 'draw';
      
    }
    }
    if (two === five && two === eight){
      if (zero === 'x'){
        result = 'x';
        }
      if (zero === 'o'){
        result = 'o';
      }
      else { 
      result = 'draw';
      
    }
    }
  }
  
  const _checkDiag = () => {
  let result;
    if (zero === four && zero === eight){
      if (zero === 'x'){
        result = 'x';
        }
      if (zero === 'o'){
        result = 'o';
      }
      else { 
      result = 'draw';
      
    }
    }
  if (two === four && two === six){
      if (zero === 'x'){
        result = 'x';
        }
      if (zero === 'o'){
        result = 'o';
      }
      else { 
      result = 'draw';
      
    }
    }
  
  }

  return {
    createBoard,
    playerChoice,
  };
})(); // end gameBoard

//Module for game control/logic
const gameController = (() => {
  //Create players
  const _createPlayer = (name) => {
    return Player(name);
  };
  // add players to dom
  const _addPlayers = (player1, player2) => {
    const container = document.getElementById("players");
    const firstPlayer = document.createElement("h2");
    const secondPlayer = document.createElement("h2");

    firstPlayer.id = "player-1";
    secondPlayer.id = "player-2";

    firstPlayer.textContent = `Player 1: ${player1.getScore()}`;
    secondPlayer.textContent = `Player 2: ${player2.getScore()}`;

    container.appendChild(firstPlayer);
    container.appendChild(secondPlayer);
  };

  const ticTacToe = () => {
    let turnCounter = 1;
    gameBoard.createBoard();
    const spaceList = document.querySelectorAll(".space");
    const player1 = _createPlayer("1");
    const player2 = _createPlayer("2");
    _addPlayers(player1, player2);

    spaceList.forEach((space) => {
      space.addEventListener("click", () => {
        if (turnCounter === 1) {
          // checks which player's turn
          if (space.textContent === "") {
            // checks if that space has been chosen
            space.textContent = player1.getSymbol(); //testing
            gameBoard.playerChoice(space, player1.getSymbol());
            turnCounter = 2;
          }
        } else {
          if (space.textContent === "") {
            space.textContent = player2.getSymbol();
            gameBoard.playerChoice(space, player2.getSymbol());
            turnCounter = 1;
          }
        }
      });
    });
  };

  return {
    ticTacToe,
  };
})();

gameController.ticTacToe();
