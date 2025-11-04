const fs = require('fs');

function sum(numbers) {
    if (numbers.length < 1) { // For cases where the array is empty
        return null;
    }
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number") { // If there is a non-integer in the array, skip it.
            continue;
        }
        total += numbers[i];
    }
    return total;
}

function minmax(numbers) {
    if (numbers.length < 1) { // For cases where the array is empty
        return null;
    }
    let minIndex = 0;
    let maxIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < numbers[minIndex]) {
            minIndex = i;
        }
        if (numbers[i] > numbers[maxIndex]) {
            maxIndex = i;
        }
    }
    return [numbers[minIndex], numbers[maxIndex]];
}

function average(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    if (total === 0) { // In case the sum equals zero or if there are no elements in the given array.
        return null;
    }
    return (total / numbers.length);
}

// Calculate the sum of all numbers
// Find the highest and lowest numbers
// Calculate the average

const numbersContent = fs.readFileSync('./data/sample-numbers.txt', 'utf8');
const lines = numbersContent.split('\n');
const numbers = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.length > 0) {
        numbers.push(parseFloat(line)); // Convert from string to integers
    }
}
console.log(minmax([1]));
console.log(minmax([7,7]));


console.log(sum(numbers));
console.log(minmax(numbers));
console.log(average(numbers));

module.exports = {sum, minmax, average};
