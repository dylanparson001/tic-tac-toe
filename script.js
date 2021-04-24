// Author: Dylan Parson
// Purpose: Tic-Tac-Toe game player in the browser, utilizing modules and factory functions

//Factory Function to create players
const Player = (name) => {

  const getScore = () =>{ // will use to return score
    return this.score;
  }
  //Player symbol
  const _setSymbol = () => {
    if (name === "1") {
      this.symbol = "X";
    } else {
      this.symbol = "O";
    }
    return symbol;
  }; // end setSymbol

  const getSymbol = () => {
    return (symbol = _setSymbol());
  };
  return {
    getSymbol,
    getScore,
  };
}; // end Player

//module to create game board
const gameBoard = (() => {
  const board = new Array(9);
  const container = document.querySelector("#game-container");

  const createBoard = () => {
    for (let i = 0; i < board.length; i++) {
      const space = document.createElement("div");
      space.classList.add("space");
      space.id = i;
      container.appendChild(space);
    }
  };
  return {
    board,
    createBoard,
  };
})(); // end gameBoard

//Module for game control/logic
const gameController = (() => {
  //Create two players
  const _createPlayer = (name) => { 
    return Player(name);
  };
  // add players to dom 
  const _addPlayers = (player1, player2) => {
    const container = document.getElementById("player-1");
    const firstPlayer = document.createElement("h2");
    const secondPlayer = document.createElement("h2");
    firstPlayer.textContent = `Player 1: ${player1.getScore()}`;
    secondPlayer.textContent = `Player 2: ${player2.getScore()}`;
    container.appendChild(firstPlayer);
    container.appendChild(secondPlayer);
  }
  //method for turns
  const _turnOrder = (player1, player2) => {
    //do a coin flip to determine who will go first, then alternate player turns after that 

  };
  const ticTacToe = () => {
    gameBoard.createBoard();
    const spaceList = document.querySelectorAll(".space");
    const player1 = _createPlayer("1");
    const player2 = _createPlayer("2");

    _addPlayers(player1, player2);

    spaceList.forEach((space) => {
      space.addEventListener("click", () => {
        space.textContent = player1.getSymbol(); //testing
      });
    });
  };

  return {
    ticTacToe,
  };
})();


gameController.ticTacToe();