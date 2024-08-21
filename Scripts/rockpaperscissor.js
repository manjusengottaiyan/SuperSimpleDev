function handleOnKeyDown(event) {
  document.querySelector('.js-typing').innerHTML = "typing...";
  const usernameDisplayElement = document.querySelector('.js-user');
  usernameDisplayElement.innerHTML = document.querySelector('.js-username').value;
}

function handleOnKeyUp(event) {
  document.querySelector('.js-typing').innerHTML = "";

}

function onPageLoad() {
  // document.querySelector('.js-chosen-options').style = "display:;"
}
let message = ' Computers chooses '

let scores = {
  computer: 0,
  you: 0,
  tie: 0,
  result: null
};

localStorage.setItem("result", scores);

const rockImgSrc = "Images\rock.png";
const paperImgSrc = "Images\paper.png";
const scissorsImgSrc = "Images\scissors.png";
let yourMoveImgSrc;
let computerMoveImgSrc;
function logResult() {
  console.log(scores);
  localStorage.setItem('result', JSON.stringify(scores));
}


function playRockPaperScissors(ourMove) {
  const resultElement = document.querySelector('.js-result');
  const yourMoveElement = document.querySelector('.js-your-move');
  const computerMoveElement = document.querySelector('.js-computer-move');
  let computerMove = computerRoll();
  yourMoveElement.src = `Images/${ourMove}.png`;
  computerMoveElement.src = `Images/${computerMove}.png`;
  if (computerMove === ourMove) {
    //console.log("Tie." + message + computerMove);
    scores.result = "Tie."
    scores.tie++;
    logResult();
  }

  else if (computerMove == "Rock" && ourMove == "Paper") {
    // console.log("you win!" + message + computerMove);
    scores.result = "You Win!."
    scores.you++;
    logResult();
  }

  else if (computerMove == "Rock" && ourMove == "Scissors") {
    //console.log("Computer wins!" + message + computerMove);
    scores.result = "Computer wins!."

    scores.computer++;
    logResult();
  }

  else if (computerMove == "Paper" && ourMove == "Rock") {
    //console.log("Computer wins!" + message + computerMove);
    scores.result = "Computer wins!."
    scores.computer++;
    logResult();
  }

  else if (computerMove == "Paper" && ourMove == "Scissors") {
    //console.log("you win!" + message + computerMove); 
    scores.result = "You Win!."
    result.you++;
    logResult();
  }

  else if (computerMove == "Scissors" && ourMove == "Paper") {
    // console.log("Computer wins!" + message + computerMove);
    scores.result = "Computer wins!."
    result.computer++;
    logResult();
  }

  else if (computerMove == "Scissors" && ourMove == "Rock") {
    console.log("you win!" + message + computerMove);
    scores.result = "You Win!."
    result.you++; logResult();
  }

  // else {
  //   // console.log(ourMove + computerMove);
  // }

  resultElement.innerHTML = scores.result;
}

function computerRoll() {
  let randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber >= 0 && randomNumber < 1 / 3) return "Rock"
  else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) return "Paper"
  else return "Scissors";
}

function Reset() {
  scores.computer = 0;
  scores.you = 0;
  scores.tie = 0;
  logResult();
}
