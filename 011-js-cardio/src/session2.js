'use strict';

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    // SOLUTION 1 - Return a single longest word
    return sen.split(' ').sort((w1, w2) => w1.length - w2.length).pop() ?? sen;
}

function longestWordB(sen) {
    // SOLUTION 1 - Return a single longest word
    let maxLength = 0;
    let maxWord = '';
    for (const word of sen.split(' ')) {
        if (word.length >= maxLength) {
            maxWord = word;
            maxLength = word.length;
        }
    }
    return maxWord;
}

function longestWordC(sen) {
    // SOLUTION 1 - Return a single longest word
    let maxLength = 0;
    let maxWord = '';
    let currentWord = '';
    const updateMax = () => {
        if (currentWord.length >= maxLength) {
            maxWord = currentWord;
            maxLength = currentWord.length;
        }
    };
    for (const char of sen) {
        if (char === ' ') {
            updateMax();
            currentWord = '';
        } else {
            currentWord += char;
        }
    }
    updateMax();
    return maxWord || sen.trim();
}

function longestWordC2(sen) {
    // SOLUTION 1 - Return a single longest word
    const helper = {
        maxLength: 0,
        maxWord: '',
        currentWord: '',
    };
    const updateMax = longestWordC2Helper.bind(helper);
    for (const char of sen) {
        if (char === ' ') {
            updateMax();
            helper.currentWord = '';
        } else {
            helper.currentWord += char;
        }
    }
    updateMax();
    return helper.maxWord || sen.trim();
}

function longestWordC2Helper() {
    if (this.currentWord.length >= this.maxLength) {
        this.maxWord = this.currentWord;
        this.maxLength = this.currentWord.length;
    }
}

function longestWord2(sen) {
    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    const words = sen.split(' ');
    const maxLength = Math.max(...words.map(w => w.length));
    return words.filter(w => w && w.length === maxLength);
}

function longestWord3(sen) {
    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
    const result = longestWord2(sen);
    return result.length > 1 ? result : (result[0] ?? '');
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    if (len <= 0) {
        return [];
    }

    const result = [];
    for (let i = 0; i < arr.length; i += len) {
        result.push(arr.slice(i, i + len));
    }
    return result;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    return arrays.flat(1);
}

function flattenArray2(arrays) {
    return arrays.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
}

function flattenArray3(arrays) {
    let result = [];
    arrays.forEach(val => {
        result = result.concat(val);
    });
    return result;
}

function flattenArray4(arrays) {
    const result = [];
    for (let i = 0; i < arrays.length; i++) {
        const value = arrays[i];
        if (Array.isArray(value)) {
            for (let j = 0; j < value.length; j++) {
                result.push(value[j]);
            }
        } else {
            result.push(value);
        }
    }
    return result;
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    const regex = /[^a-zA-Z]/gi;
    const sanitizedStr1 = str1.replace(regex, '').toLowerCase();
    const sanitizedStr2 = str2.replace(regex, '').toLowerCase();
    if (sanitizedStr1.length !== sanitizedStr2.length) {
        return false;
    }
    const makeSortedArr = (str) => str.split('').sort((a, b) => a.localeCompare(b));
    const sortedArr1 = makeSortedArr(sanitizedStr1);
    const sortedArr2 = makeSortedArr(sanitizedStr2);
    for (let i = 0; i < sortedArr1; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }
    return true;
}

function isAnagram2(str1, str2) {
    const regex = /[^a-zA-Z]/gi;
    const sanitizedStr1 = str1.replace(regex, '').toLowerCase();
    const sanitizedStr2 = str2.replace(regex, '').toLowerCase();
    if (sanitizedStr1.length !== sanitizedStr2.length) {
        return false;
    }
    const str1Characters = {};
    const str2Characters = {};
    for (let i = 0; i < sanitizedStr1.length; i++) {
        const charStr1 = sanitizedStr1.charAt(i);
        const charStr2 = sanitizedStr2.charAt(i);
        charStr1 in str1Characters ? str1Characters[charStr1]++ : str1Characters[charStr1] = 1;
        charStr2 in str2Characters ? str2Characters[charStr2]++ : str2Characters[charStr2] = 1;
    }
    for (const [char1, qty1] of Object.entries(str1Characters)) {
        const qty2 = str2Characters[char1] ?? 0;
        if (+qty1 !== qty2) {
            return false;
        }
    }
    return true;
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'iFmmP uiFsF'

function letterChanges(str) {
    const isLetterRegex = /[a-zA-Z]/g;
    const isVowelRegex = /[aeiouy]/g;
    return str.split('').map(char => {
        let transformedChar = char;
        if (char.match(isVowelRegex)) {
            transformedChar = char.toUpperCase();
        }
        if (transformedChar.match(isLetterRegex)) {
            const asciiCode = transformedChar.charCodeAt(0);
            return String.fromCharCode(asciiCode === 90 || asciiCode === 122 ? asciiCode - 25 : asciiCode + 1);
        }
        return transformedChar;
    }).join('');
}

const verify = (callback, arg1, arg2) => {
    console.log(callback(arg1, arg2));
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// verify(longestWordC2, 'hello');
// verify(longestWordC2, 'hannah');
// verify(longestWordC2, 'power rangers');
// verify(longestWordC2, ' ra   ');
// verify(longestWordC2, '   ');
// verify(longestWordC2, 'seals');
// verify(longestWordC2, 'Hi there, my name is Brad');
// verify(longestWordC2, 'anna');
// verify(longestWordC2, 'ania hana moon el fox song');
// verify(longestWordC2, ' anna');
// verify(longestWordC2, 'astronaut');
// verify(longestWordC2, '');
// verify(longestWordC2, 'racecar');
// verify(longestWordC2, 'rackar');
// verify(longestWordC2, 'i love javascript');
// verify(longestWordC2, 'take me to the m o o     n and moon');

// verify(chunkArray, [1, 2, 3, 4, 5, 6, 7], 3);
// verify(chunkArray, [1, 2, 3, 4, 5, 6, 7], 2);
// verify(chunkArray, [1, 2, 3, 4], 4);
// verify(chunkArray, [1, 2, 3, 4], 3);
// verify(chunkArray, [1, 2], 3);
// verify(chunkArray, [1, 2, 3, 4], 0);
// verify(chunkArray, [1, 2, 3, 4, 5, 6, 7], 1);
// verify(chunkArray, [], 2);
// verify(chunkArray, [], 1);

// verify(flattenArray4, [[1, 2], [3, 4], [5, 6], [7]]);
// verify(flattenArray4, [[1, [2, 3]], 4, [5, 6], 7]);
// verify(flattenArray4, [1, [2], [3, 4]]);
// verify(flattenArray4, [1, [2, 3], 4]);
// verify(flattenArray4, [1, [2]]);
// verify(flattenArray4, [[1], [2], [3], [4]]);
// verify(flattenArray4, [1, [2], 3, [4, 5, 6], 7]);
// verify(flattenArray4, [[[]]]);
// verify(flattenArray4, [[]]);
// verify(flattenArray4, []);

// verify(isAnagram, 'elbow', 'below');
// verify(isAnagram, 'Quid est veritas', 'Vir est qui adest');
// verify(isAnagram, 'Avida Dollars', 'Salvador Dali');
// verify(isAnagram, 'Lutni, ujaw mi', 'Julian Tuwim');
// verify(isAnagram, 'niedziela', 'dzielnia');
// verify(isAnagram, 'Niedziela', 'dzielenia');
// verify(isAnagram, 'miedziela', 'dzielnia');
// verify(isAnagram, 'cat', 'tar');
// verify(isAnagram, 'diste', 'speed');
// verify(isAnagram, 'elbow', 'bel');
// verify(isAnagram, 'mouse', '');
// verify(isAnagram, 'bellow', 'elbow');
// verify(isAnagram, 'ellboww', 'below');
// verify(isAnagram, 'Dormitory', 'dirty room##');

verify(letterChanges, 'hello there');
verify(letterChanges, 'hEllO thErE');
verify(letterChanges, 'Zebra');
verify(letterChanges, 'bear');
verify(letterChanges, '  ');
verify(letterChanges, 'z');
verify(letterChanges, 'Z');
verify(letterChanges, 'a');
verify(letterChanges, 'he@#@$ll0o the r e');