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
  };
})(); // end gameBoard

//Module for game control/logic
const gameController = (() => {
  //Create players
  const _createPlayer = (name) => {
    return Player(name);
  };

  const _continue = () => {};

  const _showContScreen = (contScreen, player1, player2) =>{
    contScreen.style.display = "block";
    const domPlayer1 = document.querySelector("#player1");
    const domPlayer2 = document.querySelector("#player2")
    domPlayer1.textContent = `Player 1: ${player1.getScore()}`; 
    domPlayer2.textContent = `Player 2: ${player2.getScore()}`; 
  };
  const _hideContScreen = (contScreen) =>{
    contScreen.style.display = "none";
  }

  const ticTacToe = () => {
    let turnOrder = 1;
    let turnCounter = 0;
    let win = "";
    const contScreen = document.querySelector(".continue-hidden");
    let cont = true; // continue
    gameBoard.createBoard();
    const spaceList = document.querySelectorAll(".space");
    const player1 = _createPlayer("1");
    const player2 = _createPlayer("2"); 

    //adds event listener for each space
    spaceList.forEach((space) => {
      space.addEventListener("click", () => {
        //if a winner has not been identified, the turns will continue
        if (win === "" || win === undefined) {
          // checks which player's turn
          if (turnOrder === 1) {
            // checks if that space has been chosen
            if (space.textContent === "") {
              space.textContent = player1.getSymbol();
              gameBoard.playerChoice(space, player1.getSymbol());
              turnCounter++;
              //a winner cannot happen in less than five turns, no need to check for winners until that point
              if (turnCounter >= 5) {
                win = gameBoard.checkWin();
                console.log(`${win} wins the game`);
              }
              turnOrder = 2;
            }
          } else {
            // same as before but for player 2
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
        // when the winner has been identified, display the winner
        if (win === "X" || win === "O" ||turnCounter > 8) {
          switch(win){
            case "X":
              player1.incScore();
              break;
            case "O":
              player2.incScore();
              break;
          }
          _showContScreen(contScreen, player1, player2);
          const yes = document.querySelector("#yes");
        }
      });
    });
  };
  return {
    ticTacToe,
  };
})();

gameController.ticTacToe();
