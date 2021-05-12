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

  const display = (symbol) => {
    const playerDisplay = document.querySelector("#current-player");
    playerDisplay.textContent = symbol;
  };

  //check for win, or tie
  const checkWin = () => {
    let result;
    const zero = board[0];
    const one = board[1];
    const two = board[2];
    const three = board[3];
    const four = board[4];
    const five = board[5];
    const six = board[6];
    const seven = board[7];
    const eight = board[8];

    result = _checkRows(zero, one, two, three, four, five, six, seven, eight);
    if (result === undefined) {
      result = _checkCols(zero, one, two, three, four, five, six, seven, eight);
      console.log(result);
    }
    if (result === undefined) {
      result = _checkDiag(zero, one, two, three, four, five, six, seven, eight);
    }
    return result;
  }; // end checkWin

  const _checkRows = (zero, one, two, three, four, five, six, seven, eight) => {
    let result;
    // if the first option in a row is blank, there cannot be a win in the rows
    if (zero != "") {
      // checks first row
      if (zero === one && zero === two) {
        if (zero === "X") {
          result = "X";
        } else if (zero === "O") {
          result = "O";
        } else {
          result = "draw";
        }
      }
    }
    if (three != "") {
      // checks second row
      if (three === four && three === five) {
        if (three === "X") {
          result = "X";
        } else if (three === "O") {
          result = "O";
        } else {
          result = "draw";
        }
      }
    }
    if (six != "") {
      // checks third row
      if (six === seven && six === eight) {
        if (six === "X") {
          result = "X";
        } else if (six === "X") {
          result = "X";
        } else {
          result = "draw";
        }
      }
    }

    return result;
  }; // end _checkRows

  const _checkCols = (zero, one, two, three, four, five, six, seven, eight) => {
    let result;
    if (zero != "") {
      if (zero === three && zero === six) {
        if (zero === "X") {
          result = "X";
        } else if (zero === "O") {
          result = "O";
        } else {
          result = "draw";
        }
      }
    }
    if (one != "") {
      if (one === four && one === seven) {
        if (one === "X") {
          result = "X";
        } else if (one === "O") {
          result = "O";
        } else {
          result = "draw";
        }
      }
    }
    if (two != "") {
      if (two === five && two === eight) {
        if (two === "X") {
          result = "X";
        } else if (two === "O") {
          result = "O";
        } else {
          result = "draw";
        }
      }
    }
    return result;
  };

  const _checkDiag = (zero, one, two, three, four, five, six, seven, eight) => {
    let result;
    if (zero === four && zero === eight) {
      if (zero === "X") {
        result = "X";
      } else if (zero === "O") {
        result = "O";
      } else {
        result = "draw";
      }
    } else if (two === four && two === six) {
      if (two === "X") {
        result = "X";
      } else if (two === "O") {
        result = "O";
      } else {
        result = "draw";
      }
    }
    return result;
  };

  return {
    createBoard,
    playerChoice,
    checkWin,
    display,
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
    let turnOrder = 1;
    let turnCounter = 0;
    let win = "";
    gameBoard.createBoard();
    const spaceList = document.querySelectorAll(".space");
    const player1 = _createPlayer("1");
    const player2 = _createPlayer("2");
    _addPlayers(player1, player2);

    //main game logic, adds event listener for each space
    spaceList.forEach((space) => { 
      space.addEventListener("click", () => {
        if (win === "" || win === undefined) {
          if (turnOrder == 1) {
            gameBoard.display(`Next player: ${player2.getSymbol()}`);
          } else {
            gameBoard.display(`Next player: ${player1.getSymbol()}`);
          }
          if (turnOrder === 1) {
            // checks which player's turn
            if (space.textContent === "") {
              // checks if that space has been chosen
              space.textContent = player1.getSymbol(); //testing
              gameBoard.playerChoice(space, player1.getSymbol());
              turnCounter++;
              if (turnCounter >= 5) {
                win = gameBoard.checkWin();
                console.log(`${win} wins the game`);
              }
              turnOrder = 2;
            }
          } else {
            if (space.textContent === "") {
              space.textContent = player2.getSymbol();
              gameBoard.playerChoice(space, player2.getSymbol());
              turnCounter++;
              if (turnCounter >= 5) {
                win = gameBoard.checkWin();
                console.log(win);
              }
              turnOrder = 1;
            }
          }
        }
        if(win === "X" || win === "O") {
          gameBoard.display(`${win} has won`);
        }
      });
    });
  };

  return {
    ticTacToe,
  };
})();

gameController.ticTacToe();
