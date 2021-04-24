// Author: Dylan Parson
// Purpose: Tic-Tac-Toe game player in the browser, utilizing modules and factory functions

//Factory Function to create players
const Player = (name) => {
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
    return symbol = _setSymbol();
  }
  return {
    getSymbol,
  };
};

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
})();




//Module for game control/logic
const gameController = (() => {
  //Create two players
  const createPlayer = (name) => {
    return Player(name);
  };
  //method for turns 
  const turnOrder = () =>{
    
  }
  const ticTacToe = () => {
    const spaceList = document.querySelectorAll(".space");

    spaceList.forEach((space) => {
      space.addEventListener("click", () => {
        space.textContent = player1.getSymbol(); //testing
      });
    });
  }
  
  return {
    createPlayer,
    ticTacToe,
  }
})();

gameBoard.createBoard();
const player1 = gameController.createPlayer("1");
const player2 = gameController.createPlayer("2");
gameController.ticTacToe();