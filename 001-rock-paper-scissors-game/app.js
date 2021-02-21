const game = () => {
  let pScore = 0;
  let cScore = 0;
  const amountOfScoreToWin = 3;

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
    playBtn.addEventListener("click", () => {
      resetGame();
    });
  };

  const resetGame = () => {
    const neededWinQtyText = document.querySelector(".needed-win-qty");
    const introContainer = document.querySelector(".intro");
    const matchContainer = document.querySelector(".match");
    const scoresContainer = document.querySelector(".scores");
    const winnerText = document.querySelector(".winner");

    resetHandsImg();

    neededWinQtyText.textContent = amountOfScoreToWin;
    pScore = 0;
    cScore = 0;
    updateScoreDisplay();

    winnerText.textContent = "Choose option";

    introContainer.classList.remove("fade-in");
    introContainer.classList.add("fade-out");

    matchContainer.classList.remove("fade-out");
    matchContainer.classList.add("fade-in");

    scoresContainer.classList.remove("fade-out");
    scoresContainer.classList.add("fade-in");
  };

  const resetHandsImg = () => {
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    computerHand.src = `./assets/rock.png`;
    playerHand.src = `./assets/rock.png`;
  };

  const playMatch = () => {
    const optionBtns = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    optionBtns.forEach((option) => {
      option.addEventListener("click", function () {
        resetHandsImg();
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
          checkGameIsEnd();
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

  const checkGameIsEnd = () => {
    if (pScore === amountOfScoreToWin) {
      onGameEndAction("Player");
      return;
    }
    if (cScore === amountOfScoreToWin) {
      onGameEndAction("Computer");
      return;
    }
  };

  const onGameEndAction = (winnerName) => {
    const matchContainer = document.querySelector(".match");
    const introContainer = document.querySelector(".intro");
    const introText = document.querySelector(".intro h1");
    const introPlayBtn = document.querySelector(".intro button");
    matchContainer.classList.remove("fade-in");
    matchContainer.classList.add("fade-out");
    introText.textContent = `${winnerName} win the whole game !`;
    introContainer.classList.remove("fade-out");
    introContainer.classList.add("fade-in");
    introPlayBtn.textContent = "Play again";
  };

  // Invoke inner functions
  startGame();
  playMatch();
};

game();
