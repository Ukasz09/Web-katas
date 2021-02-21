const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introContainer = document.querySelector(".intro");
    const matchContainer = document.querySelector(".match");
    const hands = document.querySelectorAll(".hands img");

    // Remove animations
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    playBtn.addEventListener("click", () => {
      introContainer.classList.add("fade-out");
      matchContainer.classList.remove("fade-out");
      matchContainer.classList.add("fade-in");
    });
  };

  const playMatch = () => {
    const optionBtns = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    optionBtns.forEach((option) => {
      option.addEventListener("click", function () {
        const computerOptions = ["rock", "paper", "scissors"];

        // Draw computer option
        const computerNumber = Math.floor(Math.random() * computerOptions.length);
        const computerChoice = computerOptions[computerNumber];
        const playerChoice = this.textContent;

        computerHand.style.animation = "computerShake 2s ease";
        playerHand.style.animation = "playerShake 2s ease";
        setOptionButtonsDisabled(optionBtns, true);

        // Waiting for animation to end
        setTimeout(() => {
          // Update images
          computerHand.src = `./assets/${computerChoice}.png`;
          playerHand.src = `./assets/${playerChoice}.png`;

          compareHands(playerChoice, computerChoice);
          setOptionButtonsDisabled(optionBtns, false);
        }, 2000);
      });
    });
  };

  const setOptionButtonsDisabled = (optionBtns, isDisabled) => {
    optionBtns.forEach((optionBtn) => {
      optionBtn.disabled = isDisabled;
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winnerText = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winnerText.textContent = "It's a tie !";
      return;
    }

    const whoWinWithWhom = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock",
    };

    const playerWin = whoWinWithWhom[playerChoice] === computerChoice;
    if (playerWin) {
      winnerText.textContent = "Player win !";
      pScore++;
      updateScore();
      return;
    }

    // Computer win
    winnerText.textContent = "Computer win !";
    cScore++;
    updateScore();
  };

  const updateScore = () => {
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  startGame();
  playMatch();
};

game();
