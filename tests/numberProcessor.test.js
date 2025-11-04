const {sum, minmax, average} = require("/home/laad/Documents/work/appdev/COMPSIX-File-Processing/src/numberProcessor.js");

describe('Sum of Two Numbers Tests', () => {
    test('An empty Array', () => {
        const result = sum([]);
        expect(result).toBe(null);
    });
    test('If there is a non-integer in the array', () => {
        const result = sum([1, "three", 5]);
        expect(result).toBe(6);
    });
})

describe('Minimum, Maximum Tests', () => {
    test('An empty array', () => {
        const result = minmax([]);
        expect(result).toBe(null);
    });
    test('If all the integers are the same value', () => {
        const result = minmax([7,7,7]);
        expect(result).toStrictEqual([ 7, 7 ]);
    });
    test('If there is only one integer in the array', () => {
        const result = minmax([1]);
        expect(result).toStrictEqual([ 1, 1 ]);
    });
})

describe('Average Value Tests', () => {
    test('When the resulting total eaquals zero (Divide by zero test)', () => {
        const result = average([0, 0, 0]);
        expect(result).toBe(null);
    });
    test('An empty array', () => {
        const result = average([]);
        expect(result).toBe(null);
    });
})
