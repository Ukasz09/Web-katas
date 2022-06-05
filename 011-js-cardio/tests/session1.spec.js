const session1 = require('../src/session1');

describe('Session 1', () => {
    describe('Challenge 1', () => {
        describe('Function: reverseString', () => {
            test('Should correctly reverse text "hello"', () => {
                expect(session1.reverseString('hello')).toBe('olleh');
            });
            test('Should correctly reverse palindrome "hannah"', () => {
                expect(session1.reverseString('hannah')).toBe('hannah');
            });
            test('Should correctly reverse dyadic text', () => {
                expect(session1.reverseString('power rangers')).toBe('sregnar rewop');
            });
            test('Should correctly reverse text with special characters', () => {
                expect(session1.reverseString('p@##3rR')).toBe('Rr3##@p');
            });
            test('Should return empty string when empty string provided', () => {
                expect(session1.reverseString('')).toBe('');
            });
            test('Should return text with only whitespaces when text with only whitespaces provided', () => {
                expect(session1.reverseString('  ')).toBe('  ');
            });
        });
        describe('Function: reverseString2', () => {
            test('Should correctly reverse text "hello"', () => {
                expect(session1.reverseString2('hello')).toBe('olleh');
            });
            test('Should correctly reverse palindrome "hannah"', () => {
                expect(session1.reverseString2('hannah')).toBe('hannah');
            });
            test('Should correctly reverse dyadic text', () => {
                expect(session1.reverseString2('power rangers')).toBe('sregnar rewop');
            });
            test('Should correctly reverse text with special characters', () => {
                expect(session1.reverseString2('p@##3rR')).toBe('Rr3##@p');
            });
            test('Should return empty string when empty string provided', () => {
                expect(session1.reverseString2('')).toBe('');
            });
            test('Should return text with only whitespaces when text with only whitespaces provided', () => {
                expect(session1.reverseString2('  ')).toBe('  ');
            });
        });
        describe('Function: reverseString3', () => {
            test('Should correctly reverse text "hello"', () => {
                expect(session1.reverseString3('hello')).toBe('olleh');
            });
            test('Should correctly reverse palindrome "hannah"', () => {
                expect(session1.reverseString3('hannah')).toBe('hannah');
            });
            test('Should correctly reverse dyadic text', () => {
                expect(session1.reverseString3('power rangers')).toBe('sregnar rewop');
            });
            test('Should correctly reverse text with special characters', () => {
                expect(session1.reverseString3('p@##3rR')).toBe('Rr3##@p');
            });
            test('Should return empty string when empty string provided', () => {
                expect(session1.reverseString3('')).toBe('');
            });
            test('Should return text with only whitespaces when text with only whitespaces provided', () => {
                expect(session1.reverseString3('  ')).toBe('  ');
            });
        });
        describe('Function: reverseString4', () => {
            test('Should correctly reverse text "hello"', () => {
                expect(session1.reverseString4('hello')).toBe('olleh');
            });
            test('Should correctly reverse palindrome "hannah"', () => {
                expect(session1.reverseString4('hannah')).toBe('hannah');
            });
            test('Should correctly reverse dyadic text', () => {
                expect(session1.reverseString4('power rangers')).toBe('sregnar rewop');
            });
            test('Should correctly reverse text with special characters', () => {
                expect(session1.reverseString4('p@##3rR')).toBe('Rr3##@p');
            });
            test('Should return empty string when empty string provided', () => {
                expect(session1.reverseString4('')).toBe('');
            });
            test('Should return text with only whitespaces when text with only whitespaces provided', () => {
                expect(session1.reverseString4('  ')).toBe('  ');
            });
        });
        describe('Function: reverseString5', () => {
            test('Should correctly reverse text "hello"', () => {
                expect(session1.reverseString5('hello')).toBe('olleh');
            });
            test('Should correctly reverse palindrome "hannah"', () => {
                expect(session1.reverseString5('hannah')).toBe('hannah');
            });
            test('Should correctly reverse dyadic text', () => {
                expect(session1.reverseString5('power rangers')).toBe('sregnar rewop');
            });
            test('Should correctly reverse text with special characters', () => {
                expect(session1.reverseString5('p@##3rR')).toBe('Rr3##@p');
            });
            test('Should return empty string when empty string provided', () => {
                expect(session1.reverseString5('')).toBe('');
            });
            test('Should return text with only whitespaces when text with only whitespaces provided', () => {
                expect(session1.reverseString5('  ')).toBe('  ');
            });
        });
    });

    describe('Challenge 2', () => {
        describe('Function: isPalindrome', () => {
            test('Should return true for text "racecar"', () => {
                expect(session1.isPalindrome('racecar')).toBeTruthy();
            });
            test('Should return false for text "hello"', () => {
                expect(session1.isPalindrome('hello')).toBeFalsy();
            });
            test('Should return true for empty text', () => {
                expect(session1.isPalindrome('')).toBeTruthy();
            });
            test('Should return true for text with one letter', () => {
                expect(session1.isPalindrome('z')).toBeTruthy();
            });
            test('Should return true for multi words palindrome', () => {
                expect(session1.isPalindrome('Able was I ere I saw Elba')).toBeTruthy();
            });
            test('Should return true for word written in diff case', () => {
                expect(session1.isPalindrome('rAdar')).toBeTruthy();
            });
        });
        describe('Function: isPalindrome2', () => {
            test('Should return true for text "racecar"', () => {
                expect(session1.isPalindrome2('racecar')).toBeTruthy();
            });
            test('Should return false for text "hello"', () => {
                expect(session1.isPalindrome2('hello')).toBeFalsy();
            });
            test('Should return true for empty text', () => {
                expect(session1.isPalindrome2('')).toBeTruthy();
            });
            test('Should return true for text with one letter', () => {
                expect(session1.isPalindrome2('z')).toBeTruthy();
            });
            test('Should return true for multi words palindrome', () => {
                expect(session1.isPalindrome2('Able was I ere I saw Elba')).toBeTruthy();
            });
            test('Should return true for word written in diff case', () => {
                expect(session1.isPalindrome2('rAdar')).toBeTruthy();
            });
        });
        describe('Function: isPalindrome3', () => {
            test('Should return true for text "racecar"', () => {
                expect(session1.isPalindrome3('racecar')).toBeTruthy();
            });
            test('Should return false for text "hello"', () => {
                expect(session1.isPalindrome3('hello')).toBeFalsy();
            });
            test('Should return true for empty text', () => {
                expect(session1.isPalindrome3('')).toBeTruthy();
            });
            test('Should return true for text with one letter', () => {
                expect(session1.isPalindrome3('z')).toBeTruthy();
            });
            test('Should return true for multi words palindrome', () => {
                expect(session1.isPalindrome3('Able was I ere I saw Elba')).toBeTruthy();
            });
            test('Should return true for word written in diff case', () => {
                expect(session1.isPalindrome3('rAdar')).toBeTruthy();
            });
        });
    });

    describe('Challenge 3', () => {
        describe('Function: reverseInt', () => {
            test('Should return 125 for 521', () => {
                expect(session1.reverseInt(521)).toBe(125);
            });
            test('Should return 0 for 0', () => {
                expect(session1.reverseInt(0)).toBe(0);
            });
            test('Should return -173 for -371', () => {
                expect(session1.reverseInt(-371)).toBe(-173);
            });
            test('Should return 6 for 6', () => {
                expect(session1.reverseInt(6)).toBe(6);
            });
            test('Should return 1234567 for 7654321', () => {
                expect(session1.reverseInt(7654321)).toBe(1234567);
            });
            test('Should return -0 for -0', () => {
                expect(session1.reverseInt(-0)).toBe(-0);
            });

            test('Should return 1001 for 1001', () => {
                expect(session1.reverseInt(1001)).toBe(1001);
            });
        });
    });

    describe('Challenge 4', () => {
        describe('Function: capitalizeLetters', () => {
            test('Should return "I Love Javascript" for text "i love javascript"', () => {
                expect(session1.capitalizeLetters('i love javascript')).toBe('I Love Javascript');
            });
            test('Should return "JAVA" for text "jAVA"', () => {
                expect(session1.capitalizeLetters('jAVA')).toBe('JAVA');
            });
            test('Should return "Cat" for word "cat"', () => {
                expect(session1.capitalizeLetters('cat')).toBe('Cat');
            });
            test('Should return empty string for empty string', () => {
                expect(session1.capitalizeLetters('')).toBe('');
            });
            test('Should return "1test1" for "1test1"', () => {
                expect(session1.capitalizeLetters('1test1')).toBe('1test1');
            });
            test('Should return "%32$a1!" for "%32$a1!"', () => {
                expect(session1.capitalizeLetters('%32$a1!')).toBe('%32$a1!');
            });
        });
        describe('Function: capitalizeLetters2', () => {
            test('Should return "I Love Javascript" for text "i love javascript"', () => {
                expect(session1.capitalizeLetters2('i love javascript')).toBe('I Love Javascript');
            });
            test('Should return "JAVA" for text "jAVA"', () => {
                expect(session1.capitalizeLetters2('jAVA')).toBe('JAVA');
            });
            test('Should return "Cat" for word "cat"', () => {
                expect(session1.capitalizeLetters2('cat')).toBe('Cat');
            });
            test('Should return empty string for empty string', () => {
                expect(session1.capitalizeLetters2('')).toBe('');
            });
            test('Should return "1test1" for "1test1"', () => {
                expect(session1.capitalizeLetters2('1test1')).toBe('1test1');
            });
            test('Should return "%32$a1!" for "%32$a1!"', () => {
                expect(session1.capitalizeLetters2('%32$a1!')).toBe('%32$a1!');
            });
        });
        describe('Function: capitalizeLetters3', () => {
            test('Should return "I Love Javascript" for text "i love javascript"', () => {
                expect(session1.capitalizeLetters2('i love javascript')).toBe('I Love Javascript');
            });
            test('Should return "JAVA" for text "jAVA"', () => {
                expect(session1.capitalizeLetters3('jAVA')).toBe('JAVA');
            });
            test('Should return "Cat" for word "cat"', () => {
                expect(session1.capitalizeLetters3('cat')).toBe('Cat');
            });
            test('Should return empty string for empty string', () => {
                expect(session1.capitalizeLetters3('')).toBe('');
            });
            test('Should return "1test1" for "1test1"', () => {
                expect(session1.capitalizeLetters3('1test1')).toBe('1test1');
            });
            test('Should return "%32$a1!" for "%32$a1!"', () => {
                expect(session1.capitalizeLetters3('%32$a1!')).toBe('%32$a1!');
            });
        });
        describe('Function: capitalizeLetters4', () => {
            test('Should return "I Love Javascript" for text "i love javascript"', () => {
                expect(session1.capitalizeLetters2('i love javascript')).toBe('I Love Javascript');
            });
            test('Should return "JAVA" for text "jAVA"', () => {
                expect(session1.capitalizeLetters3('jAVA')).toBe('JAVA');
            });
            test('Should return "Cat" for word "cat"', () => {
                expect(session1.capitalizeLetters4('cat')).toBe('Cat');
            });
            test('Should return empty string for empty string', () => {
                expect(session1.capitalizeLetters4('')).toBe('');
            });
            test('Should return "1test1" for "1test1"', () => {
                expect(session1.capitalizeLetters4('1test1')).toBe('1test1');
            });
            test('Should return "%32$a1!" for "%32$a1!"', () => {
                expect(session1.capitalizeLetters4('%32$a1!')).toBe('%32$a1!');
            });
        });
    });

    describe('Challenge 5', () => {
        describe('Function: maxCharacter', () => {
            test('Should return "a" for "javascript"', () => {
                expect(session1.maxCharacter('javascript')).toBe('a');
            });
            test('Should return "s" for "seals"', () => {
                expect(session1.maxCharacter('seals')).toBe('s');
            });
            test('Should return "t" for "tomato"', () => {
                expect(session1.maxCharacter('tomato')).toBe('t');
            });
            test('Should return "d" for "rreaDdied"', () => {
                expect(session1.maxCharacter('rreaDdied')).toBe('d');
            });
            test('Should return first letter for word with each char different', () => {
                expect(session1.maxCharacter('snake')).toBe('s');
            });
            test('Should return empty string for empty string', () => {
                expect(session1.maxCharacter('')).toBe('');
            });
            test('Should return "$" for "b$tm$n"', () => {
                expect(session1.maxCharacter('b$tm$n')).toBe('$');
            });
            test('Should return "0" for "bat00"', () => {
                expect(session1.maxCharacter('bat00')).toBe('0');
            });
            test('Should return "e" for "VENGEANCE"', () => {
                expect(session1.maxCharacter('VENGEANCE')).toBe('e');
            });
        });
    });

    describe('Challenge 6', () => {
        describe('Function: fizzBuzz', () => {
            test('Should return proper values when function with no params called', () => {
                const result = session1.fizzBuzz();
                expect(result).toHaveLength(100);
                expect(result[2] === 'Fizz');
                expect(result[4] === 'Buzz');
                expect(result[14] === 'FizzBuzz');
                expect(result[29] === 'FizzBuzz');
                expect(result[80] === 'Fizz');
                expect(result[94] === 'Buzz');
            });

            test('Should return proper values when started value === 15', () => {
                const result = session1.fizzBuzz(15);
                expect(result).toHaveLength(86);
                expect(result[0] === 'FizzBuzz');
                expect(result[3] === 'Buzz');
                expect(result[14] === 'FizzBuzz');
            });

            test('Should return ["FizzBuzz"] for fromThreshold===15 and upThreshold===15', () => {
                const result = session1.fizzBuzz(15, 15);
                expect(result).toHaveLength(1);
                expect(result).toContain('FizzBuzz');
            });

            test('Should return ["Fizz"] for fromThreshold===6 and upThreshold===6', () => {
                const result = session1.fizzBuzz(6, 6);
                expect(result).toHaveLength(1);
                expect(result).toContain('Fizz');
            });

            test('Should return ["Buzz"] for fromThreshold===10 and upThreshold===10', () => {
                const result = session1.fizzBuzz(10, 10);
                expect(result).toHaveLength(1);
                expect(result).toContain('Buzz');
            });

            test('Should return [0, 1, 2, "Fizz", 4, "Buzz"] for fromThreshold===0 and upThreshold===5', () => {
                const expected = ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz'];
                const result = session1.fizzBuzz(0, 5);
                expect(result).toHaveLength(expected.length);
                expect(result).toEqual(expected);
            });

            test('Should return empty array when fromThreshold>upThreshold', () => {
                expect(session1.fizzBuzz(5, 2)).toHaveLength(0);
            });
        });
        describe('Function: fizzBuzz2', () => {
            test('Should return proper values when function with no params called', () => {
                const result = session1.fizzBuzz2();
                expect(result).toHaveLength(100);
                expect(result[2] === 'Fizz');
                expect(result[4] === 'Buzz');
                expect(result[14] === 'FizzBuzz');
                expect(result[29] === 'FizzBuzz');
                expect(result[80] === 'Fizz');
                expect(result[94] === 'Buzz');
            });

            test('Should return proper values when started value === 15', () => {
                const result = session1.fizzBuzz2(15);
                expect(result).toHaveLength(86);
                expect(result[0] === 'FizzBuzz');
                expect(result[3] === 'Buzz');
                expect(result[14] === 'FizzBuzz');
            });

            test('Should return ["FizzBuzz"] for fromThreshold===15 and upThreshold===15', () => {
                const result = session1.fizzBuzz2(15, 15);
                expect(result).toHaveLength(1);
                expect(result).toContain('FizzBuzz');
            });

            test('Should return ["Fizz"] for fromThreshold===6 and upThreshold===6', () => {
                const result = session1.fizzBuzz2(6, 6);
                expect(result).toHaveLength(1);
                expect(result).toContain('Fizz');
            });

            test('Should return ["Buzz"] for fromThreshold===10 and upThreshold===10', () => {
                const result = session1.fizzBuzz2(10, 10);
                expect(result).toHaveLength(1);
                expect(result).toContain('Buzz');
            });

            test('Should return [0, 1, 2, "Fizz", 4, "Buzz"] for fromThreshold===0 and upThreshold===5', () => {
                const expected = ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz'];
                const result = session1.fizzBuzz2(0, 5);
                expect(result).toHaveLength(expected.length);
                expect(result).toEqual(expected);
            });

            test('Should return empty array when fromThreshold>upThreshold', () => {
                expect(session1.fizzBuzz2(5, 2)).toHaveLength(0);
            });
        });
        describe('Function: fizzBuzz2OneLiner', () => {
            test('Should return proper values when function with no params called', () => {
                const result = session1.fizzBuzz2OneLiner();
                expect(result).toHaveLength(100);
                expect(result[2] === 'Fizz');
                expect(result[4] === 'Buzz');
                expect(result[14] === 'FizzBuzz');
                expect(result[29] === 'FizzBuzz');
                expect(result[80] === 'Fizz');
                expect(result[94] === 'Buzz');
            });

            test('Should return proper values when started value === 15', () => {
                const result = session1.fizzBuzz2OneLiner(15);
                expect(result).toHaveLength(86);
                expect(result[0] === 'FizzBuzz');
                expect(result[3] === 'Buzz');
                expect(result[14] === 'FizzBuzz');
            });

            test('Should return ["FizzBuzz"] for fromThreshold===15 and upThreshold===15', () => {
                const result = session1.fizzBuzz2OneLiner(15, 15);
                expect(result).toHaveLength(1);
                expect(result).toContain('FizzBuzz');
            });

            test('Should return ["Fizz"] for fromThreshold===6 and upThreshold===6', () => {
                const result = session1.fizzBuzz2OneLiner(6, 6);
                expect(result).toHaveLength(1);
                expect(result).toContain('Fizz');
            });

            test('Should return ["Buzz"] for fromThreshold===10 and upThreshold===10', () => {
                const result = session1.fizzBuzz2OneLiner(10, 10);
                expect(result).toHaveLength(1);
                expect(result).toContain('Buzz');
            });

            test('Should return [0, 1, 2, "Fizz", 4, "Buzz"] for fromThreshold===0 and upThreshold===5', () => {
                const expected = ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz'];
                const result = session1.fizzBuzz2OneLiner(0, 5);
                expect(result).toHaveLength(expected.length);
                expect(result).toEqual(expected);
            });

            test('Should return empty array when fromThreshold>upThreshold', () => {
                expect(session1.fizzBuzz2OneLiner(5, 2)).toHaveLength(0);
            });
        });
        describe('Function: fizzBuzz2OneLinerV2', () => {
            test('Should return proper values when function with no params called', () => {
                const result = session1.fizzBuzz2OneLinerV2();
                expect(result).toHaveLength(100);
                expect(result[2] === 'Fizz');
                expect(result[4] === 'Buzz');
                expect(result[14] === 'FizzBuzz');
                expect(result[29] === 'FizzBuzz');
                expect(result[80] === 'Fizz');
                expect(result[94] === 'Buzz');
            });

            test('Should return proper values when started value === 15', () => {
                const result = session1.fizzBuzz2OneLinerV2(15);
                expect(result).toHaveLength(86);
                expect(result[0] === 'FizzBuzz');
                expect(result[3] === 'Buzz');
                expect(result[14] === 'FizzBuzz');
            });

            test('Should return ["FizzBuzz"] for fromThreshold===15 and upThreshold===15', () => {
                const result = session1.fizzBuzz2OneLinerV2(15, 15);
                expect(result).toHaveLength(1);
                expect(result).toContain('FizzBuzz');
            });

            test('Should return ["Fizz"] for fromThreshold===6 and upThreshold===6', () => {
                const result = session1.fizzBuzz2OneLinerV2(6, 6);
                expect(result).toHaveLength(1);
                expect(result).toContain('Fizz');
            });

            test('Should return ["Buzz"] for fromThreshold===10 and upThreshold===10', () => {
                const result = session1.fizzBuzz2OneLinerV2(10, 10);
                expect(result).toHaveLength(1);
                expect(result).toContain('Buzz');
            });

            test('Should return [0, 1, 2, "Fizz", 4, "Buzz"] for fromThreshold===0 and upThreshold===5', () => {
                const expected = ['FizzBuzz', 1, 2, 'Fizz', 4, 'Buzz'];
                const result = session1.fizzBuzz2OneLinerV2(0, 5);
                expect(result).toHaveLength(expected.length);
                expect(result).toEqual(expected);
            });

            test('Should return empty array when fromThreshold>upThreshold', () => {
                expect(session1.fizzBuzz2OneLinerV2(5, 2)).toHaveLength(0);
            });
        });
    });
});