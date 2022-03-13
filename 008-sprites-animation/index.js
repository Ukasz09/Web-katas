const playerSpriteWidth = 256;
const playerSpriteHeight = 256;
const playerAnimationIntervalMs = 50;
const playerSpritesInRow = 10;
const playerTotalAmountOfSprites = 75
const moveSpeedY = 200;
const moveSpeedX = 200;
let playerBgPositionX = 0;
let playerBgPositionY = 0;
let playerPositionX = 0;
let playerPositionY = 0;
let playerRotateY = 0;

const playerSpritesInColumn = Math.ceil(playerTotalAmountOfSprites / playerSpritesInRow);
const playerAmountOfSpritesInLastRow = playerSpritesInRow - (playerSpritesInColumn * playerSpritesInRow - playerTotalAmountOfSprites);
const playerSprite = document.querySelector('#playerSprite');

const setupPlayerSprite = () => {
    playerSprite.style.width = `${playerSpriteWidth}px`;
    playerSprite.style.height = `${playerSpriteHeight}px`;
    setPlayerBgPositionX(0);
    setPlayerBgPositionY(0);
    playerPositionX = -playerSpriteWidth;
    playerPositionY = window.innerHeight / 2;
    playerSprite.style.transform = `translateX(${playerPositionX}px) translateY(${playerPositionY}px)`;
    playerSprite.style.visibility = 'visible';
    setTimeout(() => transformPlayerPosition(playerSpriteWidth, playerPositionY), 1500);
}

const animatePlayerSprite = () => {
    setInterval(() => {
        const newBgPositionX = getNewPlayerPositionX();
        setPlayerBgPositionX(newBgPositionX);
        const newBgPositionY = getNewPlayerPositionY();
        setPlayerBgPositionY(newBgPositionY);
    }, playerAnimationIntervalMs)
}

const setPlayerBgPositionX = (x) => {
    playerBgPositionX = x;
    playerSprite.style.backgroundPositionX = `-${playerBgPositionX}px`;
}

const transformPlayerPosition = (x, y, rotateY = 0) => {
    playerPositionX = x;
    if (playerPositionX < 0) {
        playerPositionX = 0;
    } else if (playerPositionX > (window.innerWidth - playerSpriteWidth)) {
        playerPositionX = window.innerWidth - playerSpriteWidth;
    }

    playerPositionY = y;
    if (playerPositionY < 0) {
        playerPositionY = 0;
    } else if (playerPositionY > (window.innerHeight - playerSpriteHeight)) {
        playerPositionY = window.innerHeight - playerSpriteHeight;
    }

    playerRotateY = rotateY;
    playerSprite.style.transform = `translateX(${playerPositionX}px) translateY(${playerPositionY}px) rotateY(${rotateY}deg)`;
}

const setPlayerBgPositionY = (y) => {
    playerBgPositionY = y;
    playerSprite.style.backgroundPositionY = `-${playerBgPositionY}px`;
}

const getNewPlayerPositionX = () => {
    const newBgPositionX = playerBgPositionX + playerSpriteWidth;
    if (newBgPositionX >= playerSpritesInRow * playerSpriteWidth) {
        return 0;
    }
    const isLastRow = playerBgPositionY === (playerSpritesInColumn * playerSpriteHeight - playerSpriteHeight);
    if (isLastRow && newBgPositionX >= playerAmountOfSpritesInLastRow * playerSpriteWidth) {
        return 0;
    }
    return newBgPositionX;
}

const getNewPlayerPositionY = () => {
    if (playerBgPositionX === 0) {
        const newBgPositionY = playerBgPositionY + playerSpriteHeight;
        if (newBgPositionY >= playerSpritesInColumn * playerSpriteHeight) {
            return 0;
        }
        return newBgPositionY;
    }
    return playerBgPositionY;
}

const addPlayerArrowKeyPressedListener = () => {
    window.addEventListener("keydown", (event) => {
        if (event.defaultPrevented) {
            return;
        }
        let newPositionX = playerPositionX;
        let newPositionY = playerPositionY;
        let rotateY = playerRotateY;
        if (event.code === "KeyW") {
            newPositionY = playerPositionY - moveSpeedY;
        }
        if (event.code === "KeyS") {
            newPositionY = playerPositionY + moveSpeedY;
        }
        if (event.code === "KeyA") {
            newPositionX = playerPositionX - moveSpeedX;
            rotateY = 180;
        }
        if (event.code === "KeyD") {
            newPositionX = playerPositionX + moveSpeedX;
            rotateY = 0;
        }
        transformPlayerPosition(newPositionX, newPositionY, rotateY);
    });
}

setupPlayerSprite();
animatePlayerSprite();
addPlayerArrowKeyPressedListener();