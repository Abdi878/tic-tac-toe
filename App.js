const Gameboard = (() => {
  const boxes = document.querySelector(".container");
  let board = [];
  const retry = document.querySelector(".retry");
  const clear = () => {
    const boxList = document.querySelectorAll(".box")
    boxList.forEach((box) => (box.innerHTML = ""));
    board = [];
    retry.style.display = "none";
    display.innerText=""
    playGame()
  };
  const addToBoard = function(e){
    if(!winCon()) board[e.target.dataset.place] = e.target.innerText
  }

  const winCon = function () {
    if (board[0] == board[4] && board[4] == board[8]) {
      if (board[0] != undefined) {
        return true;
      }
    }
    if (board[2] == board[4] && board[4] == board[6]) {
      if (board[2] != undefined) {
        return true;
      }
    }
    if (board[0] == board[1] && board[1] == board[2]) {
      if (board[0] != undefined) {
        return true;
      }
    }
    if (board[0] == board[3] && board[3] == board[6]) {
      if (board[0] != undefined) {
        return true;
      }
    }
    if (board[3] == board[4] && board[4] == board[5]) {
      if (board[3] != undefined) {
        return true;
      }
    }
    if (board[6] == board[7] && board[7] == board[8]) {
      if (board[6] != undefined) {
        return true;
      }
    }
    if (board[1] == board[4] && board[4] == board[7]) {
      if (board[1] != undefined) {
        return true;
      }
    }
    if (board[2] == board[5] && board[5] == board[8]) {
      if (board[2] != undefined) {
        return true;
      }
    }
  };

  const Player = function (name, marker, turn) {
    this.wins = 0;
    this.name = name;
    this.marker = marker;
    this.turn = turn;
    return { name, marker, wins, turn };
  };
  const player1 = Player("1", "X", true);
  const player2 = Player("2", "O", false);

  const changePlayer = function (e, player1, player2) {
    player1.turn ? (player1.turn = false) : (player1.turn = true);
    player2.turn ? (player2.turn = false) : player2.turn - true;
    player1.turn ? (e.target.style.color = "blue") : (e.target.style.color = "red");
  };


  const addMark = function (player1, player2) {
    const clicky = (e) => {
      if(!winCon()){
      if (e.target.innerText == "" ) {
        player1.turn
          ? (e.target.innerText = player1.marker)
          : (e.target.innerText = player2.marker);
        
        changePlayer(e,player1,player2)
        addToBoard(e)
      }
      win(player1,player2)
      draw()}
    };
    boxes.addEventListener("click", clicky,);
  };
  const win = function (player1, player2) {
    if (winCon()) {
      let audio = new Audio("elprimosoundeffectmp3.mp3");
      audio.volume = 0.05;
      audio.play();
      retry.style.display = "block";
      winner = player1.turn ? player2 : player1;
      displayWinner(winner.name);
      winner.wins+=1
      console.log(winner.wins)
    }
  };
  const draw = function(){
    let boardLength = board.filter(elem=>elem!="").length
    if(boardLength==9 && !winCon()){
      display.innerText = `It is a tie!`
      retry.style.display = "block"
    }

  }
  const playGame = function () {
    addMark(player1, player2);
  };
  playGame();
  retry.addEventListener("click", clear);
  const display = document.querySelector(".display");
  const displayWinner = (winner) => {
    display.innerText = `The winner is Player ${winner}`;
  };
})();
