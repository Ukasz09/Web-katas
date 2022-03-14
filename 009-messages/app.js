const iframeElem = document.querySelector('iframe');
const allowedOrigins = ['http://localhost:63342'];

const sendMessage = () => {
    const words = ['cat', 'like', 'dog', 'and', 'green', 'forest', 'and', 'nice', 'special', 'agent', 'dark', 'suspicious', 'content'];
    const wordsQty = getRandomInt(words.length) + 1;
    let specialMessage = '';
    for (let i = 0; i < wordsQty; i++) {
        specialMessage += `${words[getRandomInt(words.length)]} `;
    }
    iframeElem.contentWindow.postMessage({specialMessage}, '*');
};

window.addEventListener('message', (event) => {
    if (allowedOrigins.includes(event.origin)) {
        if (event.data.specialMessage2) {
            const messageContainer = document.querySelector('#received-message');
            messageContainer.innerHTML = `${event.data.specialMessage2}`;
        }
    } else {
        console.warn('Received message from not allowed origin: ', event);
    }
}, false);

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};