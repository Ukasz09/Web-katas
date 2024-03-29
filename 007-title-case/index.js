const addTransformButtonClickListener = () => {
    const transformBtn = document.querySelector('button#submit');
    transformBtn.addEventListener('click', () => {
        const inputElement = document.querySelector('input#value');
        const rawValue = inputElement.value;

        const titleCased1 = makeTitleCaseMethod1(rawValue);
        const resultElement1 = document.querySelector('#method-1-result');
        resultElement1.textContent = titleCased1;

        const titleCased2 = makeTitleCaseMethod2(rawValue);
        const resultElement2 = document.querySelector('#method-2-result');
        resultElement2.textContent = titleCased2;

        const titleCased3 = makeTitleCaseMethod3(rawValue);
        const resultElement3 = document.querySelector('#method-3-result');
        resultElement3.textContent = titleCased3;
    });
}

const addAutoTransformListener = () => {
    const input = document.querySelector('#value-2');
    input.addEventListener('input', () => {
        const result2Element = document.querySelector('#result-2');
        result2Element.textContent = makeTitleCaseMethod1(input.value);
    });
}

const onFormChanged = () => {
    const input = document.querySelector('#value-form');
    const resultFormElem = document.querySelector('#result-form');
    resultFormElem.textContent = makeTitleCaseMethod1(input.value);
}

const makeTitleCaseMethod1 = (value, wordsSeparator = ' ') => {
    return value
        .toLowerCase()
        .split(wordsSeparator).map(w => w[0] ? `${w[0].toUpperCase()}${w.slice(1, w.length)}` : w)
        .join(wordsSeparator);
}

const makeTitleCaseMethod2 = (value, wordsSeparator = ' ') => {
    const transformedWords = [];
    for (const w of value.toLowerCase().split(wordsSeparator)) {
        const transformed = w[0] ? w[0].toUpperCase() + w.slice(1, w.length) : w
        transformedWords.push(transformed);
    }
    return transformedWords.join(wordsSeparator);
}

const makeTitleCaseMethod3 = (value, wordsSeparator = ' ') => {
    if (value.length > 0) {
        return value.toLowerCase().split(wordsSeparator).map(w => w.replace(w[0], w[0].toUpperCase())).join(wordsSeparator);
    }
    return value;
}

console.clear();
addTransformButtonClickListener();
addAutoTransformListener();
