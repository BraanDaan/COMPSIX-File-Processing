const {wordCount, longestWord, lineCount} = require("/home/laad/Documents/work/appdev/COMPSIX-File-Processing/src/textAnalyzer.js");

describe('Word Count Tests', () => {
    test('An empty string', () => {
        const result = wordCount('');
        expect(result).toBe(0);
    });
    test('A Conjugated String', () => {
        const result = wordCount('ThisChangesNothing.');
        expect(result).toBe(1);
    });
    test('A string with just whitespace', () => {
        const result = wordCount('  ');
        expect(result).toBe(0);
    });
})

describe('Longest Word Tests', () => {
    test('An empty string', () => {
        const result = longestWord('');
        expect(result).toBe(null);
    });
    test('A Conjugated String', () => {
        const result = longestWord('EverSinceThenIKnew.');
        expect(result).toBe('EverSinceThenIKnew');
    });
    test('A string with multiple words of the same length', () => { // If there are multiple words with the same length, then return the first occurring word.
        const result = longestWord('James was going too fast, so he had to stop.');
        expect(result).toBe('James');
    });
})

describe('Line Count Tests', () => {
    test('A Standard String with four Lines', () => {
        const result = lineCount('One,\nTwo,\nThree,\nand Four!');
        expect(result).toBe(4);
    });
    test('A String with just three line breaks', () => {
        const result = lineCount('\n\n\n');
        expect(result).toBe(4);
    });
    test('An empty string', () => {
        const result = lineCount('');
        expect(result).toBe(1);
    });
})
