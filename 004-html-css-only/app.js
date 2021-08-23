const addRotateBottomAnimation = (elem) => {
  const animationName = "flip-horizontal-bottom";
  elem.classList.add(animationName);
  return animationName;
};

const addRotateTopAnimation = (elem) => {
  const animationName = "flip-horizontal-top";
  elem.classList.add(animationName);
  return animationName;
};

const addFadeInShortAnimation = (elem) => {
  const animationName = "fade-in-short";
  elem.classList.add(animationName);
  return animationName;
};

const addPulseAnimation = (elem) => {
  const animationName = "pulse";
  elem.classList.add(animationName);
  return animationName;
};

const animateCards = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((c) => {
    const rotateAnimationClass = addRotateBottomAnimation(c);
    c.addEventListener("animationend", () => {
      c.classList.remove(rotateAnimationClass);
      const cardContent = c.querySelectorAll("div");
      cardContent.forEach((cardDiv) => {
        const fadeInAnimationClass = addFadeInShortAnimation(cardDiv);
        cardDiv.addEventListener("animationend", () => {
          cardDiv.classList.remove(fadeInAnimationClass);
        });
      });
    });
  });
};

const wobbleActionBtn = () => {
  const textArea = document.querySelector(".text-area");
  textArea.addEventListener("animationend", () => {
    const btn = document.querySelector("#action-btn");
    addPulseAnimation(btn);
  });
};

animateCards();
wobbleActionBtn();
