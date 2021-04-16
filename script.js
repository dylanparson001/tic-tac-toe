// Author: Dylan Parson
// Purpose: Tic-Tac-Toe game player in the browser, utilizing modules and factory functions

//module to create game board
const gameboard = (() => {
  const board = new Array(9);
  const container = document.querySelector("#game-container");

  const createBoard = () => {
    for (let i = 0; i < board.length; i++) {
      const space = document.createElement("div");
      space.classList.add("space");
      space.textContent = "X";
      container.appendChild(space);
    }
    console.table(board);
  };
  return {
    board,
    createBoard,
  };
})();

gameboard.createBoard();

//Factory Function to create players
const Player = (name) => {
  //Player symbol
  const setSymbol = () => {
    if (name === "1") {
      symbol = "X";
    } else {
      symbol = "O";
    }
  }; // end setSymbol
  return {
    setSymbol,
  };
};

//Module for game control/logic
const gameController = () => {
  //Create two players
  const createPlayers = () => {
    const player1 = Player("1");
    const player2 = Player("2");
    console.log(player1);
  };

  return {
      createPlayers,
  }
};