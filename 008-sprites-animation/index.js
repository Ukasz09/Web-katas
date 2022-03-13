const playerSpriteWidth = 256;
const playerSpriteHeight = 256;
const playerAnimationIntervalMs = 50;
const playerSpritesInRow = 10;
const playerTotalAmountOfSprites = 75
let playerBgPositionX = 0;
let playerBgPositionY = 0;
let playerPositionX = 0;
let playerPositionY = 0;

const playerSpritesInColumn = Math.ceil(playerTotalAmountOfSprites / playerSpritesInRow);
const playerAmountOfSpritesInLastRow = playerSpritesInRow - (playerSpritesInColumn * playerSpritesInRow - playerTotalAmountOfSprites);
const playerSprite = document.querySelector('#playerSprite');

const setupPlayerSprite = () => {
    playerSprite.style.width = `${playerSpriteWidth}px`;
    playerSprite.style.height = `${playerSpriteHeight}px`;
    setPlayerBgPositionX(0);
    setPlayerBgPositionY(0);
    setPlayerPosition(-playerSpriteWidth, window.innerHeight / 2);
    playerSprite.style.visibility = 'visible';
    setTimeout(() => setPlayerPosition(playerSpriteWidth, playerPositionY), 1500);
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

const setPlayerPosition = (x, y) => {
    playerPositionX = x;
    playerPositionY = y;
    playerSprite.style.transform = `translateX(${playerPositionX}px) translateY(${playerPositionY}px)`
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


setupPlayerSprite();
animatePlayerSprite();