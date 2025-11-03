const fs = require('fs');

function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function minmax(numbers) {
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

console.log(sum(numbers));
console.log(minmax(numbers));
console.log(average(numbers));
