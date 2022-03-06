console.clear();

const addTransformButtonClickListener = () => {
    const transformBtn = document.querySelector('button#submit');
    transformBtn.addEventListener('click', () => displayTitleCased());
}

const displayTitleCased = () => {
    const inputElement = document.querySelector('input#value');
    const rawValue = inputElement.value;
    const titleCased1 = makeTitleCaseMethod1(rawValue);

    const resultElement1 = document.querySelector('#method-1-result');
    resultElement1.textContent = titleCased1;
}

const makeTitleCaseMethod1 = (value, wordsSeparator = ' ') => {
    return value.split(wordsSeparator).map(
        w => w[0] ? `${w[0].toUpperCase()}${w.slice(1, w.length)}` : w
    ).join(wordsSeparator);
}

addTransformButtonClickListener();