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
    if (board[choice.id] === "") { // checks if space has been chosen
      board[choice.id] = symbol;
      console.log(board);
    }
  };
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
        if (turnCounter === 1) { // checks which player's turn
          if (space.textContent === "") { // checks if that space has been chosen
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
