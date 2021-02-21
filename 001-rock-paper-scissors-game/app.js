const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    removeHandsAnimations();
    addPlayBtnListener();
  };

  const removeHandsAnimations = () => {
    const hands = document.querySelectorAll(".hands img");
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
  };

  const addPlayBtnListener = () => {
    const playBtn = document.querySelector(".intro button");
    const introContainer = document.querySelector(".intro");
    const matchContainer = document.querySelector(".match");
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
        const computerChoice = drawComputerOption();
        const playerChoice = this.textContent;

        computerHand.style.animation = "computerShake 2s ease";
        playerHand.style.animation = "playerShake 2s ease";
        setOptionButtonsDisabled(optionBtns, true);

        // Waiting for animation to end
        setTimeout(() => {
          computerHand.src = `./assets/${computerChoice}.png`;
          playerHand.src = `./assets/${playerChoice}.png`;

          compareHands(playerChoice, computerChoice);
          setOptionButtonsDisabled(optionBtns, false);
        }, 2000);
      });
    });
  };

  const drawComputerOption = () => {
    const computerOptions = ["rock", "paper", "scissors"];
    const computerNumber = Math.floor(Math.random() * computerOptions.length);
    return computerOptions[computerNumber];
  };

  const setOptionButtonsDisabled = (optionBtns, isDisabled) => {
    optionBtns.forEach((optionBtn) => {
      optionBtn.disabled = isDisabled;
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winnerText = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      onTieAction(winnerText);
      return;
    }
    if (isPlayerWin(playerChoice, computerChoice)) {
      onPlayerWinAction(winnerText);
      return;
    }
    onComputerWinAction(winnerText);
  };

  const onTieAction = (winnerText) => {
    winnerText.textContent = "It's a Tie !";
  };

  const isPlayerWin = (playerChoice, computerChoice) => {
    const whoWinWithWhom = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock",
    };
    return whoWinWithWhom[playerChoice] === computerChoice;
  };

  const onPlayerWinAction = (winnerText) => {
    winnerText.textContent = "Player Wins !";
    pScore++;
    updateScoreDisplay();
  };

  const onComputerWinAction = (winnerText) => {
    winnerText.textContent = "Computer Wins !";
    cScore++;
    updateScoreDisplay();
  };

  const updateScoreDisplay = () => {
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  // Invoke inner functions
  startGame();
  playMatch();
};

game();
