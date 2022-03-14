const allowedOrigins = ['http://localhost:63342'];

window.addEventListener('message', (event) => {
    if (allowedOrigins.includes(event.origin)) {
        if (event.data.specialMessage) {
            const messageContainer = document.querySelector('#received-message');
            messageContainer.innerHTML = `${event.data.specialMessage}`;
        }
    } else {
        console.warn('Received message from not allowed origin: ', event);
    }
}, false);

const sendMessage = () => {
    const words = ['cat', 'like', 'dog', 'and', 'green', 'forest', 'and', 'nice', 'special', 'agent', 'dark', 'suspicious', 'content'];
    const wordsQty = getRandomInt(words.length) + 1;
    let specialMessage2 = '';
    for (let i = 0; i < wordsQty; i++) {
        specialMessage2 += `${words[getRandomInt(words.length)]} `;
    }
    window.parent.window.postMessage({specialMessage2}, '*');
};

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};