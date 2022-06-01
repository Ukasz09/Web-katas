'use strict';

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

/**
 * Split, revers, join
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Only for loop - concatenation from the end
 */
function reverseString2(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}

/**
 * Only for loop - stack approach
 */
function reverseString3(str) {
    const stack = [];
    for (let c of str) {
        stack.push(c);
    }
    let result = '';
    while (stack.length > 0) {
        result += stack.pop();
    }
    return result;
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

/**
 * Using helper function
 */
function isPalindrome(str) {
    return reverseString(str) === str;
}

/**
 * Only for loop
 */
function isPalindrome2(str) {
    for (let i = 0; i < str.length / 2; i++) {
        const charsAtTheEdgeAreDiff = str.charAt(i) !== str.charAt(str.length - i - 1);
        if (charsAtTheEdgeAreDiff) {
            return false;
        }
    }
    return true;
}

/**
 * Without join function
 */
function isPalindrome3(str) {
    return JSON.stringify(str.split('').reverse()) === JSON.stringify(str.split(''));
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

/**
 * Convert to string, reverse, convert to number
 */
function reverseInt(int) {
    return Math.sign(int) * reverseString(Math.abs(int).toString());
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
    return str.split(' ').map(w => {
        const [fstChar, ...rest] = w.split('');
        return `${fstChar?.toUpperCase() ?? ''}${rest?.join('') ?? ''}`;
    }).join(' ');
}

function capitalizeLetters2(str) {
    return str.split(' ').map(w => {
        const chars = w.split('');
        chars[0] = chars[0]?.toUpperCase() ?? '';
        return chars.join('');
    }).join(' ');
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    const hits = {};
    str.split('').filter(c => c.trim()).map(c => c in hits ? hits[c] = hits[c] + 1 : hits[c] = 1);
    const sortedHits = Object.entries(hits).sort(([_k1, v1], [_k2, v2]) => v2 - v1);
    return sortedHits.length > 0 ? sortedHits[0][0] : '';
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3,
// instead of the number, print "Fizz", for multiples of 5 print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    const upThreshold = 100;
    const fromThreshold = 1;
    const result = [];
    for (let i = fromThreshold; i <= upThreshold; i++) {
        if (i % 15 === 0) {
            result.push('FizzBuzz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else {
            result.push(i);
        }
    }
    result.map(val => console.log(val));
}

function fizzBuzz2(fromThreshold = 1, upThreshold = 100) {
    const result = Array.from({length: upThreshold}, (_, i) => i + fromThreshold)
        .map(v => {
            if (v % 15 === 0) {
                return 'FizzBuzz';
            }
            if (v % 5 === 0) {
                return 'Buzz';
            }
            if (v % 3 === 0) {
                return 'Fizz';
            }
            return v;
        });
    result.map(val => console.log(val));
}

function fizzBuzz2OneLiner(fromThreshold = 1, upThreshold = 100) {
    Array.from({length: upThreshold}, (_, i) => i + fromThreshold)
        .map(v => (v % 15 === 0) ? 'FizzBuzz' : (v % 5 === 0) ? 'Buzz' : (v % 3 === 0) ? 'Fizz' : v)
        .map(val => console.log(val));
}

const verify = (callback, arg) => {
    console.log(callback(arg));
};

// verify(maxCharacter, 'hello');
// verify(maxCharacter, 'hannah');
// verify(maxCharacter, 'power rangers');
// verify(maxCharacter, 'seals');
// verify(maxCharacter, 'anna');
// verify(maxCharacter, 'astronaut');
// verify(maxCharacter, 'racecar');
// verify(maxCharacter, 'rackar');
// verify(maxCharacter, 'i love javascript');
// verify(maxCharacter, 'take me to the m o o     n and moon');

// verify(reverseInt, 1213);
// verify(reverseInt, 521);
// verify(reverseInt, 11);
// verify(reverseInt, 6);
// verify(reverseInt, +692);
// verify(reverseInt, 1001);
// verify(reverseInt, -34);
// verify(reverseInt, -1131);
// verify(reverseInt, -0);
// verify(reverseInt, 0);

// fizzBuzz();
// fizzBuzz2();
fizzBuzz2OneLiner();